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
   getAlgoliaData: callback => {
      const query = `
         SELECT 
            Document.id, title, uploader, date_of_publication, year,
            original_text, translated_text, image, upload_date, edit_date,
            Language.name as language_name, Location.name as location_name, 
            Archive.name as archive_name, Arc_Loc.name as archive_location_name
            reference
         FROM Document 
         INNER JOIN Language ON language_id = Language.id
         INNER JOIN Location ON document_location_id = Location.id
         INNER JOIN Archive on archive_id = Archive.id
         INNER JOIN Location Arc_Loc ON Arc_Loc.id = Archive.location_id
      `;

      db.query(query, callback)
   },

   
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
      // same as document minimal, but expecting change
      const query = `
         SELECT 
            Document.id, title, uploader, date_of_publication, year,
            original_text, translated_text, image, upload_date, edit_date,
            Language.name as language_name, Location.name as location_name, 
            Archive.name as archive_name, reference
         FROM Document 
         INNER JOIN Language ON language_id = Language.id
         INNER JOIN Location ON document_location_id = Location.id
         INNER JOIN Archive on archive_id = Archive.id
      `;
      db.query(query, callback);
   },

   // Description: retrieve document details for search page
   // Result: document title, author, year, image, upload date, language, location
   getDocumentMinimal: callback => {
      const query = `
         SELECT 
            Document.id, title, uploader, date_of_publication, 
            original_text, translated_text, image, upload_date, edit_date,
            Language.name as language_name, Location.name as location_name, 
            Archive.name as archive_name
         FROM Document 
         INNER JOIN Language ON language_id = Language.id
         INNER JOIN Location ON document_location_id = Location.id
         INNER JOIN Archive on archive_id = Archive.id
      `;

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

   getUserInformation: (uid, callback) => {
      const query = `
         SELECT
            User.id, username, Role.name AS Role,
            GROUP_CONCAT(DUF.document_id) AS favorited_wills
         FROM User 
         INNER JOIN Role ON Role.id = User.role_id
         INNER JOIN Document_User_Favorite DUF ON DUF.user_id = User.id
         WHERE uid = ?
      `;
      
      const values = [uid];

      db.query(query, values, callback);
   },

   // Description: retrieve document by ID
   // Result: document title, author, year, original text, translated text, image, upload date, language, location
   getDocumentByID: (id, callback) => {
      const query = `
         SELECT Document.id, title, uploader, date_of_publication, year,
            original_text, translated_text, image, upload_date, edit_date,
            Language.name as language_name, Location.name as location_name,
            Archive.name as archive_name, reference
         FROM Document 
         INNER JOIN Language ON language_id = Language.id
         INNER JOIN Location ON document_location_id = Location.id
         INNER JOIN Archive on archive_id = Archive.id
         WHERE Document.id = ?
      `;

      const values = [id];

      db.query(query, values, callback);
   },

   // Description: add a location to the database
   insertLocation: (location_name, callback) => {
      const query = 
         'INSERT IGNORE INTO Location (name) VALUES (?)';
      const values = [location_name];
      
      db.query(query, values, callback);
   },

   // Description: inserts favorite into database
   addFavorite: (ids, callback) => {
      const query = 
         `INSERT IGNORE INTO Document_User_Favorite 
            (document_id, user_id) 
            VALUES (?, ?)
         `;
      const values = [
         ids.document_id, 
         ids.user_id
      ];
      
      db.query(query, values, callback);
   },

   // Description: Removes favorite into database
   removeFavorite: (ids, callback) => {
      const query = 
         `DELETE FROM Document_User_Favorite 
            WHERE document_id = ? AND user_id = ?
         `;
      const values = [
         ids.document_id, 
         ids.user_id
      ];
      
      db.query(query, values, callback);
   },

   insertArchive: (document, callback) => {
      const query = 
         'INSERT IGNORE INTO Archive (name, location_id) ' + 
         'VALUES (?, (SELECT Location.id FROM Location WHERE Location.name = ?))';
      
      const values = [
         document.archive, 
         document.archive_location
      ];

      db.query(query, values, callback);
   }, 

   // Description: add a document to the database
   // Prereqs: Call insertLocation first for doc location and archive location
   insertDocument: (document, callback) => {
      const query = `
         INSERT INTO Document
            (title, uploader, date_of_publication, year, original_text, translated_text, upload_date,
               edit_date, language_id, document_location_id, archive_id, reference)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?,
               (SELECT MAX(Language.id) from Language WHERE Language.name = ?),
               (SELECT MAX(Location.id) from Location WHERE Location.name = ?),
               (SELECT MAX(Archive.id) from Archive
                  JOIN Location on Location.name = ?
                  WHERE Archive.name = ?
               ),
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
         document.document_location,
         document.archive_location,
         document.archive,
         document.reference
      ];

      db.query(query, values, callback);
   },

   insertNewUser: (userDetails, callback) => {
      const query = 
         'INSERT INTO User (username, role_id, uid) VALUES (?, 1, ?)';
      const values = [
         userDetails.username,
         userDetails.firebase_uid
      ]

      db.query(query, values, callback);
   },

   addFavorite: (uid, documentTitle, callback) => {
      const query = 
         'INSERT INTO Document_User_Favorite (' +
         '(SELECT id FROM User WHERE uid = ?),' +
         '(SELECT id FROM Document WHERE title = ?)';
      const values = [uid, documentTitle];

      db.query(query, values, callback);
   },

   editDocumentTitle: (document_id, title, callback) => {
      const query =
         `UPDATE Document 
            SET title = ? 
            WHERE id = ?`;
      values = [title, document_id];
      
      db.query(query, values, callback);
   },

   editDocumentDateOfPublication: (document_id, date, year, callback) => {
      const query = 
         `UPDATE Document 
            SET date_of_publication = ?,
                year = ?
            WHERE id = ?`;
      values = [date, year, document_id]

      db.query(query, values, callback);
   },

   editDocumentOriginalText: (document_id, text, callback) => {
      const query = 
         `UPDATE Document
            SET original_text = ?
            WHERE id = ?`;
      values = [text, document_id];

      db.query(query, values, callback);
   },

   editDocumentTranslatedText: (document_id, text, callback) => {
      const query = 
         `UPDATE Document
            SET translated_text = ?
            WHERE id = ?`;
      values = [text, document_id];

      db.query(query, values, callback);
   },

   editDocumentImage: (document_id, image_url, callback) => {
      const query =
         `UPDATE Document
            SET image = ?
            WHERE id = ?`;
      values = [image_url, document_id];

      db.query(query, values, callback);
   },

   editDocumentEditDate: (document_id, edit_date, callback) => {
      const query = 
         `UPDATE Document
            SET edit_date = ?
            WHERE id = ?`
      values = [edit_date, document_id];

      db.query(query, values, callback);
   },

   editDocumentLanguage: (document_id, language, callback) => {
      const query = 
         `UPDATE Document
            SET language_id = (SELECT id FROM Language WHERE name = ?)
            WHERE id = ?`
      values = [language, document_id];

      db.query(query, values, callback);
   },

   editDocumentLocation: (document_id, location_name, callback) => {
      const query = 
         `UPDATE Document
            SET document_location_id = (SELECT id FROM Location WHERE name = ?)
            WHERE id = ?`
      values = [location_name, document_id];

      db.query(query, values, callback);
   },

   editDocumentArchive: (document_id, archive, callback) => {
      const query = 
         `UPDATE Document
            SET archive_id = (SELECT id FROM Archive WHERE name = ?)
            WHERE id = ?`
      values = [archive, document_id];

      db.query(query, values, callback);
   },

   editDocumentReference: (document_id, reference, callback) => {
      const query =
         `UPDATE Document
            SET reference = ?
            WHERE id = ?`
      values = [reference, document_id];

      db.query(query, values, callback);
   },

   editDocumentVisibility: (document_id, value, callback) => {
      const query = 
         `UPDATE Document
            SET is_enabled = ?
            WHERE id = ?`
      values = [value, document_id];

      db.query(query, values, callback);
   }
}