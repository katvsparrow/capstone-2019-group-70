const db = require('../db.js');

module.exports = (app) => {
    // Retrieve all possible filter values
    app.get('/api/filter/getFilterValues', function(req, res) {
        db.getAlgoliaData((err, data) => {
            if (err) {
                console.log(error);
                return res.sendStatus(500);
            }

            return res.status(200).send(data);
        });
    })
}