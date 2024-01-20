/* creation of the database */

SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS narupedia;

DROP DATABASE IF EXISTS narupedia;

USE narupedia;

/* creation tables */

SHOW TABLES;

CREATE TABLE villages (
	village_id int UNSIGNED PRIMARY KEY, 
	village varchar(50)
);

DROP TABLE villages;
SELECT * FROM villages;

CREATE TABLE clans (
	clan_id int UNSIGNED PRIMARY KEY, 
	clan varchar(50)
);

DROP TABLE clans;
SELECT * FROM clans;

CREATE TABLE kekkeigenkais (
	kekkeigenkai_id int UNSIGNED PRIMARY KEY, 
	kekkeigenkai varchar(50)
);

DROP TABLE kekkeigenkais;
SELECT * FROM kekkeigenkais;

CREATE TABLE characters (
	character_id int UNSIGNED PRIMARY KEY, 
	name varchar(50),
	image varchar(200) 
);

DROP TABLE characters;
SELECT * FROM characters;


CREATE TABLE village_x_character (
	vxc_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	village_id int UNSIGNED, 
	character_id int UNSIGNED,
	FOREIGN KEY (village_id) REFERENCES villages(village_id), 
	FOREIGN KEY (character_id) REFERENCES characters(character_id) 
);

DROP TABLE village_x_character;
SELECT * FROM village_x_character;

CREATE TABLE clan_x_character (
	cxc_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	clan_id int UNSIGNED,
	character_id int UNSIGNED,
	FOREIGN KEY (clan_id) REFERENCES clans(clan_id), 
	FOREIGN KEY (character_id) REFERENCES characters(character_id) 
);

DROP TABLE clan_x_character;
SELECT * FROM clan_x_character;

CREATE TABLE kekkeigenkai_x_character (
	kxc_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	kekkeigenkai_id int UNSIGNED,
	character_id int UNSIGNED,
	FOREIGN KEY (kekkeigenkai_id) REFERENCES kekkeigenkais(kekkeigenkai_id), 
	FOREIGN KEY (character_id) REFERENCES characters(character_id) 
	
);

DROP TABLE kekkeigenkai_x_character;
SELECT * FROM kekkeigenkai_x_character;

