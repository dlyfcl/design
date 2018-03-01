-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: cinemaSystem
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `HeadImg`
--

DROP TABLE IF EXISTS `HeadImg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `HeadImg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  `img` varchar(40) DEFAULT NULL,
  `score` varchar(40) DEFAULT NULL,
  `time` varchar(40) DEFAULT NULL COMMENT '电影时长',
  `type` varchar(40) DEFAULT NULL COMMENT '电影类型',
  `director` varchar(40) DEFAULT NULL COMMENT '导演',
  `starring` varchar(40) DEFAULT NULL COMMENT '主演',
  `profile` text COMMENT '概要',
  `price` varchar(40) DEFAULT NULL COMMENT '价格',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='头部轮波电影表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HeadImg`
--

LOCK TABLES `HeadImg` WRITE;
/*!40000 ALTER TABLE `HeadImg` DISABLE KEYS */;
/*!40000 ALTER TABLE `HeadImg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hotimg`
--

DROP TABLE IF EXISTS `Hotimg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Hotimg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  `img` varchar(40) DEFAULT NULL,
  `score` varchar(40) DEFAULT NULL,
  `price` varchar(40) DEFAULT NULL,
  `time` varchar(40) DEFAULT NULL,
  `type` varchar(40) DEFAULT NULL,
  `director` varchar(40) DEFAULT NULL,
  `starring` varchar(40) DEFAULT NULL,
  `profile` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='正在热映的电影表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hotimg`
--

LOCK TABLES `Hotimg` WRITE;
/*!40000 ALTER TABLE `Hotimg` DISABLE KEYS */;
/*!40000 ALTER TABLE `Hotimg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SoonImg`
--

DROP TABLE IF EXISTS `SoonImg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SoonImg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  `img` varchar(40) DEFAULT NULL,
  `score` varchar(40) DEFAULT NULL,
  `time` varchar(40) DEFAULT NULL,
  `type` varchar(40) DEFAULT NULL,
  `director` varchar(40) DEFAULT NULL,
  `starring` varchar(40) DEFAULT NULL,
  `profile` varchar(40) DEFAULT NULL,
  `price` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='即将上映';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SoonImg`
--

LOCK TABLES `SoonImg` WRITE;
/*!40000 ALTER TABLE `SoonImg` DISABLE KEYS */;
/*!40000 ALTER TABLE `SoonImg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newRank`
--

DROP TABLE IF EXISTS `newRank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `newRank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  `img` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newRank`
--

LOCK TABLES `newRank` WRITE;
/*!40000 ALTER TABLE `newRank` DISABLE KEYS */;
/*!40000 ALTER TABLE `newRank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `mobile` varchar(40) DEFAULT NULL,
  `createAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,'www222','13057546058',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weekRank`
--

DROP TABLE IF EXISTS `weekRank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weekRank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  `img` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='周排行';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weekRank`
--

LOCK TABLES `weekRank` WRITE;
/*!40000 ALTER TABLE `weekRank` DISABLE KEYS */;
/*!40000 ALTER TABLE `weekRank` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-01 11:01:45
