-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  mer. 14 avr. 2021 à 16:53
-- Version du serveur :  5.5.68-MariaDB
-- Version de PHP :  7.1.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `robin-arbona_site-perso`
--

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `contacted` tinyint(1) NOT NULL DEFAULT '0',
  `comments` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `contacts`
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
-- Structure de la table `projects`
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
-- Déchargement des données de la table `projects`
--

INSERT INTO `projects` (`id`, `name`, `url`, `video`, `techno`, `type`) VALUES
(1, 'Joujou Coquin', '../projects/joujou_coquin/', 'joujou.mov', 'PhP, Mysql, html5, CSS, Framework Bootstrap 5, MVC', 'Boutique en ligne'),
(2, 'to do list', '', 'tdl.mov', 'PhP, HTML5, MySql, JavaScript, Ajax, Css Framework (bulma), MVC ', 'Application de planification'),
(3, 'Pendu', '', 'pendu.mov', 'PhP, HTML5, CSS, Framework Bulma, MVC', 'Jeu de pendu'),
(4, 'memory', '', 'memory.mov', 'PhP, SQL, HTML5, CSS, Framework Bootstrap5', 'Jeu Memory'),
(5, 'portfolio robin arbona', '/', 'portfolio.mov', 'PhP, Html5, Scss, Javascript, AJax, Mysql ', 'personnal website'),
(6, 'Top20', '/', '/', 'Actuellement en construction', 'Site vitrine intégrant un outil de management du contenu');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
