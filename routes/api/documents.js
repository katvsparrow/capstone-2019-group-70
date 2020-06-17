var router = require('express').Router();
var db = require('../../db.js');

extractYear = (str) => {
    try {
        return str.split('-')[0];
    } catch {
        return null; 
    }
}

router.get('/algoliaDocuments', function(req, res, next){
    db.getAlgoliaData((err, data) =>{
        if(err) next(err);
        return res.status(200).send(data);
    });
});

router.get('/getDocumentByID/:id', function(req, res, next){
    const id = req.params.id;

    db.getDocumentByID(id, (err, data) =>{
        if(err) next(err);
        return res.status(200).send(data);
    });
});

router.get('/getRandomDocuments/:count', function(req, res, next){
    const count = req.params.count;

    db.getDocuments((err, data) =>{
        if(err) next(err);

        // Randomize selection by shuffling the array and returning the first n values from the shuffled array 
        let shuffled = data.sort(() => 0.5 - Math.random());
        if (count <= shuffled.length)
            return res.status(200).send(shuffled.slice(0, count));
        else if (count > shuffled.length)
            return res.status(200).send(shuffled);
    });
});

router.post('/postNewDocument', function(req, res, next){
    let fields = req.body;
    console.log(fields);
    let request_time = new Date().toISOString().slice(0, 19).replace('T', ' ');

    // Package request body
    let document = {
        'title': fields.title,
        'uploader': 'Dr. Rena Lauer',
        'date_of_publication': fields.date,
        'year': extractYear(fields.date),
        'document_location': fields.document_location, 
        'original_text': fields.original_text,
        'translated_text': fields.translated_text,
        'language': fields.language,
        'archive':  fields.archive,
        'archive_location': fields.archive_location,
        'reference': fields.reference,
        'upload_date': request_time,
        'edit_date': request_time,
    };

    // Insert two locations and create archive entity
    db.insertLocation(document.document_location, err => { if (err) next(err); });
    db.insertLocation(document.archive_location, err => { if (err) next(err); });
    db.insertArchive(document, err => { if (err) next(err); });
    

    db.insertDocument(document, (err, data) =>{
        if(err) next(err);
        return res.status(200).send('Document Posted');
    });
});

module.exports = router;
