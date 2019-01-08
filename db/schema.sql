DROP DATABASE IF EXISTS habitRabbit;
CREATE DATABASE IF NOT EXISTS habitRabbit;
USE habitRabbit;

CREATE TABLE recipes (
	id INT AUTO_INCREMENT NOT NULL,
	recipe_name VARCHAR(255),
    recipe_img VARCHAR(255),
    description VARCHAR(255),
    ingredients VARCHAR(255),
	starred BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
    
);

CREATE TABLE activities (
	id INT AUTO_INCREMENT NOT NULL,
	activity_name VARCHAR(255),
    activity_img VARCHAR(255),
    description  VARCHAR(255),
	starred BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM activities;
SELECT * FROM recipes;
