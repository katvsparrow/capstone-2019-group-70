const db = require('../db.js');

extractYear = (str) => {
    try {
        return str.split('-')[0];
    } catch {
        return null; 
    }
}

module.exports = (app) => {
    // Retrieve a document that matches a given document ID
    app.get('/api/documents/getDocumentByID/:id', async (req, res) => {
        const id = req.params.id;
        
        db.getDocumentByID(id, (err, document) => {
            if (err) {
                throw err;
            }

            return res.status(200).send(document);
        });
    });

    // Retrieve all documents that match a given tag
    app.get('/api/documents/getDocumentByTag/:tag', async (req, res) => {
        const tag = req.params.tag;

        db.getDocumentByTag(tag, (err, documents) => {
            if (err) {
                throw err;
            }

            return res.status(200).send(documents);
        });
    });

    // Retrieve all documents submitted by a specific user
    app.get('/api/documents/getDocumentByUsername/:username', async(req, res) => {
        const username = req.params.username;

        db.getDocumentByUsername(username, (err, documents) => {
            if (err) {
                throw err;
            }

            return res.status(200).send(documents);
        });
    });

    // Retrieve a specified number of random documents for the home page display
    app.get('/api/documents/getRandomDocuments/:count', async(req, res) => {
        const count = req.params.count;

        db.getDocuments((err, documents) => {
            if (err) {
                throw err;
            }

            // Randomize selection by shuffling the array and returning the first n values from the shuffled array 
            let shuffled = documents.sort(() => 0.5 - Math.random());
            if (count <= shuffled.length)
                return res.status(200).send(shuffled.slice(0, count));
            else if (count > shuffled.length)
                return res.status(200).send(shuffled);
        });
    });

    app.post('/api/documents/postNewDocument', function(req, res)  {
        let fields = req.body;
        let request_time = new Date().toISOString().slice(0, 19).replace('T', ' ');

        let document = {
            'title': fields.title,
            'uploader': 'Dr. Rena Lauer',
            'date_of_publication': fields.date,
            'year': extractYear(fields.date),
            'document_city': fields.document_city, 
            'document_country': fields.document_country,
            'original_text': fields.original_text,
            'translated_text': fields.translated_text,
            'language': fields.language,
            'archive':  fields.archive,
            'archive_city': fields.archive_city, 
            'archive_country': fields.archive_country,
            'reference': fields.reference,
            'upload_date': request_time,
            'edit_date': request_time,
        }

        db.insertLocation(document.document_city, document.document_country, err => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
        });

        db.insertLocation(document.archive_city, document.archive_country, err => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
        });

        db.insertArchive(document, err =>{
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
        });

        db.insertDocument(document, err => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }

            return res.sendStatus(200);
        });
    });

    app.post('/api/markFavoriteDocument', function(req, res) {
        let documentTitle = req.body.title;
        let uid = req.body.uid;

        db.addFavorite(uid, documentTitle, err => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }

            return res.sendStatus(200);
        });
    });
}