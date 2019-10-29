/* Kenneth Kim (heykjk@bu.edu)
   CS400 PS4: Single API
 */
const weatherConfig = require('../config/weather');

// An instance of express.Router
var express = require('express');
var router = express.Router();

let url = weatherConfig.URL;
let appId = 'APPID='+ weatherConfig.APP_ID;

let request = require('request');

/* GET home page. */
// Assign empty body and forecast variables to the template
router.get('/ps4', function(req, res, next) {
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

    res.render('index', {body : body, forecast: forecast});

  });

});

module.exports = router;
