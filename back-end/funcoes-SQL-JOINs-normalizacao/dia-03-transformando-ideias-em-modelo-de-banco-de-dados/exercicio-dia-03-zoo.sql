DROP DATABASE IF EXISTS zoologico;
CREATE DATABASE zoologico;
USE zoologico;

CREATE TABLE animals(
animal_id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
specie VARCHAR(100) NOT NULL,
sex VARCHAR(50) NOT NULL,
age INT NOT NULL,
location VARCHAR(50) NOT NULL
);

CREATE TABLE managers(
manager_id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL
);

CREATE TABLE care_takers(
care_taker_id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
manager_id INT NOT NULL,
	FOREIGN KEY (manager_id) REFERENCES managers (manager_id)
);

CREATE TABLE animal_careTaker(
animal_id INT NOT NULL,
careTaker_id INT NOT NULL,
CONSTRAINT PRIMARY KEY(animal_id, careTaker_id),
	FOREIGN KEY (animal_id) REFERENCES animals (animal_id),
    FOREIGN KEY (careTaker_id) REFERENCES care_takers (care_taker_id)
);

