CREATE DATABASE sijan_website;

USE sijan_website;

CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL CHECK (email LIKE '%@gmail.com'),
    address VARCHAR(255),
    phone VARCHAR(15) NOT NULL,
    message TEXT
);
