DROP DATABASE IF exists index_db;
CREATE DATABASE index_db;
USE index_db;

CREATE TABLE indexs
(
    id int NOT NULL AUTO_INCREMENT,
    index_name varchar (255) NOT NULL.NAMES,
    noted BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);