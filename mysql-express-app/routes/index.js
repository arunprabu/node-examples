var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'demo-app-db'
});
 
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  connection.query('select * from users', function (error, results, fields) {
    if (error) throw error;
    console.log('The result is: ', results);
  });
  
  connection.end();
});


router.get('/contacts', function(req, res, next) {
  
})

module.exports = router;
