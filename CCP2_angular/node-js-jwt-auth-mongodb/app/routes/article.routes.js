const {
  authJwt
} = require("../middlewares");
const controller = require("../controllers/user.controller");
const art = require('../models/articles.model');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get('/api/test/articles/all', (req, res) => {
    art.find().then((ret) => {
      if (ret) {
        res.json(ret);
      } else {
        res.status(400).send("No articles found");
      }
    }).catch((err) => {
      console.log(err);
    });
  });

  app.get('/api/test/articles/delete/:id', (req, res) => {
    art.deleteOne({
      _id: req.params.id
    }).then(() => {
      res.json('Article deleted !');
    }).catch((err) => {
      throw err;
    });
  });

  app.get('/api/test/articles/one/:id', (req, res) => {
    art.findOne({
      _id: req.params.id
    }).then((ret) => {
      res.json(ret);
    }).catch((err) => {
      throw err;
    });
  });

  app.post('/api/test/articles/edit/:id', (req, res) => {
    art.findOne({
      _id: req.params.id
    }, (err, ret) => {
      if (err) throw err;

      ret.titre = req.body.titre;
      ret.description = req.body.description;
      ret.contenu = req.body.contenu;

      ret.save().then(() => {
        res.json('article updated !');
      }).catch(() => {
        res.status(400).send('Faile dupdate ..');
      });
    }).catch((err) => {
      throw err;
    });
  })
  app.post('/api/test/articles/add', (req, res) => {
    let nart = new art(req.body);
    nart.save().then(() => {
      console.log('Article Added');
    }).catch((err) => {
      console.log(req.body);
      throw err;
    });
  });
};
