const express = require('express');
const app = express();
const contactRoutes = express.Router();
// Require contact model in our routes module

let Contact = require('../models/Contact');
// Defined store route
contactRoutes.route('/add').post(function (req, res) {
  console.log(req.body);
  let contact = new Contact(req.body);
  contact.save()
    .then(contact => {
      res.status(200).json({
        'Contact': 'Contact has been added successfully '
      });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
// Defined get data(index or listing) route
contactRoutes.route('/').get(function (req, res) {
  Contact.find(function (err, contacts) {
    if (err) {
      console.log(err);

    } else {
      res.json(contacts);
    }
  });
});
// Defined edit route
contactRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Contact.findById(id, function (err, contact) {
    res.json(contact);
  });
});
// Defined update route
contactRoutes.route('/update/:id').post(function (req, res) {
  contact.findById(req.params.id, function (err, contact) {
    if (!contact)
      res.status(404).send("Record not found");
    else {
      contact.ContactName = req.body.Name;
      contact.ContactMail = req.body.Mail;
      contact.ContactContact = req.body.Contact;
      contact.save().then(contact => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
// Defined delete | remove | destroy route
contactRoutes.route('/delete/:id').get(function (req, res) {
  Contact.findByIdAndRemove({
    _id: req.params.id
  }, function (err, contact) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = contactRoutes;
