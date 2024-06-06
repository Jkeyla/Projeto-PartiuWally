var express = require("express");
var router = express.Router();

var feedbackController = require("../controllers/feedbackController");

router.get("/listar", function (req, res) {
    feedbackController.listar(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    feedbackController.publicar(req, res);
});

module.exports = router;