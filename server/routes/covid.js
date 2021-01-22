const express = require("express");
const { getInfoCovid } = require("../controllers/covidController");
const router = express.Router();

router.get("/", getInfoCovid);

module.exports = router;
