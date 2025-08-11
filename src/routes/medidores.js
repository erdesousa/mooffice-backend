const express = require("express");
const router = express.Router();

const medidorController = require("../controllers/medidorController");

router.post("/cadastrar", function(req, res) {
    medidorController.cadastrar(req, res);
})

module.exports = router;