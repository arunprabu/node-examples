var express = require('express');
var router = express.Router();

//connect to service
var contactService = require('../services/contactService');

router.get('/', function( req, res, next ){
  console.log(req.url);
  //send res in JSON
  res.json({ contactId: 1, firstName: 'Arun', phone: 15234524, email: 'arun@example.com'});

  //1. connect to db 
  //2. execute a query 
  //3. get the data from db 
  //4. send it back as resp 
});

router.post('/', function( req, res, next) {
  //1. receive the req body 
  console.log(req.body);
  
  //2. send the req body to service -- contactService.js
  contactService.createContact(req.body, function( err, data){
    //3. get the resp from service 
    if(!err){
       //4. send it back as JSON
      res.json(data);
    }else{
      res.json(err);
    }
  });
});

module.exports = router;