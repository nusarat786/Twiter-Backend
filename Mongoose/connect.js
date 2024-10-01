
const mongoose = require("mongoose");
require('dotenv').config();

//const url ='mongodb+srv://vajju:nusarat@cluster0.t6mxcqh.mongodb.net/twwiter?retryWrites=true&w=majority';
const url =process.env.API_URL;

var dbConnect = ()=>{

    mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then((con)=>{
        console.log("MongoDb Is Connected");
        return con;
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = dbConnect;



// 73sc1g3guS8is3Gi