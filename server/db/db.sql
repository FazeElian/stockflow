-- Use database 
USE stockflow;

-- View all tables
SHOW TABLES;

-- -----------------------------------------------------
-- Table USERS
-- -----------------------------------------------------

CREATE TABLE `USERS` (
	id INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(80) NOT NULL,
	`email` VARCHAR(100) NOT NULL,
	`password` VARCHAR(50) NOT NULL,
	`createdAt` DATETIME NOT NULL,
	`updatedAt` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
)
ENGINE = InnoDB;