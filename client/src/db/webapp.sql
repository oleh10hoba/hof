-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 07, 2021 at 07:53 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
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
-- Table structure for table `cartitem`
--

CREATE TABLE `cartitem` (
  `id` int(11) NOT NULL,
  `Product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
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
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_priduct` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `favourite_list`
--

CREATE TABLE `favourite_list` (
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `favourite_list`
--

INSERT INTO `favourite_list` (`product_id`, `user_id`) VALUES
(3, 10),
(3, 13),
(4, 10),
(5, 13),
(6, 10),
(6, 13),
(7, 10),
(9, 10),
(10, 10),
(11, 10),
(12, 10),
(15, 10);

-- --------------------------------------------------------

--
-- Table structure for table `order`
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
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `status`, `total`, `address`, `mobile`, `created_at`, `updated_at`, `isSelfPickup`, `shopId`, `user_id`) VALUES
(43, 'wykonane', 44.74, 'Nadbystrzycka42/406 lublin 20-501', '882059519', '2021-10-24 18:40:20', NULL, 1, 2, 10),
(45, 'wykonane', 33.26, 'Nadbystrzycka42/406 lublin 20-501', '882059519', '2021-11-01 18:34:02', NULL, 1, 2, 10),
(46, 'wykonane', 54.28, 'Nadbystrzycka42/406 lublin 20-501', '882059519', '2021-11-05 03:10:31', NULL, 1, 3, 10),
(47, 'wykonane', 80.55, 'Nadbystrzycka42/406 lublin 20-501', '882059519', '2021-11-07 04:11:54', NULL, 0, 3, 10),
(48, 'wykonane', 55.65, 'Nadbystrzycka42/406 lublin 20-501', '882059519', '2021-11-07 17:22:22', NULL, 1, 2, 10),
(49, 'wykonane', 66.33, 'Nadbystrzycka42/406 lublin 20-501', '882059519', '2021-11-07 17:58:22', NULL, 1, 2, 10),
(57, 'wykonanie', 4.56, 'Nadbystrzycka42/406 lublin 20-501', '882059519', '2021-11-07 18:36:57', NULL, 1, NULL, 10),
(58, 'wykonanie', 2.5, 'Nadbystrzycka 42/411', '882059519', '2021-11-07 18:37:44', NULL, 1, NULL, 13);

-- --------------------------------------------------------

--
-- Table structure for table `orderitem`
--

CREATE TABLE `orderitem` (
  `id` int(11) NOT NULL,
  `quanitty` int(11) NOT NULL,
  `Product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orderitem`
--

INSERT INTO `orderitem` (`id`, `quanitty`, `Product_id`, `order_id`) VALUES
(95, 3, 7, 43),
(96, 2, 26, 43),
(97, 2, 12, 43),
(98, 6, 7, 43),
(99, 6, 4, 43),
(100, 4, 14, 43),
(101, 2, 3, 43),
(102, 3, 4, 45),
(103, 2, 7, 45),
(104, 2, 13, 45),
(105, 4, 12, 46),
(106, 3, 7, 46),
(107, 2, 26, 46),
(108, 5, 7, 47),
(109, 3, 12, 47),
(110, 2, 3, 47),
(111, 2, 4, 47),
(112, 3, 4, 48),
(113, 3, 7, 48),
(114, 3, 8, 48),
(115, 6, 10, 49),
(116, 3, 3, 49),
(117, 3, 4, 49),
(118, 2, 9, 49),
(119, 1, 8, 49),
(133, 1, 3, 57),
(134, 1, 6, 58);

-- --------------------------------------------------------

--
-- Table structure for table `product`
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
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `isavailable`, `image`, `User_id`, `category_id`, `isMetric`, `quantity`) VALUES
(1, 'Mleko', '3.2%', 2.1, 1, 'https://digitalcontent.api.tesco.com/v2/media/ghs/964d2c59-5242-47f8-a090-979e841f4949/snapshotimagehandler_938846387.jpeg?h=540&w=540', 1, 1, 0, 1),
(3, 'Sliwka', 'Polska', 4.56, 1, 'https://images.albertsons-media.com/is/image/ABS/184140122?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available', 10, 4, 0, 1),
(4, 'Jablko', 'Polska', 3.56, 1, 'https://img.tesco.com/Groceries/pi/000/0260000000000/IDShot_225x225.jpg', 10, 4, 0, 1),
(5, 'Grusza', 'Polska', 3.56, 0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/440px-Red_Apple.jpg', 10, 4, 0, 6),
(6, 'Chleb', 'Lublin pieczy', 2.5, 1, 'https://img.tesco.com/Groceries/pi/000/0282370000000/IDShot_225x225.jpg', 10, 2, 0, 1),
(7, 'Truskawki', 'Lubelskie 1kg', 10, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-GuVMn0NqfwC2yRhlST0p6suqjrnwq88GQ&usqp=CAU', 10, 4, 0, 10),
(8, 'Banan', 'Meksyka 1kg', 4.99, 1, 'http://promocje-24.pl/wp-content/uploads/2019/11/z17261860qamerykanie-jedza-wiecej-bananow-niz-jablek-i-poma.jpg', 10, 4, 0, 1),
(9, 'Pomarańcze', 'Portugalia 1kg', 4.99, 1, 'https://digitalcontent.api.tesco.com/v2/media/ghs/2c876d82-4f38-4520-8332-2225cb76643c/snapshotimagehandler_991727266.jpeg?h=540&w=540', 10, 4, 0, 2),
(10, 'Cytryna', 'Moldawia', 4.5, 1, 'https://digitalcontent.api.tesco.com/v2/media/ghs/ab78eb31-c14c-4ddd-ac0b-b7771e4fb8bb/snapshotimagehandler_875580756.jpeg?h=540&w=540', 10, 4, 0, 1),
(11, 'Gin', 'Londyn', 89, 1, 'https://digitalcontent.api.tesco.com/v2/media/ghs/ac3d81e8-c7a8-4532-8a72-510fac8666c0/4c675d34-4a02-4f0d-9ad7-ef179689f7da.jpeg?h=540&w=540', 10, 3, 0, 1),
(12, 'Croissant', 'Francja', 4.77, 1, 'https://img.tesco.com/Groceries/pi/837/5201360502837/IDShot_225x225.jpg', 10, 6, 0, 1),
(13, 'Ziemniak', 'młody polski 1kg', 1.29, 1, 'https://img.tesco.com/Groceries/pi/000/0262410000000/IDShot_225x225.jpg', 10, 5, 0, 11),
(14, 'Brokuł', 'polska 1szt', 3.5, 1, 'https://img.tesco.com/Groceries/pi/000/0268280000000/IDShot_225x225.jpg', 10, 5, 0, 2),
(15, 'Czosnek', 'polska 1szt', 0.5, 1, 'https://img.tesco.com/Groceries/pi/106/0000000001106/IDShot_225x225.jpg', 10, 5, 0, 1),
(26, 'Burak', 'polski', 2.6, 1, ' https://digitalcontent.api.tesco.com/v2/media/ghs/ce76d695-b8c2-4e24-a751-dc09bbd967e0/a0dc1a95-f378-41c4-8364-32d9a4fde1fc.jpeg?h=540&w=540', 10, 5, 1, 5),
(27, 'Łosoś', 'Norwegia', 34.54, 1, 'https://img.tesco.com/Groceries/pi/688/5057373699688/IDShot_225x225.jpg', 10, 7, 1, 10),
(28, 'Mleko', 'Ukraina 2%', 3.5, 1, 'https://img.tesco.com/Groceries/pi/826/5000436338826/IDShot_225x225.jpg', 10, 1, 1, 5),
(29, 'Pomidory ', 'Małe 325g', 4.5, 1, 'https://img.tesco.com/Groceries/pi/822/0000010007822/IDShot_225x225.jpg', 10, 5, 0, 20),
(30, 'Cebula', '385g', 1.3, 1, 'https://img.tesco.com/Groceries/pi/176/0000003243176/IDShot_225x225.jpg', 10, 5, 0, 20),
(31, 'Awokado', '1 szt', 4.56, 1, 'https://img.tesco.com/Groceries/pi/045/0000003042045/IDShot_225x225.jpg', 10, 4, 0, 19),
(32, 'Cytryna ', '1szt', 0.5, 1, 'https://img.tesco.com/Groceries/pi/000/0223780000000/IDShot_225x225.jpg', 10, 4, 0, 13),
(33, 'Łosoś suszony', '230g', 15.4, 1, 'https://img.tesco.com/Groceries/pi/234/5057753917234/IDShot_90x90.jpg', 10, 7, 0, 13),
(34, 'Wołowina ', '400g', 6.5, 1, 'https://img.tesco.com/Groceries/pi/056/5059512736056/IDShot_90x90.jpg', 10, 9, 0, 4),
(35, 'Szynka', '125g', 6.5, 1, 'https://img.tesco.com/Groceries/pi/122/5057373267122/IDShot_90x90.jpg', 10, 9, 0, 4),
(37, 'FIlet ryby', '200g', 6.6, 1, 'https://img.tesco.com/Groceries/pi/150/5057545809150/IDShot_90x90.jpg', 10, 9, 0, 4),
(38, 'Pepsi', '24 x 330ml', 50, 1, 'https://img.tesco.com/Groceries/pi/754/4060800130754/IDShot_90x90.jpg', 10, 8, 0, 30),
(39, 'Kola', '24 x 330ml', 50, 1, 'https://img.tesco.com/Groceries/pi/909/5449000136909/IDShot_90x90.jpg', 10, 8, 0, 30),
(40, 'Woda ', 'mineralna', 20.2, 1, 'https://img.tesco.com/Groceries/pi/037/5010459000037/IDShot_90x90.jpg', 10, 8, 0, 20),
(41, 'Pepsi', '2l', 5.4, 1, 'https://img.tesco.com/Groceries/pi/307/4060800103307/IDShot_90x90.jpg', 10, 8, 0, 20),
(42, 'Kola zero', '2l', 5.4, 1, 'https://img.tesco.com/Groceries/pi/902/5449000669902/IDShot_90x90.jpg', 10, 8, 0, 20),
(43, 'Kola dietyczna', '2l', 5.4, 1, 'https://img.tesco.com/Groceries/pi/902/5449000669902/IDShot_90x90.jpg', 10, 8, 0, 20),
(44, 'Kola xero', '2l', 5.4, 1, 'https://img.tesco.com/Groceries/pi/446/5052109851446/IDShot_90x90.jpg', 10, 8, 0, 20),
(45, 'Sok', '1l', 4.4, 1, 'https://img.tesco.com/Groceries/pi/092/5052910759092/IDShot_90x90.jpg', 10, 8, 0, 20),
(46, '7Up', '24-pak 330ml', 40, 1, 'https://img.tesco.com/Groceries/pi/092/5052910759092/IDShot_90x90.jpg', 10, 8, 0, 20),
(47, 'Frytki', 'duża paka 1.4kg', 13, 1, 'https://img.tesco.com/Groceries/pi/845/5010228001845/IDShot_90x90.jpg', 10, 5, 1, 0),
(48, 'Lody', '4 x 110ml', 10, 1, 'https://img.tesco.com/Groceries/pi/352/8712566328352/IDShot_90x90.jpg', 10, 6, 0, 29),
(49, 'Lody', 'białe 4 x 110ml', 10, 1, 'https://img.tesco.com/Groceries/pi/406/8712566328406/IDShot_90x90.jpg', 10, 6, 0, 0),
(50, 'Fasola', 'Czerwona', 4.4, 1, 'https://img.tesco.com/Groceries/pi/215/5018374442215/IDShot_90x90.jpg', 10, 5, 0, 20),
(51, 'Twix', '9 x 207g', 18.9, 1, 'https://img.tesco.com/Groceries/pi/426/5000159417426/IDShot_90x90.jpg', 10, 6, 0, 20),
(52, 'Cukier', '1kg', 2.2, 1, 'https://img.tesco.com/Groceries/pi/502/5010067301502/IDShot_90x90.jpg', 10, 6, 0, 20),
(53, 'Zupa pomidorowa', '400g', 3, 1, 'https://img.tesco.com/Groceries/pi/673/5000157062673/IDShot_90x90.jpg', 10, 5, 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE `shops` (
  `id` int(11) NOT NULL,
  `name` char(30) DEFAULT NULL,
  `address` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`id`, `name`, `address`) VALUES
(1, NULL, 'Lublin 20-501 Nabbystrzycka 42'),
(2, NULL, 'Rzeszów 10-101 Kopernika 534'),
(3, NULL, 'Kraśnik 10-511 Szopena 43');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
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
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `passwd` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `mobile` varchar(45) NOT NULL,
  `User_Type_id` int(11) NOT NULL,
  `delivery_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `passwd`, `email`, `mobile`, `User_Type_id`, `delivery_address`) VALUES
(1, 'Oleh', 'Foliush', 'hustman', '12345', 'olvbman@gmail.com', '+380973333830', 2, ''),
(4, 'Oleh1', 'Foliush', 'hustman1', '12345', 'olvbman1@gmail.com', '+380973333830', 2, ''),
(5, 'olvb', 'Folko', 'Dabm', '12345', 'das@i.ua', '123456789', 2, ''),
(9, 'olehfo', 'Folko123', 'Dabm123', '12345', 'da123s@i.ua', '123456789', 2, ''),
(10, 'Oleh ', 'Hoba', 'g10', '12345678', 'oleh10hoba@gmail.com', '882059519', 1, 'Nadbystrzycka42/406 lublin 20-501'),
(11, 'Oleh30', 'Hoba30', 'G30', '12345678', 'g30@gmail.com', '882059519', 2, ''),
(12, 'Ojezhyk', 'Hoba', 'g31', '12345678', 'oleh100hoba@gmail.com', '882059519', 2, 'Nadbystrzycka42/406 lublin 20-501'),
(13, 'Oleh', 'Hoba', 'g33', '1234567890', 'g33oleggoba@gmail.com', '882059519', 2, 'Nadbystrzycka 42/411');

-- --------------------------------------------------------

--
-- Table structure for table `user_type`
--

CREATE TABLE `user_type` (
  `id` int(11) NOT NULL,
  `Utypename` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_type`
--

INSERT INTO `user_type` (`id`, `Utypename`) VALUES
(1, 'Admin'),
(2, 'Client');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_address_user1_idx` (`user_id`),
  ADD KEY `fk_address_order1_idx` (`order_id`);

--
-- Indexes for table `cartitem`
--
ALTER TABLE `cartitem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cartItem_Product1_idx` (`Product_id`),
  ADD KEY `fk_cartItem_user1_idx` (`user_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`);

--
-- Indexes for table `favourite_list`
--
ALTER TABLE `favourite_list`
  ADD PRIMARY KEY (`product_id`,`user_id`),
  ADD KEY `fk_product_has_user_user1_idx` (`user_id`),
  ADD KEY `fk_product_has_user_product1_idx` (`product_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_shop_id` (`shopId`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `orderitem`
--
ALTER TABLE `orderitem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orderitem_Product1_idx` (`Product_id`),
  ADD KEY `fk_orderitem_order1_idx` (`order_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`,`category_id`),
  ADD KEY `fk_Product_User1_idx` (`User_id`),
  ADD KEY `fk_product_category1_idx` (`category_id`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_transaction_order1_idx` (`order_id`),
  ADD KEY `fk_transaction_user1_idx` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`,`User_Type_id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD KEY `fk_user_User_Type1_idx` (`User_Type_id`);

--
-- Indexes for table `user_type`
--
ALTER TABLE `user_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Utypename_UNIQUE` (`Utypename`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cartitem`
--
ALTER TABLE `cartitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=483;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `orderitem`
--
ALTER TABLE `orderitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user_type`
--
ALTER TABLE `user_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `fk_address_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`),
  ADD CONSTRAINT `fk_address_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `cartitem`
--
ALTER TABLE `cartitem`
  ADD CONSTRAINT `fk_cartItem_Product1` FOREIGN KEY (`Product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `fk_cartItem_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `favourite_list`
--
ALTER TABLE `favourite_list`
  ADD CONSTRAINT `fk_product_has_user_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `fk_product_has_user_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `fk_shop_id` FOREIGN KEY (`shopId`) REFERENCES `shops` (`id`),
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `orderitem`
--
ALTER TABLE `orderitem`
  ADD CONSTRAINT `fk_orderitem_Product1` FOREIGN KEY (`Product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `fk_orderitem_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_Product_User1` FOREIGN KEY (`User_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `fk_product_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `fk_transaction_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`),
  ADD CONSTRAINT `fk_transaction_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_User_Type1` FOREIGN KEY (`User_Type_id`) REFERENCES `user_type` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
