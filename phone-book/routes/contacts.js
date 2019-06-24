var express = require('express');
var router = express.Router();

var contactService = require('../services/contactService');



//Get all contacts and get all contacts by Active Status
router.get('/', function (req, res, next) {
  console.log(req.url);
  //If req.query exists then call contactService.getContactByStatus
  if (req.query && req.query.active) {
    contactService.getContactsByStatus(req.query.active, function (err, data) {
      if (!err) {
        //4. send it back as JSON
        res.json(data);
      } else {
        res.json(err);
      }
    })
  }
  else {
    //Else following
    contactService.getContacts(function (err, data) {
      if (!err) {
        //4. send it back as JSON
        res.json(data);
      } else {
        res.json(err);
      }
    })
  }
});

//Create a contact
router.post('/', function (req, res, next) {
  //1. receive the req body 
  console.log(req.body);

  //2. send the req body to service -- contactService.js
  contactService.createContact(req.body, function (err, data) {
    //3. get the resp from service 
    if (!err) {
      //4. send it back as JSON
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

//some other static url  -- this will not clash with router.get('/:contactId',.... 
router.get('/search',  function (req, res, next) {
  console.log(req.params);
  console.log(req.query);
});

//Get contact byId
router.get('/:contactId', function (req, res, next) {
  console.log(req.params);
  console.log(req.query);
  
  contactService.getContactById(req.params.contactId, req.query, function (err, contactData) {
    //3. get the resp from service 
    if (!err) {
      //4. send it back as JSON
      res.json(contactData);
    } else {
      res.json(err);
    }
  })
});

//Update Contact
router.put('/:contactId', function(req, res, next){
  console.log(req);

  contactService.updateContact(req.params.contactId, req.body, function( err, data) {
    //3. get the resp from service 
    if (!err) {
      //4. send it back as JSON 
      res.json(data);
      
      //ToDo: 
      //send a call to getContactById with contactId being param, in case front end requires updated data also 
      
    } else {
      res.json(err);
    }
  });

});

//Delete contact
router.delete('/:contactId', function(req, res, next){
  console.log(req);

  contactService.deleteContact(req.params.contactId, function(err, data){
    //3. get the resp from service 
    if (!err) {
      //4. send it back as JSON
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

module.exports = router;