//main business logic can reside here
//Connect to Model
var Contact = require('../models/contact');
//create contact
exports.createContact = function( contactData, callback ) {
    console.log(contactData); //1. get the data from routes 
    
    //construct query 
    var contactDao = new Contact(contactData);
    contactDao.save(function(err, savedContact){
      if (!err) {
        console.log(`Contact registered successfully with contactId:${savedContact.contactId}`);
      }
      //  sending it back to routes
      callback(err, savedContact);
    });
}
