var express = require('express');
var router = express.Router();

var favoritoController = require('../controllers/favoritoController');

router.get('/feedback/meus/:idUsuario', async (req, res) => {
    try {
        const idUsuario = req.params.idUsuario; // Supondo que a sessão esteja configurada corretamente
        const feedbacks = await favoritoController.exibirMeusFeedbacks(idUsuario);
        res.json(feedbacks);
    } catch (error) {
        console.error('Erro ao obter meus feedbacks:', error);
        res.status(500).json({ error: 'Erro ao obter meus feedbacks' });
    }
});

router.get('/favoritos', async (req, res) => {
    try {
        const idUsuario = req.params.idUsuario; // Supondo que a sessão esteja configurada corretamente
        const favoritos = await favoritoController.exibirFeedbacksFavoritos(idUsuario);
        res.json(favoritos);
    } catch (error) {
        console.error('Erro ao obter feedbacks favoritos:', error);
        res.status(500).json({ error: 'Erro ao obter feedbacks favoritos' });
    }
});

module.exports = router;