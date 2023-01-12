DROP TABLE IF EXISTS vehicle;

CREATE TABLE vehicle (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  car_type VARCHAR(80) NULL,
  brand VARCHAR(80) NULL,
  model VARCHAR(80) NULL,
  picture VARCHAR(255) NULL,
  mileage VARCHAR(80) NULL,
  technicalData VARCHAR(255) NULL,
  localisation VARCHAR(80) NULL,
  isAvailable TINYINT NULL,
  inRepair TINYINT NULL
-- ENGINE = InnoDB;
);

INSERT INTO vehicle (car_type, brand, model, picture, mileage, technicalData, localisation, isAvailable, inRepair) VALUES ('Berline','Peugeot', '206','../frontend/src/peugeot-206.jpg','48500 km', 'Essence', 'Lyon', '1', '0'),('Berline','Golf', '308','../frontend/src/Golf-GTI','25320 km', 'Diesel', 'Nantes', '0', '1'),('Berline','Audi', 'A7','../frontend/src/audi-a7.png','150000 km', 'Essence', 'Lyon', '1', '0'),('Berline','Audi', 'A3','../frontend/src/audi-a3.jpg','8000 km', 'Diesel', 'Paris', '1', '0'),('Berline','BMW', 'Serie 3','../frontend/src/bmw-3.png','70000 km', 'Diesel', 'Lyon', '0', '1'),('Utilitaire','Ford', 'Transit Connect','../frontend/src/ford-transit','76050 km', 'Diesel', 'Lyon', '1', '0'),('Utilitaire','Volkswagen', 'Caddy Cargo','../frontend/src/caddy-cargo.png','89000 km', 'Essence', 'Bordeaux', '1', '0'),('Electrique','Seat', 'MII Electric','../frontend/src/seat-mii.jpg','100000 km', 'Electric', 'Lyon', '1', '0'),('Electrique','Cupra', 'Born','../frontend/src/cupra-born.jpg','100000 km', 'Electric', 'Toulouse', '1', '0');

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

