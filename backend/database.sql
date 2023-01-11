DROP TABLE IF EXISTS vehicle;

CREATE TABLE vehicle (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  brand VARCHAR(80) NOT NULL,
  model VARCHAR(80) NOT NULL,
  mileage VARCHAR(80) NOT NULL,
  technicalData VARCHAR(255) NOT NULL,
  localisation VARCHAR(80) NOT NULL,
  isAvailable TINYINT NULL,
  inRepair TINYINT NULL
-- ENGINE = InnoDB;
);

INSERT INTO vehicle (brand, model, mileage, technicalData, localisation, isAvailable, inRepair) VALUES ('Peugeot', '206', '150000 km', 'Diesel', 'Lyon', '1', '0');

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

INSERT INTO user (firstname, lastname, email, city, phone, hashedPassword, isAdmin, avatar, date_creation, vehicle_id) VALUES ('Davy', 'Mccree', 'davy.mccree@gmail.com', 'Oslo', '0600000000', '12345', '1', 'monavatar.png', '2022-10-13 12:12:23', '1');

