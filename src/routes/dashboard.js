var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listar", function (req, res) {
    dashboardController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    dashboardController.listarPorUsuario(req, res);
});


router.post("/publicar/:idUsuario", function (req, res) {
    dashboardController.publicar(req, res);
});

module.exports = router;