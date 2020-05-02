const express = require('express');
const app = express();
const connexionRoutes = express.Router();
// Require Connexion model in our routes module

let Connexion = require('../models/connexion');
// Defined store route
connexionRoutes.route('/add').post(function (req, res) {
  console.log(req.body);
  let connexion = new Connexion(req.body);
  connexion.save()
    .then(connexion => {
      res.status(200).json({
        'Connexion': 'Connexion has been added successfully '
      });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
// Defined get data(index or listing) route
connexionRoutes.route('/').get(function (req, res) {
  Connexion.find(function (err, connexions) {
    if (err) {
      console.log(err);

    } else {
      res.json(connexions);
    }
  });
});
module.exports = connexionRoutes;
