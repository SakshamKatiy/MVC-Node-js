const {GeneratenewshortUrl,redirecttoOriginalPage,Analytics,allusers,api} = require("../controllers/control");
const express = require('express');
const router = express.Router();

router.post("/",GeneratenewshortUrl);

router.get("/",allusers )
router.get("/api",api)
router.get("/:shortid",redirecttoOriginalPage)

router.get("/analytics/:shortid",Analytics)
module.exports = router;