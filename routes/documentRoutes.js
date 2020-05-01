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
}