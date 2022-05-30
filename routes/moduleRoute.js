const express = require("express");
const router = express.Router();
const Module = require("../models/moduleModel");

router.route("/modules").get((req, res) => {
    Module.find().then(foundModules => res.json(foundModules))
})

module.exports = router;