const mysql = require('mysql');
const connectionString = process.env.JAWSDB_MARIA_URL;

// if env variable exists, it's on cloud; otherwise, use localhost
const connection = connectionString
  ? connectionString + '?multipleStatements=true'
  : {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      multipleStatements: true
    };
// create a pool for more efficient connection management
const db = mysql.createPool(connection);

module.exports = {
   // Description: retrieve language
   // Result: [language_name]
   getLanguage: callback => {
      const query =
         'SELECT name AS language_name FROM Language';

      db.query(query, callback);
   },

   // Description: retrieve all documents
   // Result: document title, author, year, original text, translated text, image, upload date, language, location
   getDocuments: callback => {
      const query =
         'SELECT Document.id, title, author, year, original_text, translated_text, image, upload_date, ' +
         'Language.name AS language_name, Location.country AS country_name, Location.city AS city_name ' +
         'FROM Document ' +
         'INNER JOIN Language ON language_id = Language.id ' +
         'INNER JOIN Location ON document_location_id = Location.id ';

      db.query(query, callback);
   },

   // Description: retrieve document details for search page
   // Result: document title, author, year, image, upload date, language, location
   getDocumentMinimal: callback => {
      const query = 
         'SELECT Document.id, title, author, year, image, upload_date, ' +
         'Language.name AS language_name, Location.country AS country_name,Location.city AS city_name ' +
         'FROM Document ' +
         'INNER JOIN Language ON language_id = Language.id ' +
         'INNER JOIN Location ON document_location_id = Location.id ';

      db.query(query, callback);
   },

   // Description: retrieve document tag
   // Result: tag_name
   getDocumentTag: callback => {
      const query =
         'SELECT tag.name AS tag_name FROM Document ' +
         'INNER JOIN Document_Tag ON Document.id = document_id ' +
         'INNER JOIN Tag ON Tag.id = tag_id';
      
      db.query(query, callback);
   },

   // Description: retrieve username of document uploader
   // Result: username
   getDocumentPoster: callback => {
      const query =
         'SELECT username FROM User ' +
         'INNER JOIN Document_User ON User.id = user_id ' +
         'INNER JOIN Document ON Document.id = document_id'

      db.query(query, callback);
   },

   // Description: retrieve tag
   // Result: tag_name
   getTag: callback => {
      const query =
         'SELECT name AS tag_name FROM Tag';

      db.query(query, callback);
   },

   // Description: retrieve role
   // Result: role_name
   getRole: callback => {
      const query =
         'SELECT name AS role_name FROM Role';

      db.query(query, callback);
   },

   // Description: retrieve user
   // Result: username, email, role_name
   getUser: callback => {
      const query =
         'SELECT username, email, name AS role_name FROM User ' +
         'INNER JOIN Role ON role_id = Role.id';

      db.query(query, callback);
   },

   // Description: retrieve document by ID
   // Result: document title, author, year, original text, translated text, image, upload date, language, location
   getDocumentByID: (id, callback) => {
      const query =
         'SELECT title, author, year, original_text, translated_text, image, upload_date, ' +
         'Language.name AS language_name, Location.country AS country_name, Location.city AS city_name ' +
         'FROM Document ' +
         'INNER JOIN Language ON language_id = Language.id ' +
         'INNER JOIN Location ON document_location_id = Location.id ' +
         'WHERE Document.id = ?';
      const values = [id];

      db.query(query, values, callback);
   },

   // Description: retrieve document by tag
   // Result: document title, author, year, original text, translated text, image, upload date, language, location
   getDocumentByTag: (tag, callback) => {
      const query =
         'SELECT title, author, year, original_text, translated_text, image, upload_date, ' +
         'Language.name AS language_name, Location.country AS country_name, Location.city AS city_name ' +
         'FROM Document ' +
         'INNER JOIN Language ON language_id = Language.id ' +
         'INNER JOIN Location ON document_location_id = Location.id ' +
         'INNER JOIN Document_Tag ON Document.id = document_id ' +
         'INNER JOIN Tag ON tag.id = tag_id ' +
         'WHERE Tag.name = ?';
      const values = [tag];
      
      db.query(query, values, callback);
   },

   // Description: retrieve document by username
   // Result: document title, author, year, original text, translated text, image, upload date, language, location
   getDocumentByUsername: (username, callback) => {
      const query =
         'SELECT title, author, year, original_text, translated_text, image, upload_date, ' +
         'Language.name AS language_name, Location.country AS country_name, Location.city AS city_name ' +
         'FROM Document ' +
         'INNER JOIN Language ON language_id = Language.id ' +
         'INNER JOIN Location ON document_location_id = Location.id ' +
         'INNER JOIN Document_Tag ON Document.id = document_id ' +
         'INNER JOIN Tag ON tag.id = tag_id ' +
         'WHERE Tag.name = ?';
      const values = [username];
      
      db.query(query, values, callback);
   },

   // Description: add a location to the database
   insertLocation: (city, country, callback) => {
      const query = 
         'INSERT IGNORE INTO Location (city, country) VALUES (?, ?)';
      const values = [city, country];
      
      db.query(query, values, callback);
   },

   insertArchive: (document, callback) => {
      const query = 
         'INSERT IGNORE INTO Archive (name, location_id) ' + 
         'VALUES (?, (SELECT Location.id FROM Location WHERE Location.city = ? AND Location.country = ?))';
      
      const values = [
         document.archive, 
         document.archive_city,
         document.archive_country
      ];

      db.query(query, values, callback);
   }, 

   // Description: add a document to the database
   // Prereqs: Call insertLocation first for doc location and archive location
   insertDocument: (document, callback) => {
      const query = `
         INSERT INTO Document
            (title, uploader, date_of_publication, year, original_text, translated_text, upload_date,
               edit_date, language_id, location_id, archive_id, reference)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?,
                  (SELECT Language.id from Language WHERE Language.name = ?),
                  (SELECT Location.id from Location WHERE Location.city = ? AND Location.country = ?),
                  (SELECT Archive.id from Archive WHERE Archive.name = ?),
               ?)
      `;

      const values = [
         document.title,
         document.uploader,
         document.date_of_publication,
         document.year,
         document.original_text,
         document.translated_text,
         document.upload_date,
         document.edit_date,
         document.language,
         document.document_city,
         document.document_country,
         document.archive,
         document.reference
      ];

      db.query(query, values, callback);
   },

   insertNewUser: (userDetails, callback) => {
      const query = 
         'INSERT INTO User (username, role_id, firebase_uid) VALUES ?';
      const values = [userDetails]

      db.query(query, values, callback);
   }
}