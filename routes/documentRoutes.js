const db = require('../db.js');

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
        let data = req.bpdy;
        console.log(data);

        // Find id for document location 
        db.getLocationID(data.location.city, data.location.country, (err, id) => {
            if(err) {
                throw err; 
            }

            console.log(id);
        });


        // Find id for archive location 
        
        
        
        
        insert_object = {
            'title': data.title,
            'uploader': 'Dr. Rena Lauer',
            'date_of_publication': data.date_of_publication,
            'year': '',
            'original_text': data.original_text,
            'transcribed_text': data.transcribed_text,
            'translated_text': data.translated_text,
            'image': '',
            'upload_date': '',
            'edit_date': '', 
            'lanugage_id': '',
            'document_location_id': '', 
            'archive_location_id': '',
            'reference': data.reference
        }

        res.send('HELLO');
    });
}