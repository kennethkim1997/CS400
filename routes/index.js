/* Kenneth Kim (heykjk@bu.edu)
   CS400 PS6: Mongo
 */
const weatherConfig = require('../config/weather');

// An instance of express.Router
let express = require('express');
let router = express.Router();

let url = weatherConfig.URL;
let appId = 'APPID='+ weatherConfig.APP_ID;

let request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {body: '', forecast: ''});
});

router.post('/weather', function(req, res, next) {
  let city = req.body.city;
  let country = req.body.sys.country;
  url = url+city+","+country+"&"+appId;

  // Make request to Open Weather Map API
  request(url, function(error, response, body) {
    body = JSON.parse(body);
    if(error && response.statusCode !== 200) {
      throw error;
    }
    let country = (body.sys.country) ? body.sys.country : '' ;
    let forecast = "For "+city+", "+country;

    let MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb://localhost:3000,weatherDb", function (err, db) {
      if (err) throw err;
      let dbo = db.db("weatherDb");
      dbo.createCollection("cities", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
      let query = { body: body, forecast: forecast};
      if (query in "cities") {
        dbo.collection("cities").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      }
      else {
        dbo.collection("cities").insertOne(query, function(err, res) {
          res.render('index', {body: body, forecast: forecast});
          db.close();
        });
      }
      });
  });

});

module.exports = router;
