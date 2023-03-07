-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 09, 2020 at 03:18 PM
-- Server version: 5.7.30-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phpmyadmin`
--

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `ImageID` int(11) NOT NULL,
  `FilePath` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`ImageID`, `FilePath`) VALUES
(1, 'images/1.png'),
(2, 'images/2.png'),
(3, 'images/3.png'),
(4, 'images/4.png'),
(5, 'images/5.png'),
(6, 'images/6.png'),
(7, 'images/7.png'),
(8, 'images/8.png'),
(9, 'images/9.png'),
(10, 'images/10.png'),
(11, 'images/11.png'),
(12, 'images/12.png'),
(13, 'images/13.png'),
(14, 'images/14.png'),
(15, 'images/15.png'),
(16, 'images/16.png'),
(17, 'images/17.png'),
(18, 'images/18.png'),
(19, 'images/19.png'),
(20, 'images/20.png'),
(21, 'images/21.png'),
(22, 'images/22.png'),
(23, 'images/23.png'),
(24, 'images/24.png'),
(25, 'images/25.png'),
(26, 'images/26.png'),
(27, 'images/27.png');

-- --------------------------------------------------------

--
-- Table structure for table `passwords`
--

CREATE TABLE `passwords` (
  `UserID` int(255) NOT NULL,
  `UserImages` varchar(200) NOT NULL,
  `DecoyImages` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `passwords`
--

INSERT INTO `passwords` (`UserID`, `UserImages`, `DecoyImages`) VALUES
(22, '27,26,25,24,23', '22,3,17,15,12,20,5,6,8,14'),
(23, '19,20,11,25,22', '14,23,8,18,6,1,21,15,5,10');

-- --------------------------------------------------------

--
-- Table structure for table `resets`
--

CREATE TABLE `resets` (
  `Email` varchar(50) NOT NULL,
  `ResetCode` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `resets`
--

INSERT INTO `resets` (`Email`, `ResetCode`) VALUES
('sgiann05@ucy.ac.cy', 'udIacBIG'),
('socratesyi@gmail.com', 'Wg5S46Fu');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` int(10) NOT NULL,
  `Age` varchar(3) NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `ActivationCode` varchar(15) NOT NULL,
  `IsActivated` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `Age`, `Gender`, `Email`, `ActivationCode`, `IsActivated`) VALUES
(3, '22', 'Female', 'socratesxd9@gmail.com', 'NFZcbBQ9', 0),
(22, '22', 'Male', 'sgiann05@ucy.ac.cy', 'aR3nlR3m', 1),
(23, '22', 'Male', 'socratesyi@gmail.com', 'RETf3R08', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`ImageID`);

--
-- Indexes for table `passwords`
--
ALTER TABLE `passwords`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `resets`
--
ALTER TABLE `resets`
  ADD PRIMARY KEY (`Email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `ImageID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
