-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2020 at 07:56 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `price` bigint(20) NOT NULL,
  `rating` tinyint(4) NOT NULL,
  `category` varchar(256) NOT NULL,
  `quantity` bigint(20) NOT NULL,
  `stock` tinyint(4) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(256) NOT NULL,
  `sell` tinyint(4) NOT NULL DEFAULT 0,
  `popular` tinyint(4) NOT NULL DEFAULT 0,
  `best_selling` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `price`, `rating`, `category`, `quantity`, `stock`, `description`, `image`, `sell`, `popular`, `best_selling`) VALUES
(37, 'VOW', 230, 5, 'Novel', 15, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu turpis imperdiet, maximus orci ut, accumsan diam. Phasellus cursus dignissim aliquam.', 'cover_cover24.jpg', 1, 1, 1),
(38, 'The girl sea gave back', 500, 5, 'Novel', 20, 1, 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 'cover_cover15.jpg', 1, 0, 0),
(39, 'Extinction level', 300, 3, 'Novel', 10, 1, 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 'cover_cover25.jpg', 1, 0, 1),
(44, 'No place like here', 300, 4, 'Novel', 30, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover2.jpg', 0, 1, 0),
(45, 'The priory of the Orange tree', 310, 3, 'Novel', 10, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover3.jpg', 0, 1, 0),
(46, 'Herry potter', 400, 5, 'Novel', 50, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover14.jpg', 0, 0, 1),
(47, 'The magic forest', 250, 3, 'Novel', 22, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover6.jpg', 0, 0, 0),
(48, 'The secret of color', 350, 3, 'Life style', 10, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover4.jpg', 0, 0, 0),
(49, 'Harsh reality', 450, 5, 'Life style', 5, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover10.jpg', 1, 1, 0),
(50, 'Chole Hoper', 250, 3, 'Life style', 15, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover7.jpg', 1, 1, 1),
(51, 'The ultimate manual', 150, 2, 'Life style', 10, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover9.jpg', 1, 0, 1),
(52, 'Higher education', 200, 3, 'Life style', 2, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover8.jpg', 1, 1, 1),
(53, 'PURE', 200, 3, 'Life style', 25, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover5.jpg', 1, 0, 1),
(54, 'Life on mars', 350, 4, 'Life style', 15, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover11.jpg', 1, 1, 0),
(55, 'The house girl', 400, 5, 'Life style', 5, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover23.jpg', 1, 1, 1),
(56, 'Crow moon', 420, 5, 'Life style', 20, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover26.jpg', 1, 1, 0),
(57, 'Frozen 2', 270, 4, 'Novel', 12, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover13.jpg', 0, 0, 0),
(58, 'Captain America ', 420, 5, 'Comics', 30, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover18.jpg', 1, 0, 0),
(59, 'HULK', 350, 4, 'Comics', 10, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover19.jpg', 0, 1, 1),
(60, 'X-men season 1', 400, 5, 'Comics', 12, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover20.jpg', 0, 1, 1),
(61, 'Bat men', 150, 2, 'Comics', 5, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover21.jpg', 0, 1, 0),
(62, 'Superman One', 150, 2, 'Comics', 10, 1, 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 'cover_cover22.jpg', 0, 1, 1),
(63, 'Wolverine ', 350, 3, 'Comics', 10, 1, 'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected.', 'cover_5bb6156b3c000020010d2776.jpeg', 1, 0, 0),
(64, 'Start war Season One', 220, 2, 'Comics', 20, 1, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.', 'cover_SW20.png', 1, 0, 0),
(65, 'AVENGER ', 310, 3, 'Comics', 12, 1, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.', 'cover_429.jpg', 0, 0, 0),
(66, 'Spider Man One', 150, 2, 'Comics', 5, 1, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.', 'cover_Stan-Lee-Comics-11.jpg', 0, 0, 0),
(72, 'Pirates of the Carribean', 200, 4, 'Novel', 10, 1, 'We has been the industry\'s standard dummy text ever since the when an unknown printer took a galley of type.', 'cover_cover28.jpg', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` bigint(11) NOT NULL,
  `product_name` varchar(256) NOT NULL,
  `product_image` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `product_id`, `price`, `product_name`, `product_image`) VALUES
(43, 29, 58, 420, 'Captain America ', 'cover_cover18.jpg'),
(47, 33, 60, 400, 'X-men season 1', 'cover_cover20.jpg'),
(48, 33, 62, 150, 'Superman One', 'cover_cover22.jpg'),
(49, 33, 58, 420, 'Captain America ', 'cover_cover18.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `city` varchar(256) NOT NULL,
  `address` varchar(256) NOT NULL,
  `postal_code` int(11) NOT NULL,
  `phone` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `created_at`, `city`, `address`, `postal_code`, `phone`) VALUES
(13, 22, '2020-10-02 18:49:08', 'Chittagong', 'Agrabad', 1233, '0186231231'),
(14, 30, '2020-10-02 18:50:10', 'Chittagong', 'Agrabad', 1233, '0186231231'),
(15, 28, '2020-10-02 18:50:53', 'Chittagong', 'Agrabad', 1233, '0186231231');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`) VALUES
(49, 13, 37),
(50, 13, 39),
(51, 13, 50),
(52, 13, 51),
(53, 13, 48),
(54, 14, 59),
(55, 14, 54),
(56, 14, 44),
(57, 15, 53),
(58, 15, 48),
(59, 15, 55),
(60, 15, 56);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`) VALUES
(22, 'Tarunno', '$2y$10$O6JVLEJP7BPxNzSOq4PMV.cUvPQfBkM4Ue14lh1TTN2LywXYheno6', 'tarunno@gmail.com'),
(28, 'Molly', '$2y$10$u8bNUHpSj9bHF.fC3vhncOKrYlQ5N4wZgDa/v2VVGhlX03eUpCCQa', 'molly@gmail.com'),
(29, 'Jolly', '$2y$10$nG.3ggNaJw57etCvks9nm.lGZwM3XF1PgxH7zcEBbZtEHSKYm2VXm', 'jolly@gmail.com'),
(30, 'Dolly', '$2y$10$n2bad0sn2jnqTBPAfE5qR.ifQPRlHO4zsWa4Q3I8BAt2MjoGvw7Zq', 'dolly@gmail.com'),
(31, 'Polly', '$2y$10$VFa2rpiaz7ONofNJhASD/..i2BBCpPwvMdsL97fHueZVsTMwnd6Jq', 'polly@gmail.com'),
(33, 'Kolly', '$2y$10$6QmcIFLnpZ5WtEn2yzQ9f.qLKd3XShYa3tzYYeHGnjfv0o0.3mY4y', 'kolly@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_ibfk_1` (`user_id`),
  ADD KEY `cart_ibfk_2` (`product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
