var feedbackModel = require("../models/feedbackModel");

function buscarFeedback(req, res) {
  var idUsuario = req.params.idUsuario;

  feedbackModel.buscarFeedback(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    res.status(500).json(erro.sqlMessage);
  });
}

function cadastrar(req, res) {
  var assunto = req.body.assunto;
  var idUsuario = req.body.idUsuario;

  if (assunto == undefined) {
    res.status(400).send("assunto está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    feedbackModel.cadastrar(assunto, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarFeedback,
  cadastrar
}