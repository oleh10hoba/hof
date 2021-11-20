-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 20 Lis 2021, 18:42
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
-- Struktura tabeli dla tabeli `cartitem`
--

CREATE TABLE `cartitem` (
  `id` int(11) NOT NULL,
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
(1, 'Produkty mleczne', 'Nabiał'),
(2, 'Chleb', 'Chleb'),
(3, 'Alkohol', 'Napój alkoholowy'),
(4, 'Owoce', 'Owoce'),
(5, 'Warzywa', 'Warzywa'),
(6, 'Słodyczy', 'Słodyczy'),
(7, 'Ryba', 'Ryba'),
(8, 'Napoje', 'Napoje bezalkoholowe'),
(9, 'Mięso', 'Mięso');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `favourite_list`
--

CREATE TABLE `favourite_list` (
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `favourite_list`
--

INSERT INTO `favourite_list` (`product_id`, `user_id`) VALUES
(3, 14),
(11, 14),
(11, 35),
(42, 35),
(43, 14),
(46, 14);

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
  `updated_at` datetime DEFAULT NULL,
  `isSelfPickup` int(11) NOT NULL,
  `shopId` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `order`
--

INSERT INTO `order` (`id`, `status`, `total`, `address`, `mobile`, `created_at`, `updated_at`, `isSelfPickup`, `shopId`, `user_id`) VALUES
(72, 'wykonanie', 13, 'Aberta 1 ds. 1', '12345678', '2021-11-17 11:36:35', NULL, 1, NULL, 14),
(73, 'wykonane', 208.62, 'Aberta 1 ds. 1', '12345678', '2021-11-17 15:03:26', NULL, 1, 2, 14);

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

--
-- Zrzut danych tabeli `orderitem`
--

INSERT INTO `orderitem` (`id`, `quanitty`, `Product_id`, `order_id`) VALUES
(203, 2, 34, 72),
(204, 3, 32, 73),
(205, 2, 3, 73),
(206, 2, 49, 73),
(207, 2, 11, 73);

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
  `category_id` int(11) NOT NULL,
  `isMetric` tinyint(1) DEFAULT 0,
  `quantity` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `isavailable`, `image`, `User_id`, `category_id`, `isMetric`, `quantity`) VALUES
(1, 'Mleko', '3.2% 1L', 2.1, 1, 'https://digitalcontent.api.tesco.com/v2/media/ghs/964d2c59-5242-47f8-a090-979e841f4949/snapshotimagehandler_938846387.jpeg?h=540&w=540', 14, 1, 0, 1),
(3, 'Sliwka', 'Polska', 4.56, 1, 'https://images.albertsons-media.com/is/image/ABS/184140122?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available', 14, 4, 0, 1),
(4, 'Jablko', 'Polska', 3.56, 1, 'https://img.tesco.com/Groceries/pi/000/0260000000000/IDShot_225x225.jpg', 14, 4, 0, 1),
(5, 'Grusza', 'Polska', 3.56, 0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/440px-Red_Apple.jpg', 14, 4, 0, 6),
(6, 'Chleb', 'Lublin pieczy', 2.5, 1, 'https://img.tesco.com/Groceries/pi/000/0282370000000/IDShot_225x225.jpg', 14, 2, 0, 1),
(7, 'Truskawki', 'Lubelskie 1kg', 10, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-GuVMn0NqfwC2yRhlST0p6suqjrnwq88GQ&usqp=CAU', 14, 4, 0, 10),
(8, 'Banan', 'Meksyka 1kg', 4.99, 1, 'http://promocje-24.pl/wp-content/uploads/2019/11/z17261860qamerykanie-jedza-wiecej-bananow-niz-jablek-i-poma.jpg', 14, 4, 0, 1),
(9, 'Pomarańcze', 'Portugalia 1kg', 4.99, 1, 'https://digitalcontent.api.tesco.com/v2/media/ghs/2c876d82-4f38-4520-8332-2225cb76643c/snapshotimagehandler_991727266.jpeg?h=540&w=540', 14, 4, 0, 2),
(10, 'Cytryna', 'Moldawia', 4.5, 1, 'https://digitalcontent.api.tesco.com/v2/media/ghs/ab78eb31-c14c-4ddd-ac0b-b7771e4fb8bb/snapshotimagehandler_875580756.jpeg?h=540&w=540', 14, 4, 0, 1),
(11, 'Gin', 'Londyn', 89, 1, 'https://digitalcontent.api.tesco.com/v2/media/ghs/ac3d81e8-c7a8-4532-8a72-510fac8666c0/4c675d34-4a02-4f0d-9ad7-ef179689f7da.jpeg?h=540&w=540', 14, 3, 0, 1),
(12, 'Croissant', 'Francja', 4.77, 1, 'https://img.tesco.com/Groceries/pi/837/5201360502837/IDShot_225x225.jpg', 14, 6, 0, 1),
(13, 'Ziemniak', 'młody polski 1kg', 1.29, 1, 'https://img.tesco.com/Groceries/pi/000/0262410000000/IDShot_225x225.jpg', 14, 5, 0, 11),
(14, 'Brokuł', 'polska 1szt', 3.5, 1, 'https://img.tesco.com/Groceries/pi/000/0268280000000/IDShot_225x225.jpg', 14, 5, 0, 2),
(15, 'Czosnek', 'polska 1szt', 0.5, 1, 'https://img.tesco.com/Groceries/pi/106/0000000001106/IDShot_225x225.jpg', 14, 5, 0, 1),
(26, 'Burak', 'polski', 2.6, 1, ' https://digitalcontent.api.tesco.com/v2/media/ghs/ce76d695-b8c2-4e24-a751-dc09bbd967e0/a0dc1a95-f378-41c4-8364-32d9a4fde1fc.jpeg?h=540&w=540', 14, 5, 1, 5),
(27, 'Łosoś', 'Norwegia', 34.54, 1, 'https://img.tesco.com/Groceries/pi/688/5057373699688/IDShot_225x225.jpg', 14, 7, 1, 10),
(28, 'Mleko', 'Ukraina 2%', 3.5, 1, 'https://img.tesco.com/Groceries/pi/826/5000436338826/IDShot_225x225.jpg', 14, 1, 1, 5),
(29, 'Pomidory ', 'Małe 325g', 4.5, 1, 'https://img.tesco.com/Groceries/pi/822/0000010007822/IDShot_225x225.jpg', 14, 5, 0, 20),
(30, 'Cebula', '385g', 1.3, 1, 'https://img.tesco.com/Groceries/pi/176/0000003243176/IDShot_225x225.jpg', 14, 5, 0, 20),
(31, 'Awokado', '1 szt', 4.56, 1, 'https://img.tesco.com/Groceries/pi/045/0000003042045/IDShot_225x225.jpg', 14, 4, 0, 19),
(32, 'Cytryna ', '1szt', 0.5, 1, 'https://img.tesco.com/Groceries/pi/000/0223780000000/IDShot_225x225.jpg', 14, 4, 0, 13),
(33, 'Łosoś suszony', '230g', 15.4, 1, 'https://img.tesco.com/Groceries/pi/234/5057753917234/IDShot_90x90.jpg', 14, 7, 0, 13),
(34, 'Wołowina ', '400g', 6.5, 1, 'https://img.tesco.com/Groceries/pi/056/5059512736056/IDShot_90x90.jpg', 14, 9, 0, 4),
(35, 'Szynka', '125g', 6.5, 1, 'https://img.tesco.com/Groceries/pi/122/5057373267122/IDShot_90x90.jpg', 14, 9, 0, 4),
(37, 'FIlet ryby', '200g', 6.6, 1, 'https://img.tesco.com/Groceries/pi/150/5057545809150/IDShot_90x90.jpg', 14, 9, 0, 4),
(38, 'Pepsi', '24 x 330ml', 50, 1, 'https://img.tesco.com/Groceries/pi/754/4060800130754/IDShot_90x90.jpg', 14, 8, 0, 30),
(39, 'Kola', '24 x 330ml', 50, 1, 'https://img.tesco.com/Groceries/pi/909/5449000136909/IDShot_90x90.jpg', 14, 8, 0, 30),
(40, 'Woda ', 'mineralna', 20.2, 1, 'https://img.tesco.com/Groceries/pi/037/5010459000037/IDShot_90x90.jpg', 14, 8, 0, 20),
(41, 'Pepsi', '2l', 5.4, 1, 'https://img.tesco.com/Groceries/pi/307/4060800103307/IDShot_90x90.jpg', 14, 8, 0, 20),
(42, 'Kola zero', '2l', 5.4, 1, 'https://img.tesco.com/Groceries/pi/902/5449000669902/IDShot_90x90.jpg', 14, 8, 0, 20),
(43, 'Kola dietyczna', '2l', 5.4, 1, 'https://img.tesco.com/Groceries/pi/902/5449000669902/IDShot_90x90.jpg', 14, 8, 0, 20),
(44, 'Kola xero', '2l', 5.4, 1, 'https://img.tesco.com/Groceries/pi/446/5052109851446/IDShot_90x90.jpg', 14, 8, 0, 20),
(45, 'Sok', '1l', 4.4, 1, 'https://img.tesco.com/Groceries/pi/092/5052910759092/IDShot_90x90.jpg', 14, 8, 0, 20),
(46, '7Up', '24-pak 330ml', 40, 1, 'https://img.tesco.com/Groceries/pi/092/5052910759092/IDShot_90x90.jpg', 14, 8, 0, 20),
(47, 'Frytki', 'duża paka 1.4kg', 13, 1, 'https://img.tesco.com/Groceries/pi/845/5010228001845/IDShot_90x90.jpg', 14, 5, 1, 0),
(48, 'Lody', '4 x 110ml', 10, 1, 'https://img.tesco.com/Groceries/pi/352/8712566328352/IDShot_90x90.jpg', 14, 6, 0, 29),
(49, 'Lody', 'białe 4 x 110ml', 10, 1, 'https://img.tesco.com/Groceries/pi/406/8712566328406/IDShot_90x90.jpg', 14, 6, 0, 0),
(50, 'Fasola', 'Czerwona', 4.4, 1, 'https://img.tesco.com/Groceries/pi/215/5018374442215/IDShot_90x90.jpg', 14, 5, 0, 20),
(51, 'Twix', '9 x 207g', 18.9, 1, 'https://img.tesco.com/Groceries/pi/426/5000159417426/IDShot_90x90.jpg', 14, 6, 0, 20),
(52, 'Cukier', '1kg', 2.2, 1, 'https://img.tesco.com/Groceries/pi/502/5010067301502/IDShot_90x90.jpg', 14, 6, 0, 20),
(53, 'Zupa pomidorowa', '400g', 3, 1, 'https://img.tesco.com/Groceries/pi/673/5000157062673/IDShot_90x90.jpg', 14, 5, 0, 2);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `shops`
--

CREATE TABLE `shops` (
  `id` int(11) NOT NULL,
  `name` char(30) DEFAULT NULL,
  `address` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `shops`
--

INSERT INTO `shops` (`id`, `name`, `address`) VALUES
(1, NULL, 'Lublin 20-501 Nabbystrzycka 42'),
(2, NULL, 'Rzeszów 10-101 Kopernika 534'),
(3, NULL, 'Kraśnik 10-511 Szopena 43');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `passwd` char(190) NOT NULL,
  `email` varchar(45) NOT NULL,
  `mobile` varchar(45) NOT NULL,
  `User_Type_id` int(11) NOT NULL,
  `delivery_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `passwd`, `email`, `mobile`, `User_Type_id`, `delivery_address`) VALUES
(1, 'Oleh', 'Foliush', 'hustman', '12345', 'olvbman@gmail.com', '+380973333830', 2, ''),
(4, 'Oleh1', 'Foliush', 'hustman1', '12345', 'olvbman1@gmail.com', '+380973333830', 2, ''),
(5, 'olvb', 'Folko', 'Dabm', '12345', 'das@i.ua', '123456789', 2, ''),
(9, 'olehfo', 'Folko123', 'Dabm123', '12345', 'da123s@i.ua', '123456789', 2, ''),
(10, 'Oleh ', 'Hoba', 'g10', '12345678', 'oleh10hoba@gmail.com', '882059519', 1, 'Nadbystrzycka42/406 lublin 20-501'),
(11, 'Oleh30', 'Hoba30', 'G30', '12345678', 'g30@gmail.com', '882059519', 2, ''),
(12, 'Ojezhyk', 'Hoba', 'g31', '12345678', 'oleh100hoba@gmail.com', '882059519', 2, 'Nadbystrzycka42/406 lublin 20-501'),
(13, 'Oleh', 'Hoba', 'g33', '1234567890', 'g33oleggoba@gmail.com', '882059519', 2, 'Nadbystrzycka 42/411'),
(14, 'Dober', 'Bober', 'tester15', '$2b$10$qcu1GNQkydKfLgQmXgnXkeUgDuwKxSbFl4nxEC', 'olvd@gma.com', '12345678', 1, 'Narutowicza 9 p.22'),
(24, 'Oleh', 'Foliush', 'tester18', '$2b$10$ojtYl95vxAiQqBiUDQ6yveIOb73cFxYaHsMAeV', 'olv1b@i.uaa', '123456789', 2, 'Nadbystr 1 p.12'),
(26, 'Oleh', 'Dober', 'Bober', '$2b$10$zogDtCF9H8Dv9JRXHPa4YuISiZIp2k36Sajenk', 'olvb@i.ua', '123456784', 2, 'Dobermana 9'),
(35, 'Admin', 'Admin', 'admin', '$2b$10$nzi1MIph61NaxOY3ZR0rJ.W9ob96TDiDM0V4h/', 'admin@i.ua', '888888888', 1, 'Adminowicha 1'),
(36, 'Oleh', 'Barcelona', 'logat', '$2b$10$rGo.FXEWQQcsdCIFcKuqG.Y7Gu0TrhB3zw9Qxf', 'olvbbbbbb@i.ua', '123456388', 2, 'Narko 4'),
(38, 'Opa', 'Europa', 'dolgove', '$2b$10$nY7FfAKiXzhqWvjNe9iQn.8oSnVF2vDkjLq5nt', 'dolgove@i.ua', '121212121', 2, 'Ulica 1'),
(39, 'admika', 'adminka', 'adminka', '$2b$10$Z5lO//Tnb75KdkGt4SiXbO5bn0xhpkVOFDW4RJfFlfPuWeZWD5nYW', 'adminka@com.com', '987654321', 2, 'Adminkovka 2');

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_shop_id` (`shopId`),
  ADD KEY `user_id` (`user_id`);

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
-- Indeksy dla tabeli `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT dla tabeli `cartitem`
--
ALTER TABLE `cartitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=690;

--
-- AUTO_INCREMENT dla tabeli `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT dla tabeli `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT dla tabeli `orderitem`
--
ALTER TABLE `orderitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=208;

--
-- AUTO_INCREMENT dla tabeli `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT dla tabeli `shops`
--
ALTER TABLE `shops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT dla tabeli `user_type`
--
ALTER TABLE `user_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `cartitem`
--
ALTER TABLE `cartitem`
  ADD CONSTRAINT `fk_cartItem_Product1` FOREIGN KEY (`Product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `fk_cartItem_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Ograniczenia dla tabeli `favourite_list`
--
ALTER TABLE `favourite_list`
  ADD CONSTRAINT `fk_product_has_user_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `fk_product_has_user_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Ograniczenia dla tabeli `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `fk_shop_id` FOREIGN KEY (`shopId`) REFERENCES `shops` (`id`),
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Ograniczenia dla tabeli `orderitem`
--
ALTER TABLE `orderitem`
  ADD CONSTRAINT `fk_orderitem_Product1` FOREIGN KEY (`Product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `fk_orderitem_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);

--
-- Ograniczenia dla tabeli `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_Product_User1` FOREIGN KEY (`User_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `fk_product_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Ograniczenia dla tabeli `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_User_Type1` FOREIGN KEY (`User_Type_id`) REFERENCES `user_type` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
