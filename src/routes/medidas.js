const express = require("express");
const router = express.Router();

const leituraController = require("../controllers/leituraController");

router.post("/cadastrar", function(req, res) {
    leituraController.cadastrar(req, res);
});

module.exports = router;