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

INSERT INTO vehicle (brand, model, picture, mileage, technicalData, localisation, isAvailable, inRepair) VALUES ('Peugeot', '206','monimage.png','150000 km', 'Diesel', 'Lyon', '1', '0'),('Golf', '308','monimage.png','150000 km', 'Diesel', 'Lyon', '1', '0'),('Audi', 'A7','monimage.png','150000 km', 'Diesel', 'Lyon', '1', '0'),('BMW', 'Serie 3','monimage.png','150000 km', 'Diesel', 'Lyon', '1', '0');

DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(80) NOT NULL,
  lastname VARCHAR(80) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
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

INSERT INTO user (firstname, lastname, email, city, phone, hashedPassword, isAdmin, avatar, date_creation, vehicle_id) VALUES ('Jack', 'Sparrow', 'jack.sparrow@gmail.com', 'Oslo', '0600000000', '$argon2id$v=19$m=65536,t=5,p=1$n0d+QZC50J4zxh96zq0FDw$Qtfc4rjgLIlcJJ9iipQ2lNwPDIPTOx/YX/5JNdxSVZg', '1', 'monavatar1.png', '2022-10-18 12:12:23', '1');

