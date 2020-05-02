const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Contact
let Contact = new Schema({
  Name: {
    type: String
  },
  Mail: {
    type: String
  },
  Contact: {
    type: String
  },
}, {
  collection: 'Contact'
});
module.exports = mongoose.model('Contact', Contact);
