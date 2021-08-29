    -- phpMyAdmin SQL Dump
    -- version 5.0.3
    -- https://www.phpmyadmin.net/
    --
    -- Host: 127.0.0.1
    -- Czas generowania: 27 Sie 2021, 16:57
    -- Wersja serwera: 10.4.14-MariaDB
    -- Wersja PHP: 7.2.34

    SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
    START TRANSACTION;
    SET time_zone = "+00:00";


    /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
    /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
    /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
    /*!40101 SET NAMES utf8mb4 */;

    --
    -- Baza danych: `webapp`
    --

    -- --------------------------------------------------------

    --
    -- Struktura tabeli dla tabeli `address`
    --

    CREATE TABLE `address` (
    `id` int(11) NOT NULL,
    `street` varchar(45) NOT NULL,
    `number` varchar(45) NOT NULL,
    `user_id` int(11) NOT NULL,
    `order_id` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    -- --------------------------------------------------------

    --
    -- Struktura tabeli dla tabeli `cartitem`
    --

    CREATE TABLE `cartitem` (
    `id` int(11) NOT NULL,
    `quantity` int(11) NOT NULL,
    `Product_id` int(11) NOT NULL,
    `user_id` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    -- --------------------------------------------------------

    --
    -- Struktura tabeli dla tabeli `category`
    --

    CREATE TABLE `category` (
    `id` int(11) NOT NULL,
    `name` varchar(45) NOT NULL,
    `description` varchar(100) DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    --
    -- Zrzut danych tabeli `category`
    --

    INSERT INTO `category` (`id`, `name`, `description`) VALUES
    (1, 'Produkty mleczne', 'Produkty mleczne'),
    (2, 'Chleb', 'Chleb');

    -- --------------------------------------------------------

    --
    -- Struktura tabeli dla tabeli `favourite_list`
    --

    CREATE TABLE `favourite_list` (
    `product_id` int(11) NOT NULL,
    `user_id` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    -- --------------------------------------------------------

    --
    -- Struktura tabeli dla tabeli `order`
    --

    CREATE TABLE `order` (
    `id` int(11) NOT NULL,
    `status` varchar(45) NOT NULL,
    `total` float NOT NULL,
    `address` varchar(90) NOT NULL,
    `mobile` varchar(45) NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    -- --------------------------------------------------------

    --
    -- Struktura tabeli dla tabeli `orderitem`
    --

    CREATE TABLE `orderitem` (
    `id` int(11) NOT NULL,
    `quanitty` int(11) NOT NULL,
    `Product_id` int(11) NOT NULL,
    `order_id` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    -- --------------------------------------------------------

    --
    -- Struktura tabeli dla tabeli `product`
    --

    CREATE TABLE `product` (
    `id` int(11) NOT NULL,
    `name` varchar(45) NOT NULL,
    `description` varchar(45) DEFAULT NULL,
    `price` float NOT NULL,
    `isavailable` tinyint(4) DEFAULT NULL,
    `image` text DEFAULT NULL,
    `User_id` int(11) NOT NULL,
    `category_id` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    --
    -- Zrzut danych tabeli `product`
    --

    INSERT INTO `product` (`id`, `name`, `description`, `price`, `isavailable`, `image`, `User_id`, `category_id`) VALUES
    (1, 'Mleko', '3.2%', 2.1, 1, 'https://digitalcontent.api.tesco.com/v2/media/ghs/964d2c59-5242-47f8-a090-979e841f4949/snapshotimagehandler_938846387.jpeg?h=540&w=540', 1, 1),
    (2, 'Chleb', 'Zwykły', 1, 1, NULL, 1, 2);

    -- --------------------------------------------------------

    --
    -- Struktura tabeli dla tabeli `transaction`
    --

    CREATE TABLE `transaction` (
    `id` int(11) NOT NULL,
    `status` varchar(45) NOT NULL,
    `created_at` datetime NOT NULL,
    `finished_at` datetime DEFAULT NULL,
    `order_id` int(11) NOT NULL,
    `user_id` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    -- --------------------------------------------------------

    --
    -- Struktura tabeli dla tabeli `user`
    --

    CREATE TABLE `user` (
    `id` int(11) NOT NULL,
    `first_name` varchar(45) NOT NULL,
    `last_name` varchar(45) NOT NULL,
    `username` varchar(45) NOT NULL,
    `passwd` varchar(45) NOT NULL,
    `email` varchar(45) NOT NULL,
    `mobile` varchar(45) NOT NULL,
    `User_Type_id` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    --
    -- Zrzut danych tabeli `user`
    --

    INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `passwd`, `email`, `mobile`, `User_Type_id`) VALUES
    (1, 'Oleh', 'Foliush', 'hustman', '12345', 'olvbman@gmail.com', '+380973333830', 2),
    (4, 'Oleh1', 'Foliush', 'hustman1', '12345', 'olvbman1@gmail.com', '+380973333830', 2),
    (5, 'olvb', 'Folko', 'Dabm', '12345', 'das@i.ua', '123456789', 2),
    (9, 'olehfo', 'Folko123', 'Dabm123', '12345', 'da123s@i.ua', '123456789', 2);

    -- --------------------------------------------------------

    --
    -- Struktura tabeli dla tabeli `user_type`
    --

    CREATE TABLE `user_type` (
    `id` int(11) NOT NULL,
    `Utypename` varchar(45) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    --
    -- Zrzut danych tabeli `user_type`
    --

    INSERT INTO `user_type` (`id`, `Utypename`) VALUES
    (1, 'Admin'),
    (2, 'Client');

    --
    -- Indeksy dla zrzutów tabel
    --

    --
    -- Indeksy dla tabeli `address`
    --
    ALTER TABLE `address`
    ADD PRIMARY KEY (`id`),
    ADD KEY `fk_address_user1_idx` (`user_id`),
    ADD KEY `fk_address_order1_idx` (`order_id`);

    --
    -- Indeksy dla tabeli `cartitem`
    --
    ALTER TABLE `cartitem`
    ADD PRIMARY KEY (`id`),
    ADD KEY `fk_cartItem_Product1_idx` (`Product_id`),
    ADD KEY `fk_cartItem_user1_idx` (`user_id`);

    --
    -- Indeksy dla tabeli `category`
    --
    ALTER TABLE `category`
    ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `name_UNIQUE` (`name`);

    --
    -- Indeksy dla tabeli `favourite_list`
    --
    ALTER TABLE `favourite_list`
    ADD PRIMARY KEY (`product_id`,`user_id`),
    ADD KEY `fk_product_has_user_user1_idx` (`user_id`),
    ADD KEY `fk_product_has_user_product1_idx` (`product_id`);

    --
    -- Indeksy dla tabeli `order`
    --
    ALTER TABLE `order`
    ADD PRIMARY KEY (`id`);

    --
    -- Indeksy dla tabeli `orderitem`
    --
    ALTER TABLE `orderitem`
    ADD PRIMARY KEY (`id`),
    ADD KEY `fk_orderitem_Product1_idx` (`Product_id`),
    ADD KEY `fk_orderitem_order1_idx` (`order_id`);

    --
    -- Indeksy dla tabeli `product`
    --
    ALTER TABLE `product`
    ADD PRIMARY KEY (`id`,`category_id`),
    ADD KEY `fk_Product_User1_idx` (`User_id`),
    ADD KEY `fk_product_category1_idx` (`category_id`);

    --
    -- Indeksy dla tabeli `transaction`
    --
    ALTER TABLE `transaction`
    ADD PRIMARY KEY (`id`),
    ADD KEY `fk_transaction_order1_idx` (`order_id`),
    ADD KEY `fk_transaction_user1_idx` (`user_id`);

    --
    -- Indeksy dla tabeli `user`
    --
    ALTER TABLE `user`
    ADD PRIMARY KEY (`id`,`User_Type_id`),
    ADD UNIQUE KEY `username_UNIQUE` (`username`),
    ADD UNIQUE KEY `email_UNIQUE` (`email`),
    ADD KEY `fk_user_User_Type1_idx` (`User_Type_id`);

    --
    -- Indeksy dla tabeli `user_type`
    --
    ALTER TABLE `user_type`
    ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `Utypename_UNIQUE` (`Utypename`);

    --
    -- AUTO_INCREMENT dla zrzuconych tabel
    --

    --
    -- AUTO_INCREMENT dla tabeli `address`
    --
    ALTER TABLE `address`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

    --
    -- AUTO_INCREMENT dla tabeli `cartitem`
    --
    ALTER TABLE `cartitem`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

    --
    -- AUTO_INCREMENT dla tabeli `category`
    --
    ALTER TABLE `category`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

    --
    -- AUTO_INCREMENT dla tabeli `order`
    --
    ALTER TABLE `order`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

    --
    -- AUTO_INCREMENT dla tabeli `orderitem`
    --
    ALTER TABLE `orderitem`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

    --
    -- AUTO_INCREMENT dla tabeli `product`
    --
    ALTER TABLE `product`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

    --
    -- AUTO_INCREMENT dla tabeli `user`
    --
    ALTER TABLE `user`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

    --
    -- AUTO_INCREMENT dla tabeli `user_type`
    --
    ALTER TABLE `user_type`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

    --
    -- Ograniczenia dla zrzutów tabel
    --

    --
    -- Ograniczenia dla tabeli `address`
    --
    ALTER TABLE `address`
    ADD CONSTRAINT `fk_address_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_address_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

    --
    -- Ograniczenia dla tabeli `cartitem`
    --
    ALTER TABLE `cartitem`
    ADD CONSTRAINT `fk_cartItem_Product1` FOREIGN KEY (`Product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_cartItem_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

    --
    -- Ograniczenia dla tabeli `favourite_list`
    --
    ALTER TABLE `favourite_list`
    ADD CONSTRAINT `fk_product_has_user_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_product_has_user_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

    --
    -- Ograniczenia dla tabeli `orderitem`
    --
    ALTER TABLE `orderitem`
    ADD CONSTRAINT `fk_orderitem_Product1` FOREIGN KEY (`Product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_orderitem_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

    --
    -- Ograniczenia dla tabeli `product`
    --
    ALTER TABLE `product`
    ADD CONSTRAINT `fk_Product_User1` FOREIGN KEY (`User_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_product_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

    --
    -- Ograniczenia dla tabeli `transaction`
    --

    
    ALTER TABLE `transaction`
    ADD CONSTRAINT `fk_transaction_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_transaction_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

    --
    -- Ograniczenia dla tabeli `user`
    --
    ALTER TABLE `user`
    ADD CONSTRAINT `fk_user_User_Type1` FOREIGN KEY (`User_Type_id`) REFERENCES `user_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
    COMMIT;

    /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
    /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
    /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
