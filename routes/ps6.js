// An instance of express.Router
let express = require('express');
let router = express.Router();

router.get('/ps6', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
