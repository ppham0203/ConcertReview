### Schema

CREATE DATABASE ddas5d1bba36av;
USE ddas5d1bba36av;

CREATE TABLE review
(
	id int NOT NULL AUTO_INCREMENT,
	Artist varchar(255) NOT NULL,
	Venue varchar(255) NOT NULL,
	DateOfReview DATE,
	DateOfConcert DATE,
	Review varchar(255) NOT NULL,
	Helpful INT,
	PRIMARY KEY (id)
);
