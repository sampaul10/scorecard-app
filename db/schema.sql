DROP DATABASE IF EXISTS scorecards_db;
CREATE DATABASE scorecards_db;

USE scorecards_db;

CREATE TABLE scores (
    id INT auto_increment PRIMARY KEY,
    hole_number INT,
    par, INT
    score INT,
    GIR BIT,
    putts INT,
    note_1 varchar(30),
    note_2 varchar(30),
);