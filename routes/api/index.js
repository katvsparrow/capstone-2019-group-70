var router = require('express').Router();

// Include all api routes 
router.use('/users', require('./users'));
router.use('/documents', require('./documents'));

// Error handler
router.use(function(err, req, res, next) {
    return next(err);
});

module.exports = router;