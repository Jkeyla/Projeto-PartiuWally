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

async function exibirFeedbacksFavoritos(req, res) {
    const idUsuario = req.params.idUsuario
    favoritoModel.exibirFeedbacksFavoritos(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

module.exports = {
    exibirMeusFeedbacks,
    exibirFeedbacksFavoritos
};
