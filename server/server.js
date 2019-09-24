const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
const request=require('request');


app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(Request,Response)=>{

Response.sendFile(path.normalize(__dirname+"/../src/index.html"));

});

app.post("/",(req,res)=>{
    
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD",(error,Response,body)=>{

console.log(body);
    });

});

app.listen(3000,(Request,Response)=>{

console.log("server started...");

});