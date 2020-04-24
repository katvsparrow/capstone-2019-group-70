USE sinyxb3424v6hdac;

DROP TABLE IF EXISTS Document_User;
DROP TABLE IF EXISTS Document_Tag;
DROP TABLE IF EXISTS Document;
DROP TABLE IF EXISTS sinyxb3424v6hdac.Language;
DROP TABLE IF EXISTS City;
DROP TABLE IF EXISTS Country;
DROP TABLE IF EXISTS Tag;
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS sinyxb3424v6hdac.Role;

-- Represents a single LANGUAGE
--
-- References: none
-- Associations: none
CREATE TABLE IF NOT EXISTS Language (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(32) NOT NULL
) ENGINE=InnoDB;

-- Represents a single COUNTRY
--
-- References: none
-- Associations: none
CREATE TABLE IF NOT EXISTS Country (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(32) NOT NULL
) ENGINE=InnoDB;

-- Represents a single CITY
--
-- References: Country
-- Associations: none
CREATE TABLE IF NOT EXISTS City (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(32) NOT NULL,
   country_id INT NOT NULL,
   FOREIGN KEY (country_id) REFERENCES Country(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Represents a single DOCUMENT
--
-- References: Language, Country, City
-- Associations: Tag, User
CREATE TABLE IF NOT EXISTS Document (
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(128) NOT NULL,
   author VARCHAR(64) NOT NULL,
   year SMALLINT NOT NULL,
   original_text MEDIUMTEXT NOT NULL,
   translated_text MEDIUMTEXT NOT NULL,
   image TEXT NOT NULL,
   upload_date DATE NOT NULL,
   language_id INT NOT NULL,
   country_id INT,
   city_id INT,
   FOREIGN KEY (language_id) REFERENCES Language(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
   FOREIGN KEY (country_id) REFERENCES Country(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
   FOREIGN KEY (city_id) REFERENCES City(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Represents a single TAG
--
-- References: none
-- Associations: Document
CREATE TABLE IF NOT EXISTS Tag (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(32) NOT NULL
) ENGINE=InnoDB;

-- Represents a single ROLE
--
-- References: none
-- Associations: none
CREATE TABLE IF NOT EXISTS Role (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(16) NOT NULL
) ENGINE=InnoDB;

-- Represents a single USER
-- 
-- References: Role
-- Associations: Document
CREATE TABLE IF NOT EXISTS User (
   id INT AUTO_INCREMENT PRIMARY KEY,
   username VARCHAR(32) NOT NULL UNIQUE,
   email VARCHAR(255) NOT NULL,
   role_id INT NOT NULL,
   FOREIGN KEY (role_id) REFERENCES Role(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Represents a link between a DOCUMENT and a TAG
--
-- References: Document, Tag
CREATE TABLE IF NOT EXISTS Document_Tag (
   document_id INT NOT NULL,
   tag_id INT NOT NULL,
   FOREIGN KEY (document_id) REFERENCES Document(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
   FOREIGN KEY (tag_id) REFERENCES Tag(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Represents a link between a DOCUMENT and a USER
-- 
-- References: Document, User
CREATE TABLE IF NOT EXISTS Document_User (
   document_id INT NOT NULL,
   user_id INT NOT NULL,
   FOREIGN KEY (document_id) REFERENCES Document(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
   FOREIGN KEY (user_id) REFERENCES User(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=InnoDB;
