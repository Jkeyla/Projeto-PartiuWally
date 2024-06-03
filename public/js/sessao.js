// session.js

function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function publicarFeed() {
    const container = document.getElementById('container');
    container.innerHTML = `
        <div class="conteudoPublicar">
            <h1>Publicar um feedback</h1>
            <div class="div-form">
                <form id="form_postagem" method="post" onsubmit="return publicar()">
                    <label>
                        Título:
                        <br>
                        <input name="titulo" id="titulo" maxlength="100" type="text">
                    </label>
                    <br>
                    <br>
                    <label>
                        Descrição (máximo de 250 caracteres):
                        <br>
                        <textarea name="descricao" id="descricao" maxlength="250" rows="5"></textarea>
                    </label>
                    <br>
                    <br>
                    <div id="enviar">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>`;
}

function publicar() {
    // Implementação da função de publicação
    console.log("Publicar feedback");
    return false; // Retorne false para evitar o envio do formulário durante o teste
}
