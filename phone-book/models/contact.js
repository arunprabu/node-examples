var mongoose = require('./mongooseConnection'); //importing connection config
var autoIncrement = require('mongoose-auto-increment'); //for auto incrementing during create
// schema - structure of the table 
//contactId: number, fullName: string, email: string, phone: string

var Schema = mongoose.Schema;

//schema  for collection Contact
var Contact = new Schema({
  contactId: {
    type: Number,
    unique: true  // primary key
  },
  fullName: String, 
  email: String, 
  phone: String,
  createdBy : String,
  createdOn : {type: Date, default: Date.now},
  updatedBy : String,
  updatedOn : {type: Date, default: Date.now}
});

Contact.plugin(autoIncrement.plugin, {model: 'Contact', field: 'contactId', startAt: 1});
module.exports = mongoose.model('Contact', Contact);