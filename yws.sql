-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Jeu 04 Septembre 2014 à 23:30
-- Version du serveur: 5.5.24-log
-- Version de PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `yws`
--

-- --------------------------------------------------------

--
-- Structure de la table `resultat`
--

CREATE TABLE IF NOT EXISTS `resultat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(200) NOT NULL,
  `NombreDeVote` int(11) NOT NULL,
  `info` varchar(200) NOT NULL,
  `id_question` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=115 ;

--
-- Contenu de la table `resultat`
--

INSERT INTO `resultat` (`id`, `libelle`, `NombreDeVote`, `info`, `id_question`) VALUES
(1, 'Non', 6, '', 10),
(4, 'Ca depent', 6875, '', 10),
(10, 'Oui mais pas aujourd''hui', 10, '', 10),
(35, 'bien', 0, '', 0),
(36, 'pas bien', 0, '', 0),
(37, 'Cava', 0, '', 0),
(38, 'Pas du tout ', 0, '', 0),
(39, 'DJDJDJD', 0, '', 0),
(40, 'bien', 0, '', 0),
(41, 'pas bien', 0, '', 0),
(42, 'Cava', 0, '', 0),
(43, 'Pas du tout ', 0, '', 0),
(44, 'DJDJDJD', 0, '', 0),
(45, 'Romain', 0, '', 0),
(46, 'Valérie', 0, '', 0),
(47, 'UN Humain', 0, '', 0),
(48, 'Une écran', 0, '', 0),
(49, 'Un clavier', 0, '', 0),
(50, 'Romain', 0, '', 0),
(51, 'Valérie', 0, '', 0),
(52, 'UN Humain', 0, '', 0),
(53, 'Une écran', 0, '', 0),
(54, 'Un clavier', 0, '', 0),
(55, 'kk', 0, '', 50),
(56, 'kk', 0, '', 50),
(57, 'kk', 0, '', 50),
(58, 'kk', 0, '', 50),
(59, 'k', 0, '', 50),
(60, 'kk', 0, '', 50),
(61, 'kk', 0, '', 50),
(62, 'kk', 0, '', 50),
(63, 'kk', 0, '', 50),
(64, 'k', 0, '', 50),
(65, 'jj', 0, '', 47),
(66, 'j', 0, '', 47),
(67, 'j', 0, '', 47),
(68, 'j', 0, '', 47),
(69, 'j', 0, '', 47),
(70, 'jj', 0, '', 48),
(71, 'j', 0, '', 48),
(72, 'j', 0, '', 48),
(73, 'j', 0, '', 48),
(74, 'j', 0, '', 48),
(75, 'zea', 0, '', 49),
(76, 'eaz', 0, '', 49),
(77, 'eza', 0, '', 49),
(78, 'eza', 0, '', 49),
(79, 'e', 0, '', 49),
(95, 'k', 0, '', 53),
(96, 'k', 0, '', 53),
(97, 'k', 0, '', 53),
(98, 'k', 0, '', 53),
(99, 'k', 0, '', 53),
(100, 'k', 0, '', 54),
(101, 'k', 0, '', 54),
(102, 'k', 0, '', 54),
(103, 'k', 0, '', 54),
(104, 'k', 0, '', 54),
(105, 'k', 0, '', 55),
(106, 'k', 0, '', 55),
(107, 'k', 0, '', 55),
(108, 'k', 0, '', 55),
(109, 'k', 0, '', 55),
(110, 'l', 0, '', 56),
(111, 'l', 0, '', 56),
(112, 'l', 0, '', 56),
(113, 'ff', 0, '', 56),
(114, 'f', 0, '', 56);

-- --------------------------------------------------------

--
-- Structure de la table `sondage`
--

CREATE TABLE IF NOT EXISTS `sondage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(250) NOT NULL,
  `r1` varchar(250) NOT NULL,
  `r2` varchar(250) NOT NULL,
  `r3` varchar(250) NOT NULL,
  `r4` varchar(250) NOT NULL,
  `r5` varchar(250) NOT NULL,
  `vote1` int(20) NOT NULL,
  `vote2` int(20) NOT NULL,
  `vote3` int(20) NOT NULL,
  `vote4` int(20) NOT NULL,
  `vote5` int(20) NOT NULL,
  `Highlight` int(2) NOT NULL,
  `adresse` varchar(200) NOT NULL,
  `contexte` varchar(200) NOT NULL,
  `position` varchar(50) NOT NULL COMMENT 'Position en latitude/longitude',
  KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=169 ;

--
-- Contenu de la table `sondage`
--

INSERT INTO `sondage` (`id`, `question`, `r1`, `r2`, `r3`, `r4`, `r5`, `vote1`, `vote2`, `vote3`, `vote4`, `vote5`, `Highlight`, `adresse`, `contexte`, `position`) VALUES
(156, 'Etes vous pour la construction d''une gare à Choisy ?', 'Oui', 'Non', 'Je m''en fiche', '', '', 4, 19, 7, 0, 0, 1, 'Choisy', 'J''habite dans le quartier ou sera construit la nouvelle gare, je souhaiterais avoir l''avis de mon voisinnage.', '48.762541, 2.408875899999998'),
(161, 'Razer ou Steelserie ?', 'Razer', 'Steelserie', 'Les deux sont biens', 'Ni l''un ni l''autre', '', 0, 0, 0, 0, 0, 1, 'France', 'Pour ma nouvelle souris !', '46.227638, 2.213749000000007'),
(162, 'Saviez-vous qu''une 3ème tour avait explosée le 11 septembre ?', 'Oui', 'Non', '', '', '', 0, 0, 0, 0, 0, 1, 'New York', 'Je me demande combien de personne le savent.', '40.7127837, -74.00594130000002'),
(163, 'Oui', 'no', 'non', '', '', '', 2, 0, 0, 0, 0, 0, 'Ile de france', 'non', '48.8499198, 2.637041100000033'),
(164, 'Etes vous d''accord avec la construction d''une gare à Juvisy ?', 'Oui', 'Non', 'Peut être', '', '', 0, 0, 1, 0, 0, 0, 'Juvisy', 'Je voulais savoir si le voisinage est d''accord', '48.691738, 2.372160000000008'),
(165, 'Etes vous d''accord avec la construction d''une gare à Marseille ?', 'Oui', 'Non', 'Peut être', '', '', 0, 1, 0, 0, 0, 0, 'Marseille', 'Je voulais savoir si le voisinage est d''accord', '43.296482, 5.369779999999992'),
(167, 'Est-ce que cifacom est une bonne école ?', 'Oui', 'non', 'pet etre', '', '', 1, 0, 0, 0, 0, 0, 'rue du progres motreuil', 'Je suis a cifacom', '48.85188369999999, 2.4209077000000434'),
(168, 'dsqd', 'dsqd', 'sqdsq', '', '', '', 0, 0, 0, 0, 0, 0, 'france', 'sqdsq', '46.227638, 2.213749000000007');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Login` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `mail` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
