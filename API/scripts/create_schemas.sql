CREATE DATABASE JavaScriptAPI_DB;

CREATE TABLE `JavaScriptAPI_DB`.`stars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `link` VARCHAR(400) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `JavaScriptAPI_DB`.`constellations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `link` VARCHAR(400) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `JavaScriptAPI_DB`.`starsconstellations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `starID` INT NOT NULL,
  `constellationID` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (starID) REFERENCES stars(id),
  FOREIGN KEY (constellationID) REFERENCES constellations(id));