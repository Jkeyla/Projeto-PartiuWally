var express = require("express");
var router = express.Router();

var feedbackController = require("../controllers/feedbackController");

router.get("/listar", function (req, res) {
    feedbackController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    feedbackController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    feedbackController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    feedbackController.publicar(req, res);
});

router.post("/favoritar/:idFeedback", function (req, res) {
    feedbackController.favoritar(req, res);
});
// router.put("/editar/:idAviso", function (req, res) {
//     feedbackController.editar(req, res);
// });

// router.delete("/deletar/:idAviso", function (req, res) {
//     feedbackController.deletar(req, res);
// });

module.exports = router;