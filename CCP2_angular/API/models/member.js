const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Member
let Member = new Schema({
  MemberName: {
    type: String
  },
  Pseudo: {
    type: String

  },
  Password: {
    type: String

  },
  MemberAge: {
    type: Number
  },
  MemberMail: {
    type: String
  }
}, {
  collection: 'Member'
});
module.exports = mongoose.model('Member', Member);
