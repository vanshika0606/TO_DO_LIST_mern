const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
     heading:{
        type:String,
     },
     description:{
         type:String,
     },
     completed:{
        type:String,
     },
     completed:{
        type:String,
     },
     comments:{
        type:String,
     }
})


module.exports = mongoose.model("List",listSchema);