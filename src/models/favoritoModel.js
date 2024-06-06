const { favoritar } = require("../controllers/favoritoController");
var database = require("../database/config");

function exibirMeusFeedbacks(idUsuario, limite_linhas) {
    var instrucaoSql = `
    SELECT DATE_FORMAT(f.dataHora, '%d/%m/%Y') as dataHora_formatada, 
       COUNT(*) as qtdFeadbacks 
FROM usuario 
JOIN feedback f ON idUsuario = fkUsuario 
WHERE fkUsuario = ${idUsuario}
GROUP BY DATE_FORMAT(f.dataHora, '%d/%m/%Y') 
ORDER BY idUsuario DESC LIMIT ${limite_linhas};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirFeedbacksFavoritos(idUsuario, limite_linhas) {
    var instrucaoSql = `
    SELECT 
    DATE_FORMAT(f.dataHora, '%d/%m/%Y') AS dataFormatada,
    SUM(f.favoritado) AS qtd 
FROM 
    favorito f
JOIN 
    usuario ON f.fkUsuario = usuario.idUsuario
JOIN 
    feedback ON f.fkFeedback = feedback.idFeedback 
WHERE 
    usuario.idUsuario = ${idUsuario}
GROUP BY 
    dataFormatada
ORDER BY 
    dataFormatada desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificar(idUsuario, idFeedback) {
    var instrucaoSql = `
    SELECT 
    *
FROM 
    favorito f
WHERE 
    fkUsuario = ${idUsuario} AND fkFeedback = ${idFeedback}
    ; `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(favoritado, idUsuario, idFeedback) {
    var instrucaoSql = `
    UPDATE favorito f SET favoritado = ${favoritado}, dataHora = now() WHERE fkUsuario = ${idUsuario} 
        AND fkFeedback = ${idFeedback}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserir(idUsuario, idFeedback) {
    var instrucaoSql = `
    insert into favorito (fkUsuario, fkFeedback, favoritado)values
 (${idUsuario}, ${idFeedback}, 1)`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    exibirMeusFeedbacks,
    exibirFeedbacksFavoritos,
    verificar,
    inserir,
    atualizar
}; 