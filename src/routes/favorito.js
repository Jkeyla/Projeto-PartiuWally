var express = require('express');
var router = express.Router();

var favoritoController = require('../controllers/favoritoController');

router.get('/feadback/:idUsuario', async (req, res) => {
    favoritoController.exibirMeusFeedbacks(req, res);
});

router.get('/:idUsuario', async (req, res) => {
    favoritoController.exibirFeedbacksFavoritos(req, res);
});

router.get("/verificar/:idFeedback/:idUsuario", function (req, res) {
    favoritoController.verificar(req, res);
});

router.post("/favoritar", function (req, res) {
    favoritoController.favoritar(req, res);
});


router.get("/totalFeed/:idUsuario", function (req, res) {
    console.log('na rota',idUsuario)
    favoritoController.buscarTotalFeed(req, res);
});

// router.get("/totalFav/:idUsuario", function (req, res) {
//     favoritoController.buscarTotalFav(req, res);
// });

module.exports = router;
