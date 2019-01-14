DROP DATABASE IF EXISTS habitRabbit;
CREATE DATABASE IF NOT EXISTS habitRabbit;
USE habitRabbit;

CREATE TABLE recipes (
	id INT AUTO_INCREMENT NOT NULL,
	recipe_name VARCHAR(255),
  recipe_img VARCHAR(255),
	category VARCHAR(255),
  description VARCHAR(255),
  ingredients VARCHAR(555),
	instructions VARCHAR(5000),
	starred BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
    
);

CREATE TABLE favoriteRecipes (
	id INT AUTO_INCREMENT NOT NULL, 
	userID VARCHAR(255), 
	recipe_name VARCHAR(255),
  recipe_img VARCHAR(255),
	category VARCHAR(255),
  description VARCHAR(255),
  ingredients VARCHAR(555),
	instructions VARCHAR(5000),
	PRIMARY KEY (id)
);

CREATE TABLE activities (
	id INT AUTO_INCREMENT NOT NULL,
	activity_name VARCHAR(255),
  activity_img VARCHAR(255),
  description  VARCHAR(255),
	category VARCHAR(255),
	needed VARCHAR(255), 
	instructions VARCHAR(5000),
	reps VARCHAR(255), 
	sets VARCHAR(255), 
	total_time VARCHAR(255), 
	below65 BOOLEAN,
	starred BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);



SELECT * FROM activities;
SELECT * FROM recipes;
