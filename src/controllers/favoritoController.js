const favoritoModel = require('../models/favoritoModel');


function exibirMeusFeedbacks(req, res) {
    const limite_linhas = 5;

    const idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    favoritoModel.exibirMeusFeedbacks(idUsuario, limite_linhas)
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

function exibirFeedbacksFavoritos(req, res) {

    const limite_linhas = 5;

    const idUsuario = req.params.idUsuario
    favoritoModel.exibirFeedbacksFavoritos(idUsuario, limite_linhas)
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

function verificar(req, res) {

    const idUsuario = req.params.idUsuario
    const idFeedback = req.params.idFeedback

    favoritoModel.verificar(idUsuario, idFeedback)
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


function favoritar(req, res) {

    // const limite_linhas = 5;

    const idUsuario = req.body.idUsuario
    const idFeed = req.body.idFeed;
    const favoritadoBanco = req.body.favoritadoBanco;

    favoritoModel.verificar(idUsuario, idFeed)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    favoritoModel.atualizar(favoritadoBanco, idUsuario, idFeed).then(
                        function (resultadoAtualizar) {
                            res.json(resultadoAtualizar);
                        }
                    )
                } else if (resultado.length == 0) {
                    favoritoModel.inserir(idUsuario, idFeed).then(
                        function (resultadoInserir) {
                            res.json(resultadoInserir);
                        }
                    )
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

function buscarTotalFeed(req, res) {
    const idUsuario = req.params.idUsuario
    
    console.log(`id do user:`, idUsuario);

    favoritoModel.buscarTotalFeed(idUsuario)
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

function buscarTotalFav(req, res) {
    const idUsuario = req.params.idUsuario
    
    console.log(`id do userFav:`, idUsuario);

    favoritoModel.buscarTotalFav(idUsuario)
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
    exibirFeedbacksFavoritos,
    verificar,
    favoritar,
    buscarTotalFeed,
    buscarTotalFav
};
