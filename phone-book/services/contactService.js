// 2. Establish handshake with DB (from services)
var Contact = require("../models/contact");

//creating contact
exports.createContact = function (contactData, callback) {
  console.log(contactData);

  // 3. Construct our own query to Create Contact
  var contactDao = new Contact(contactData);
  contactDao.save(function (err, savedContact) {
    // 4. Get status from Database
    if (!err) {
      console.log(`Contact registered successfully with contactId:${savedContact.contactId}`);
    }
    //  5. Channelise it to the router
    callback(err, savedContact);
  });
};

//getall contacts
exports.getContacts = function (callback) {

  Contact.find({}, function (err, contactList) {
    if (!err) {
      console.log("Fetched all contacts", contactList)
    }
    callback(err, contactList);
  });
}

//get Contact By id
exports.getContactById = function (_contactId, _queryParams, callback) {
  console.log(_contactId);
  //Checking both query params and URL params.
  if (_queryParams && _queryParams.active) { //http://localhost:3000/api/contacts/1?active=true
    Contact.findOne({ contactId: _contactId, isActive: _queryParams.active }, function (err, contactData) {
      if (!err) {
        console.log(contactData);
      }
      if(contactData){
        callback(err, contactData);  
      }
      else{
        //Custom response
        callback(err, {msg: 'This user is not active.'});
      }
      
    });
  }
  else { //http://localhost:3000/api/contacts/1
    Contact.findOne({ contactId: _contactId }, function (err, contactData) {
      if (!err) {
        console.log(contactData);
      }
      callback(err, contactData);
    });
  }
}

//Query paramteres
exports.getContactsByStatus = function (_isActive, callback) {
  console.log(_isActive);

  Contact.find({ isActive: _isActive }, function (err, contactList) {
    if (!err) {
      console.log("Fetched Active Contacts", contactList)
    }
    callback(err, contactList);
  });
}

exports.updateContact = function( _contactId, _newContactData, callback ) {
  console.log(_contactId);
  console.log(_newContactData);

  //consruct the query   //exec the query 
  Contact.updateOne({ contactId: _contactId }, _newContactData, function(err, data){

    //return the resp to routes
    if (!err) {
      console.log("Updated Contact ");
    }

    if(data && data.ok == 1){
      callback(err, {msg: "Contact has been updated"});
    }else{
      callback(err, {msg: "Unable to update"});
    }
  });
}

exports.deleteContact = function(_contactId, callback) {
  console.log(_contactId);
  //hard delete 
  Contact.remove({ contactId: _contactId}, function(err, data){
    if (!err) {
      console.log("Deleted Contact", data)
    }
    callback(err, data);
  });


  //soft delete 
  //update the contactData with {status: INACTIVE }
}