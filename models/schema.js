const {default:mongoose} = require("mongoose");
require("./conn");

const mvcSchema = new mongoose.Schema({
    shortid:{
        type:String,
        unique:true,
        required:true,

    },
    redirecturl:{
        type:String,
        required:true
    },
    VisitedHistory:[{
        timestamp:{
            type:Number
        }
    }],

},{timestamps:true})

const mvctable = new mongoose.model('TableforShortUrlGen',mvcSchema);

module.exports = mvctable;