var express = require('express');
var router = express.Router();

var favoritoController = require('../controllers/favoritoController');

// router.get('/:idUsuario', async (req, res) => {
//         favoritoController.exibirMeusFeedbacks(req,);
//         res.json(feedbacks);
//     } catch (error) {
//         console.error('Erro ao obter meus feedbacks:', error);
//         res.status(500).json({ error: 'Erro ao obter meus feedbacks' });
//     }
// });

router.get('/:idUsuario', async (req, res) => {
    favoritoController.exibirFeedbacksFavoritos(req, res);
});

module.exports = router;