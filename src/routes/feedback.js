var express = require("express");
var router = express.Router();

var feedbackController = require("../controllers/feedbackController");

router.get("/:idFeedback", function (req, res) {
  feedbackController.buscarFeedback(req, res);
});

router.post("/cadastrar", function (req, res) {
  feedbackController.cadastrar(req, res);
})

module.exports = router;