const mvctable = require("../models/schema");
const Shortid = require('shortid');


// get all user in the frontend

const api = async(req,res)=>{
const data = await mvctable.find({})
res.json(data)
}

const allusers = async(req,res)=>{
    const all = await mvctable.find({});
    res.render("home",{
        urls:all
    })
}


// Generate
const GeneratenewshortUrl = async(req,res)=>{
    const body = req.body;
    const shortid = Shortid()
    await mvctable.create({
        shortid:shortid,
        redirecturl:body.url,
        VisitedHistory:[],
    })
    res.redirect("/url")
}


const redirecttoOriginalPage = ("/:shortid",async(req,res)=>{
    const shortid = req.params.shortid;
    const entry = await mvctable.findOneAndUpdate({shortid}, {
        $push:{
        VisitedHistory:{
            timestamp:Date.now()
        }
        }
    })
   
    res.redirect(entry.redirecturl);
})

const Analytics = ("/:shortid",async(req,res)=>{
    const shortid = req.params.shortid;
    const result = await mvctable.findOne({shortid});
    res.json({
        Totalclick:result.VisitedHistory.length,
        analytics:result.VisitedHistory
    })

})
module.exports = {GeneratenewshortUrl ,redirecttoOriginalPage,Analytics,allusers,api};