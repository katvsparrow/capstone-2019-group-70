var router = require('express').Router();
var db = require('../../db.js');

router.post('/createNewUser', function(req, res, next){
    let fields = req.body;

    let userDetails = {
        'username': fields.username,
        'firebase_uid': fields.user_id,  
    };

    db.insertNewUser(userDetails, (err) =>{
        if(err) next(err);
        return res.status(200).send('User Created');
    });
});


router.post('/addFavorite', function(req, res, next) {
    let fields = req.body;

    let details = {
        'user_id': fields.user_id,
        'document_id': fields.document_id,  
    };

    db.addFavorite(details, (err) => {
        if(err) next(err);
        return res.status(200).send('Add to favorites');
    });
});

router.post('/removeFavorite', function(req, res, next) {
    let fields = req.body;

    let details = {
        'user_id': fields.user_id,
        'document_id': fields.document_id,  
    };

    db.removeFavorite(details, (err) => {
        if(err) next(err);
        return res.status(200).send('Removed from favorites');
    });
});


router.get('/getUserInformation/:uid', function(req, res, next) {
    const uid = req.params.uid;

    db.getUserInformation(uid, (err, user) =>{
        if(err) next(err);
        return res.status(200).send(user);
    });
});


module.exports = router;
