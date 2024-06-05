var express = require('express');
var router = express.Router();

var favoritoController = require('../controllers/favoritoController');

router.get('/feadback/:idUsuario', async (req, res) => {
    favoritoController.exibirMeusFeedbacks(req, res);
});

router.get('/:idUsuario', async (req, res) => {
    favoritoController.exibirFeedbacksFavoritos(req, res);
});

module.exports = router;