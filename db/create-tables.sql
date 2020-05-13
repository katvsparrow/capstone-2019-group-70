USE sinyxb3424v6hdac;

DROP TABLE IF EXISTS Document_User_Favorite;
DROP TABLE IF EXISTS Document_Tag_Association;
DROP TABLE IF EXISTS Document;
DROP TABLE IF EXISTS Archive;
DROP TABLE IF EXISTS sinyxb3424v6hdac.Language;
DROP TABLE IF EXISTS sinyxb3424v6hdac.Location;
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

CREATE TABLE IF NOT EXISTS Location (
   id INT AUTO_INCREMENT,
   city VARCHAR(32),
   country VARCHAR(32),
   PRIMARY KEY (id),
   UNIQUE KEY (city, country)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS Archive (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(32) NOT NULL,
   location_id INT,
   UNIQUE KEY (name, location_id),
   FOREIGN KEY (location_id) REFERENCES Location(id)
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
   uploader VARCHAR(32) NOT NULL,
   date_of_publication DATE NOT NULL,
   year SMALLINT NOT NULL,
   original_text MEDIUMTEXT,
   translated_text MEDIUMTEXT,
   image TEXT,
   upload_date DATE NOT NULL,
   edit_date DATE NOT NULL,
   language_id INT NOT NULL,
   document_location_id INT,
   archive_id INT,
   reference VARCHAR(128),
   FOREIGN KEY (language_id) REFERENCES Language(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
   FOREIGN KEY (document_location_id) REFERENCES Location(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
   FOREIGN KEY (archive_id) REFERENCES Archive(id)
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
   role_id INT NOT NULL,
   uid VARCHAR(32) NOT NULL UNIQUE,
   FOREIGN KEY (role_id) REFERENCES Role(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Represents a link between a DOCUMENT and a TAG
--
-- References: Document, Tag
CREATE TABLE IF NOT EXISTS Document_Tag_Association (
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
CREATE TABLE IF NOT EXISTS Document_User_Favorite (
   document_id INT NOT NULL,
   user_id INT NOT NULL,
   FOREIGN KEY (document_id) REFERENCES Document(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
   FOREIGN KEY (user_id) REFERENCES User(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=InnoDB;
