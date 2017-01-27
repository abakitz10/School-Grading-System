-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2016 at 08:14 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `classrecord`
--

-- --------------------------------------------------------

--
-- Table structure for table `performance_tasks`
--

CREATE TABLE `performance_tasks` (
  `id` int(11) NOT NULL,
  `stud_id` int(11) NOT NULL,
  `p_1` int(11) NOT NULL,
  `p_2` int(11) NOT NULL,
  `p_3` int(11) NOT NULL,
  `p_4` int(11) NOT NULL,
  `p_5` int(11) NOT NULL,
  `p_6` int(11) NOT NULL,
  `p_7` int(11) NOT NULL,
  `p_8` int(11) NOT NULL,
  `p_9` int(11) NOT NULL,
  `p_10` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `performance_tasks`
--

INSERT INTO `performance_tasks` (`id`, `stud_id`, `p_1`, `p_2`, `p_3`, `p_4`, `p_5`, `p_6`, `p_7`, `p_8`, `p_9`, `p_10`) VALUES
(1, 1, 80, 150, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 2, 80, 150, 0, 0, 0, 0, 0, 0, 0, 0),
(3, 3, 80, 150, 0, 0, 0, 0, 0, 0, 0, 0),
(4, 4, 80, 150, 0, 0, 0, 0, 0, 0, 0, 0),
(5, 5, 80, 150, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `quarterly_assessment`
--

CREATE TABLE `quarterly_assessment` (
  `id` int(11) NOT NULL,
  `stud_id` int(11) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quarterly_assessment`
--

INSERT INTO `quarterly_assessment` (`id`, `stud_id`, `score`) VALUES
(1, 1, 14),
(2, 2, 15),
(3, 3, 15),
(4, 4, 15),
(5, 5, 15);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `middle_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `grade_section` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `first_name`, `middle_name`, `last_name`, `grade_section`) VALUES
(1, 'Christian ', 'B.', 'Abalo', 'VI-ABAQUITA'),
(2, 'Louie', 'N.', 'Albino', 'VI-ABAQUITA'),
(3, 'Sydney', 'R.', 'Basera', 'VI-ABAQUITA'),
(4, 'Jayson', 'Jr.', 'Cabanero', 'VI-ABAQUITA'),
(5, 'Leonardo', 'Jonriel', 'Cabanero', 'VI-ABAQUITA');

-- --------------------------------------------------------

--
-- Table structure for table `written_works`
--

CREATE TABLE `written_works` (
  `id` int(11) NOT NULL,
  `stud_id` varchar(15) NOT NULL,
  `grade_section` varchar(50) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `written_1` int(11) NOT NULL,
  `written_2` int(11) NOT NULL,
  `written_3` int(11) NOT NULL,
  `written_4` int(11) NOT NULL,
  `written_5` int(11) NOT NULL,
  `written_6` int(11) NOT NULL,
  `written_7` int(11) NOT NULL,
  `written_8` int(11) NOT NULL,
  `written_9` int(11) NOT NULL,
  `written_10` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `written_works`
--

INSERT INTO `written_works` (`id`, `stud_id`, `grade_section`, `subject`, `written_1`, `written_2`, `written_3`, `written_4`, `written_5`, `written_6`, `written_7`, `written_8`, `written_9`, `written_10`) VALUES
(1, '1', 'VI-ABAQUITA', 'FIL', 12, 17, 7, 19, 0, 0, 0, 0, 0, 0),
(2, '2', '', '', 19, 20, 25, 20, 0, 0, 0, 0, 0, 0),
(3, '3', '', '', 19, 20, 25, 20, 0, 0, 0, 0, 0, 0),
(4, '4', '', '', 19, 20, 25, 20, 0, 0, 0, 0, 0, 0),
(5, '5', '', '', 19, 20, 25, 20, 0, 0, 0, 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `performance_tasks`
--
ALTER TABLE `performance_tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quarterly_assessment`
--
ALTER TABLE `quarterly_assessment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `written_works`
--
ALTER TABLE `written_works`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `performance_tasks`
--
ALTER TABLE `performance_tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `quarterly_assessment`
--
ALTER TABLE `quarterly_assessment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `written_works`
--
ALTER TABLE `written_works`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
