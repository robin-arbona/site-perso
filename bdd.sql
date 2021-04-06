-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 06, 2021 at 09:44 AM
-- Server version: 5.7.30
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `site-perso`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `date` datetime  NULL ,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `contacted` tinyint(1) NOT NULL DEFAULT '0',
  `comments` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `date`, `name`, `email`, `tel`, `message`, `contacted`, `comments`) VALUES
(1, '2021-04-04 10:16:40', 'ze', 'zed@ZE.FR', 'ze', 'ze', 0, NULL),
(2, '2021-04-04 17:00:36', 'test', 'arbona.robin@gmail.com', '2', '3', 0, NULL),
(3, '2021-04-04 17:56:00', 'az', '', '', '', 0, NULL),
(4, '2021-04-04 17:56:59', 'az', 'a', '', '', 0, NULL),
(5, '2021-04-04 18:00:42', 'az', 'a', '', '', 0, NULL),
(6, '2021-04-04 18:02:34', 'az', 'a', '', '&lt;test&gt;', 0, NULL),
(7, '2021-04-04 18:03:52', 'az', 'a', '', '&lt;test&gt;', 0, NULL),
(8, '2021-04-04 18:05:00', 'az', 'a', '', '&lt;test&gt;', 0, NULL),
(9, '2021-04-04 18:07:26', 'az', 'a', '', '&lt;test&gt;', 0, NULL),
(10, '2021-04-04 18:07:58', 'az', 'a', '', '&lt;test&gt;', 0, NULL),
(11, '2021-04-04 21:27:35', 'dc', 'arbona.robin@gmail.com', '', 'sdc', 0, NULL),
(12, '2021-04-04 21:33:46', 'dc', 'arbona.robin@gmail.com', '', 'sdc', 0, NULL),
(13, '2021-04-04 23:32:49', 'hey', 'hu@gmail.com', '123', 'lala', 0, NULL),
(14, '2021-04-05 20:47:04', 'ze', 'arbona.robin@gmail.com', '08', 'Holla', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `video` varchar(255) NOT NULL,
  `techno` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `url`, `video`, `techno`, `type`) VALUES
(1, 'Joujou Coquin', '../projects/joujou_coquin/', 'joujou.mov', 'PhP, Mysql, html5, Bootstrap', 'on line shop'),
(2, 'portfolio robin arbona', '/', 'portfolio.mow', 'Html5, Scss, Javascript, PhP, Mysql (all vanilla)', 'personnel website'),
(3, 'Top20', '/', '/', 'underconstruction', 'Showcase website');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
