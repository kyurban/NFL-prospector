-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: localhost    Database: nfl-prospects
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `draft-prospects`
--

DROP TABLE IF EXISTS `draft-prospects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `draft-prospects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` text,
  `last_name` text,
  `position` text,
  `college` text,
  `age` int DEFAULT NULL,
  `height` text,
  `weight` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `draft-prospects`
--

LOCK TABLES `draft-prospects` WRITE;
/*!40000 ALTER TABLE `draft-prospects` DISABLE KEYS */;
INSERT INTO `draft-prospects` VALUES (1,'Travis','Hunter','CB','Colorado',21,'6\'1\"','185'),(2,'Abdul','Carter','ED','Penn State',21,'6\'3\"','252'),(3,'Tetairoa','McMillan','WR','Arizona',22,'6\'5\"','212'),(4,'Mason','Graham','DI','Michigan',21,'6\'3\"','320'),(5,'Ashton','Jeanty','HB','Boise State',21,'5\'9\"','215'),(6,'Will','Campbell','T','LSU',21,'6\'6\"','323'),(7,'Jahdae','Barron','CB','Texas',23,'5\'11\"','200'),(8,'Tyler','Warren','TE','Penn State',22,'6\'6\"','261'),(9,'Malaki','Starks','S','Georgia',21,'6\'1\"','205'),(10,'Jihaad','Campbell','LB','Alabama',21,'6\'3\"','244'),(11,'Armand','Membou','T','Missouri',21,'6\'3\"','314'),(12,'Mike','Green','ED','Marshall',22,'6\'4\"','248'),(13,'Will','Johnson','CB','Michigan',22,'6\'2\"','202'),(14,'Luther','Burden III','WR','Missouri',21,'5\'11\"','208'),(15,'James','Pearce Jr.','ED','Tennessee',21,'6\'5\"','243'),(16,'Donovan','Ezeiruaku','ED','Boston College',21,'6\'2\"','247'),(17,'Kenneth','Grant','DI','Michigan',21,'6\'3\"','339'),(18,'Josh','Simmons','T','Ohio State',22,'6\'5\"','310'),(19,'Emeka','Egbuka','WR','Ohio State',22,'6\'1\"','205'),(20,'Kelvin','Banks Jr.','T','Texas',21,'6\'4\"','320'),(22,'Matthew','Golden','WR','Texas',21,'6\'0\"','195'),(23,'Walter','Nolen','DI','Mississippi',21,'6\'3\" ','305'),(24,'Omarion','Hampton','HB','North Carolina',22,'6\'1\"','220'),(25,'Colston','Loveland','TE','Michigan',20,'6\'5\"','245'),(26,'Mykel','Williams','ED','Georgia',20,'6\'5\"','265'),(27,'Shemar','Stewart','ED','Texas A&M',21,'6\'6\"','290'),(28,'Jalon','Walker','LB','Georgia',21,'6\'2\"','245'),(29,'Grey','Zabel','T','North Dakota State',23,'6\'6\"','305'),(30,'Derrick','Harmon','DI','Oregon',21,'6\'5\"','310'),(31,'Nic','Scourton','ED','Texas A&M',20,'6\'4\"','285'),(32,'Darius','Alexander','DI','Toledo',24,'6\'4\"','310'),(33,'Demetrius','Knight Jr.','LB','South Carolina',25,'6\'2\"','245'),(34,'Josh','Conerly Jr.','T','Oregon',21,'6\'4\"','315'),(35,'Elic','Ayomanor','WR','Stanford',21,'6\'2\"','210'),(36,'T.J.','Sanders','DI','South Carolina',21,'6\'4\"','290'),(37,'Tyleik','Williams','DI','Ohio State',22,'6\'3\"','327'),(38,'Jack','Bech','WR','TCU',22,'6\'2\"','215'),(39,'Xavier','Watts','S','Notre Dame',23,'6\'0\"','203'),(40,'Trey','Amos','CB','Mississippi',23,'6\'1\"','190'),(41,'Landon','Jackson','ED','Arkansas',22,'6\'7\"','280'),(42,'Maxwell','Hairston','CB','Kentucky',21,'6\'1\"','186'),(43,'Shavon','Revel','CB','East Carolina',22,'6\'3\"','193'),(44,'Princely','Umanmielen','ED','Mississippi',22,'6\'4\"','255'),(45,'Nick','Emmanwori','S','South Carolina',21,'6\'3\"','227'),(46,'Shadeur','Sanders','QB','Colorado',23,'6\'2\"','215'),(47,'Bradyn','Swinson','ED','LSU',22,'6\'4\"','250'),(48,'Tyler','Booker','G','Alabama',20,'6\'5\"','325'),(49,'Jayden','Higgins','WR','Iowa State',22,'6\'4\"','215'),(50,'Cam','Skattebo','HB','Arizona',23,'5\'11\"','215');
/*!40000 ALTER TABLE `draft-prospects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-04 15:41:49
