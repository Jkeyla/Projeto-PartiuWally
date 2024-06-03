const favoritoModel = require('../models/favoritoModel');

async function exibirMeusFeedbacks(idUsuario) {
    const feedbacks = await favoritoModel.obterMeusFeedbacks(idUsuario);
    if (feedbacks) {
        return feedbacks;
    } else {
        const error = new Error('Não foi possível obter os feedbacks do usuário');
        console.error('Erro ao obter meus feedbacks no controller:', error);
        throw error;
    }
}

async function exibirFeedbacksFavoritos(idUsuario) {
    const favoritos = await favoritoModel.obterFeedbacksFavoritos(idUsuario);
    if (favoritos) {
        return favoritos;
    } else {
        const error = new Error('Não foi possível obter os feedbacks favoritos do usuário');
        console.error('Erro ao obter feedbacks favoritos no controller:', error);
        throw error;
    }
}

module.exports = {
    exibirMeusFeedbacks,
    exibirFeedbacksFavoritos
};
