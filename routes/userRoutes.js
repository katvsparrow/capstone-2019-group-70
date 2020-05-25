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