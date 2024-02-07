const GeneratenewshortUrl = require("../controllers/control");
const express = require('express');
const router = express.Router();

router.post("/",GeneratenewshortUrl);
module.exports = GeneratenewshortUrl;