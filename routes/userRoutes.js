const db = require('../db.js');

module.exports = (app) => {

    // Create a new user 
    app.post('/api/users/createNewUser', function(req, res) {
        console.log(req.params);
        res.send('HELLO');
        
        /* 
        db.insertNewUser(userDetails, (err) => {
            if(err) {
                throw err;
            }
           
            return res.status(200).send('Good.');
        });*/
    });
}