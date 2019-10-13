/* Kenneth Kim (heykjk@bu.edu)
   CS400 PS3: Simple Node App
 */

// An instance of express.Router
var express = require('express');
var router = express.Router();

var lengthArr = [];

// Route using the GET method that returns a fixed string
router.get('/index', function(req, res) {
  res.render('index', {string: 'Hello World'})
});
// Route using the POST method that gets its parameter from the request body
router.post('/length', function(req, res)
{
  var length = req.body;
  console.log(length);
  lengthArr.push(length);
  res.send("Length given!");
});

module.exports = router;
