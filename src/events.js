const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';
//Get todos los archivos
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
//Get los comentarios de un archivo
  router.get('/comentarios/:id', function (req, res, next) {
    db.query(
      'SELECT * from comentario where comentario.Archivo_idArchivo = ?',
      [req.params.id],
      (error,results) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });
//Get las replicas de un comentario
  router.get('/replicas/:id', function (req, res, next) {
    db.query('SELECT * from replica where replica.Comentario_idComentario = ?',
      [req.params.id],
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
//Get las replicas de una replica
  router.get('/replicasDeReplicas/:id', function (req, res, next) {
    db.query('SELECT * from replica where replica.Replica_idReplica = ?',
      [req.params.id],
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
//Post de una nueva replica, agrega una replica a la base de datos
  router.post('/agregarReplica', (req, res, next) => {
    db.query(
      'INSERT INTO replica (Detalle, Apodo, Replica_idReplica, Comentario_idComentario) VALUES (?,?,?,?)',
      [req.body.Detalle, req.body.Apodo, req.body.Replica_idReplica,req.body.Comentario_idComentario ],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;