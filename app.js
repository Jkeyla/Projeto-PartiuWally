// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
//
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT; // Fallback to 3000 if APP_PORT is not defined
var HOST_APP = process.env.APP_HOST; // Fallback to 'localhost' if APP_HOST is not defined

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var feedbackRouter = require("./src/routes/feedback");
var dashboardRouter = require("./src/routes/dashboard")
var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquario");
var empresasRouter = require("./src/routes/empresas");
var cruzadaRouter = require("./src/routes/cruzada");
var favoritoRouter = require("./src/routes/favorito");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/feedback", feedbackRouter);
app.use("/dashboard", dashboardRouter);
app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/empresas", empresasRouter);
app.use("/cruzada", cruzadaRouter);
app.use("/favorito", favoritoRouter);

app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##     ##     ##       ##     ##    ##             
    ##   ##    ####    ##       ##      ##  ##           
    ##   ##   ##  ##   ##       ##       #  #          
    ## # ##   ######   ##       ##        ##    
    #######   ##  ##   ##       ##        ##      
    ### ###   ##  ##   ##       ##        ##  
    ##   ##   ##  ##   #######  #######   ##    
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${ambiente_processo}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});
