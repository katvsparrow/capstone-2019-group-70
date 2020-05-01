const mysql = require('mysql');

const connectionString = process.env.JAWSDB_MARIA_URL;

// if env variable exists, it's on cloud; otherwise, use localhost
const connection = connectionString
  ? connectionString + '?multipleStatements=true'
  : {
      host: 'op2hpcwcbxb1t4z9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'bow68m2jqe88hco1',
      password: 'i3inp545cau1avg5',
      database: 'sinyxb3424v6hdac',
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

   // Description: retrieve country
   // Result: country_name
   getCountry: callback => {
      const query = 
         'SELECT name AS country_name FROM Country';

      db.query(query, callback);
   },

   // Description: retrieve city and corresponding country
   // Result: city_name, country_name
   getCity: callback => {
      const query =
         'SELECT City.name AS city_name, Country.name AS country_name FROM ' +
         'City INNER JOIN Country ON country_id = Country.id';

      db.query(query, callback);
   },

   // Description: retrieve all documents
   // Result: document title, author, year, original text, translated text, image, upload date,
   //         language, country, city
   getDocuments: callback => {
      const query =
         'SELECT Document.id, title, author, year, original_text, translated_text, image, upload_date, ' +
         'Language.name AS language_name, Country.name AS country_name, City.name AS city_name ' +
         'FROM Document ' +
         'INNER JOIN Language ON language_id = Language.id ' +
         'INNER JOIN Country ON country_id = Country.id ' +
         'LEFT JOIN City ON city_id = City.id';

      db.query(query, callback);
   },

   // Description: retrieve document details for search page
   // Result: document title, author, year, image, upload date, language, country, city
   getDocumentMinimal: callback => {
      const query = 
         'SELECT Document.id, title, author, year, image, upload_date, ' +
         'Language.name AS language_name, Country.name AS country_name, City.name AS city_name ' +
         'FROM Document ' +
         'INNER JOIN Language ON language_id = Language.id ' +
         'INNER JOIN Country ON country_id = Country.id ' +
         'INNER JOIN City ON city_id = City.id ';

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
   // Result: document title, author, year, original text, translated text, image, upload date,
   //         language, country, city
   getDocumentByID: (id, callback) => {
      const query =
         'SELECT title, author, year, original_text, translated_text, image, upload_date, ' +
         'Language.name AS language_name, Country.name AS country_name, City.name AS city_name ' +
         'FROM Document ' +
         'INNER JOIN Language ON language_id = Language.id ' +
         'INNER JOIN Country ON country_id = Country.id ' +
         'INNER JOIN City ON city_id = City.id ' +
         'WHERE id = ?';
      const values = [id];

      db.query(query, values, callback);
   },

   // Description: retrieve document by tag
   // Result: document title, author, year, original text, translated text, image, upload date,
   //         language, country, city
   getDocumentByTag: (tag, callback) => {
      const query =
         'SELECT title, author, year, original_text, translated_text, image, upload_date, ' +
         'Language.name AS language_name, Country.name AS country_name, City.name AS city_name ' +
         'FROM Document ' +
         'INNER JOIN Language ON language_id = Language.id ' +
         'INNER JOIN Country ON country_id = Country.id ' +
         'INNER JOIN City ON city_id = City.id ' +
         'INNER JOIN Document_Tag ON Document.id = document_id ' +
         'INNER JOIN Tag ON tag.id = tag_id ' +
         'WHERE Tag.name = ?';
      const values = [tag];
      
      db.query(query, values, callback);
   },

   // Description: retrieve document by username
   // Result: document title, author, year, original text, translated text, image, upload date,
   //         language, country, city
   getDocumentByUsername: (username, callback) => {
      const query =
         'SELECT title, author, year, original_text, translated_text, image, upload_date, ' +
         'Language.name AS language_name, Country.name AS country_name, City.name AS city_name ' +
         'FROM Document ' +
         'INNER JOIN Language ON language_id = Language.id ' +
         'INNER JOIN Country ON country_id = Country.id ' +
         'INNER JOIN City ON city_id = City.id ' +
         'INNER JOIN Document_Tag ON Document.id = document_id ' +
         'INNER JOIN Tag ON tag.id = tag_id ' +
         'WHERE Tag.name = ?';
      const values = [username];
      
      db.query(query, values, callback);
   },

   // Description: add a document to the database
   insertDocument: (document, callback) => {
      const query = 
         'INSERT INTO Document (title, author, year, original_text, translated_text, image, upload_date, language_id, country_id, city_id) VALUES ?';
      const values = [document]

      db.query(query, values, callback);
   }
}