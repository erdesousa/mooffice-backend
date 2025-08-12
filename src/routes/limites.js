const express = require("express");
const router = express.Router();

const limiteController = require("../controllers/limiteController");

router.post("/cadastrar", function(req, res){
    limiteController.cadastrar(req, res);
});

module.exports = router;