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

  //Get de reporteria
  router.get('/reporteria', function (req, res, next) {
    db.query(queryReporteria(),
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
      'INSERT INTO replica (Detalle, Apodo, Replica_idReplica, Comentario_idComentario) VALUES (?,?,?,?);',
      [ req.body.Detalle, req.body.Apodo, req.body.Replica_idReplica,req.body.Comentario_idComentario ],
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

//Patch de la replica, actualiza una replica
  router.patch('/actualizarReplica/:id', function (req, res, next) {
    db.query(
      'UPDATE replica SET Detalle=?, Apodo=? WHERE replica.idReplica = ?',
      [ req.body.Detalle, req.body.Apodo, req.params.id ],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  //quita una replica de la base de datos
  router.delete('/quitarReplica/:id', (req, res, next) => {
    db.query(
      'DELETE from replica where replica.idReplica = ?',
      [req.params.id],
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

  //quita una replica de la base de datos
  router.get('/ultimoId', (req, res, next) => {
    db.query(
      queryId,
      (error, results) => {
        if (error) {
          console.error(error);
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


const queryReporteria = () =>{
  return "SELECT A.Replica_idReplica, count(*) cantidad_replicas, B.Detalle, B.Apodo, B.Replica_idReplica, B.Comentario_idComentario, C.Apodo_creador, C.Descripcion, D.idArchivo, D.Titulo from replica as A inner join replica as B on A.Replica_idReplica = B.idReplica inner join comentario as C on B.Comentario_idComentario = C.idComentario inner join archivo as D on C.Archivo_idArchivo = D.idArchivo group by A.Replica_idReplica order by cantidad_replicas desc limit 5;"
}

const queryId = "SELECT LAST_INSERT_ID() as LastID"
