DROP TABLE IF EXISTS vehicle;

CREATE TABLE vehicle (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  brand VARCHAR(80) NOT NULL,
  model VARCHAR(80) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  mileage VARCHAR(80) NOT NULL,
  technicalData VARCHAR(255) NOT NULL,
  localisation VARCHAR(80) NOT NULL,
  isAvailable TINYINT NULL,
  inRepair TINYINT NULL
-- ENGINE = InnoDB;
);

INSERT INTO vehicle (brand, model, picture, mileage, technicalData, localisation, isAvailable, inRepair) VALUES ('Peugeot', '206','monimage.png','150000 km', 'Diesel', 'Lyon', '1', '0'),('Golf', '308', '150000 km', 'Diesel', 'Lyon', '1', '0')('Audi', 'A7', '150000 km', 'Diesel', 'Lyon', '1', '0')('BMW', 'Serie 3', '150000 km', 'Diesel', 'Lyon', '1', '0');

DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(80) NOT NULL,
  lastname VARCHAR(80) NOT NULL,
  email VARCHAR(150) NOT NULL,
  city VARCHAR(80) NULL,
  phone VARCHAR(20) NULL,
  hashedPassword VARCHAR(100) NOT NULL,
  isAdmin TINYINT NULL,
  avatar VARCHAR(255) NULL,
  date_creation DATETIME NOT NULL DEFAULT NOW(),
  vehicle_id INT,
  -- CONSTRAINT `fk_user_vehicule`
  FOREIGN KEY (vehicle_id) REFERENCES vehicle (id)
);
-- ENGINE = InnoDB;

INSERT INTO user (firstname, lastname, email, city, phone, hashedPassword, isAdmin, avatar, date_creation, vehicle_id) VALUES ('Davy', 'Mccree', 'davy.mccree@gmail.com', 'Oslo', '0600000000', '12345', '1', 'monavatar1.png', '2022-10-18 12:12:23', '1'),('Jean', 'Mccree', 'davy.mccree@gmail.com', 'Oslo', '0652658000', '12345', '1', 'monavatar2.png', '2022-10-16 12:12:23', '1'),('Paul', 'Mccree', 'davy.mccree@gmail.com', 'Oslo', '0659815495', '12345', '1', 'monavatar3.png', '2022-10-14 12:12:23', '1'),('Bob', 'Mccree', 'davy.mccree@gmail.com', 'Oslo', '0620326521', '12345', '1', 'monavatar4.png', '2022-10-08 12:12:23', '1');

