var database = require("../database/config");

function exibirMeusFeedbacks(idUsuario) {
    var instrucaoSql = `select u.idUsuario,
    u.nome,
    u.email,
    u.senha,
    f.idFeedback,
    f.titulo,
    f.descricao
    from usuario u JOIN feedback f ON idUsuario = fkUsuario where fkUsuario = ${idUsuario};`;
    return database.executar(instrucaoSql);
}

function exibirFeedbacksFavoritos(idUsuario) {
    var instrucaoSql = `
    select idUsuario, nome, idFeedback, favorito.dataHora from favorito JOIN usuario ON fkUsuario = idUsuario
	JOIN feedback ON fkFeedback = idFeedback where idUsuario = ${idUsuario};`;
    return database.executar(instrucaoSql);
}

module.exports = {
    exibirMeusFeedbacks,
    exibirFeedbacksFavoritos
};