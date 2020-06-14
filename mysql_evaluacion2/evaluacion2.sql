create table publicadores (

id int(11) unsigned PRIMARY KEY  AUTO_INCREMENT,
nombre text not null,
ciudad varchar(15),
estado varchar(2)
);




create table tiendas(
id int (11)  PRIMARY KEY  AUTO_INCREMENT,
nombre text not null, 
codigo_postal varchar(6),
ciudad varchar(15),
estado varchar(2)

);


insert into publicadores (nombre , ciudad, estado)
values ("New age books", "Boston" , "MA" ),
("Binnet & hardley" , "Washington" , "DC" ),
("Algodata infosystem" , "Berkley" , "CA");


insert into tiendas (nombre , codigo_postal , ciudad , estado)
values ("Barnums", "92789", "tustin", "CA" ),
("News y brews" , "96745" , "Los Gatos" , "CA" ),
("Quality laundry and books" , "98014" , "Remulade" , "WA" ),
("Bookbeat" , "89076" , "portland" , "OR" ),
("Eric the read books" , "98056" , "Seatle" , "WA" ),
("Fricative bookshop" , "98056" , "fremont" , "CA" ),
("Thoreau Reading Dicount chain" , "17765" , "Concord" , "MA" );

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE TABLE  libros(
"id" int(11) PRIMARY KEY AUTO_INCREMENT,
"codigo" varchar(6) ,
"titulo" text ,
"categoria" varchar(12),
"precio" decimal(10),
"cantidad_vendida" int(9),
);



INSERT INTO `libros` (`id`, `codigo`, `titulo`, `categoria`, `precio`, `cantidad_vendida`, `id_publicador`) VALUES
(1, 'BU1032', 'The Busy Executive Database Guide', 'business', '20', 5000, 3),
(2, 'BU1111', 'Cooking with Computers: Surreptitious Balance Sheets', 'business', '12', 5000, 3),
(3, 'BU2075', 'You Can Combat Computer Stress!', 'business', '3', 10125, 1),
(4, 'BU7832', 'Straight Talk About Computers', 'business', '20', 5000, 3),
(5, 'MC2222', 'Silicon Valley Gastronomic Treats', 'mod_cook', '20', 0, 2),
(6, 'MC3021', 'The Gourmet Microwave', 'mod_cook', '3', 15000, 2),
(7, 'MC3026', 'The Psychology of Computer Cooking', 'UNDECIDED', '0', 0, 2),
(8, 'PC1035', 'But Is It User Friendly?', 'popular_comp', '23', 7000, 3),
(9, 'PC8888', 'Secrets of Silicon Valley', 'popular_comp', '20', 8000, 3),
(10, 'PC9999', 'Net Etiquette', 'popular_comp', '0', 0, 3),
(11, 'PS1372', 'Computer Phobic and Non-Phobic Individuals: Behavior Variati', 'psychology', '22', 7000, 2),
(12, 'PS2091', 'Is Anger the Enemy?', 'psychology', '11', 2275, 1),
(13, 'PS2106', 'Life Without Fear', 'psychology', '7', 6000, 1),
(14, 'PS3333', 'Prolonged Data Deprivation: Four Case Studies', 'psychology', '20', 2000, 1),
(15, 'PS7777', 'Emotional Security: A New Algorithm', 'psychology', '8', 4000, 1),
(16, 'TC3218', 'Onions, Leeks, and Garlic: Cooking Secrets of the Mediterran', 'trad_cook', '21', 7000, 2),
(17, 'TC4203', 'Fifty Years in Buckingham Palace Kitchens', 'trad_cook', '12', 4000, 2),
(18, 'TC7777', 'Sushi, Anyone?', 'trad_cook', '15', 8000, 2);

ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;





