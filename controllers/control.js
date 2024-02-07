const mvctable = require("../models/schema");
const Shortid = require('shortid');
const GeneratenewshortUrl = async(req,res)=>{
    const body = req.body;
    const shortid = Shortid()
    await mvctable.create({
        shortid:shortid,
        redirecturl:body.url
    })
}

module.exports = GeneratenewshortUrl;