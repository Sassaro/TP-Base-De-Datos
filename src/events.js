const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  router.get('/archivos', function (req, res, next) {
    db.query('SELECT * FROM archivo',
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.get('/comentarios', function (req, res, next) {
    db.query('SELECT * FROM comentario',
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.get('/replicas', function (req, res, next) {
    db.query('SELECT * FROM replica',
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;