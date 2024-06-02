var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    select u.idUsuario,
    u.nome,
    u.email,
    u.senha,
    u.dtNasc, 
    f.idFeedback,
    f.titulo,
    f.descricao,
    f.fkUsuario,
    f.dataHora
    from usuario u JOIN feedback f ON u.idUsuario = f.fkUsuario
    order by idFeedback desc;     
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(descricao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
    select u.idUsuario,
    u.nome,
    u.email,
    u.senha,
    u.dtNasc, 
    f.idFeedback,
    f.titulo,
    f.descricao,
    f.fkUsuario ,
    f.dataHora
    from usuario u JOIN feedback f ON idUsuario = fkUsuario where descricao like "%${descricao})%";
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
    select u.idUsuario,
    u.nome,
    u.email,
    u.senha,
    u.dtNasc, 
    f.idFeedback,
    f.titulo,
    f.descricao,
    f.fkUsuario,
    f.dataHora
    from usuario u JOIN feedback f ON idUsuario = fkUsuario where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(idUsuario, titulo, descricao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ",idUsuario, titulo, descricao );
    var instrucaoSql = `
    INSERT INTO feedback (fkUsuario, titulo, descricao) VALUES (${idUsuario}, '${titulo}', '${descricao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function editar(novaDescricao, idAviso) {
//     console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAviso);
//     var instrucaoSql = `
//         UPDATE aviso SET descricao = '${novaDescricao}' WHERE id = ${idAviso};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function deletar(idAviso) {
//     console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAviso);
//     var instrucaoSql = `
//         DELETE FROM aviso WHERE id = ${idAviso};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar
    // editar,
    // deletar
}
