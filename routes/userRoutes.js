const db = require('../db.js');

module.exports = (app) => {

    // Create a new user 
    app.post('/api/users/createNewUser', function(req, res) {
        let fields = req.body;

        let userDetails = {
            'username': fields.username,
            'firebase_uid': fields.user_id,  
        };

        db.insertNewUser(userDetails, (err) => {
            if(err) {    
                console.log(err);
                res.sendStatus(500);
                return;
            }

            return res.status(200).send('User created');
        });
    });

    // Add  Favorite 
    app.post('/api/users/addFavorite', function(req, res) {
        let fields = req.body;

        let details = {
            'user_id': fields.user_id,
            'document_id': fields.document_id,  
        };

        db.addFavorite(details, (err) => {
            if(err) {    
                console.log(err);
                res.sendStatus(500);
                return;
            }

            console.log('Finished inserting: ' + JSON.stringify(details));

            return res.status(200).send('Add to favorites');
        });
    });

    // Remove Favorite 
    app.post('/api/users/removeFavorite', function(req, res) {
        let fields = req.body;

        let details = {
            'user_id': fields.user_id,
            'document_id': fields.document_id,  
        };

        db.removeFavorite(details, (err) => {
            if(err) {    
                console.log(err);
                res.sendStatus(500);
                return;
            }

            console.log('Finished deleting: ' + JSON.stringify(details));

            return res.status(200).send('Removed from favorites');
        });
    });

    app.get('/api/users/getUserInformation/:uid', async (req, res) => {
        const uid = req.params.uid;
        
        db.getUserInformation(uid, (err, user) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }

            return res.status(200).send(user);
        });
    });

}