const express = require("express");
const bodyParser= require("body-parser");
const app = express();

const list= require("./routes/Listroutes.js");



app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));



app.use("/" ,list );


module.exports = app;