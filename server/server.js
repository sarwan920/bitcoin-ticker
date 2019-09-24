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

    var crypto=req.body.crypto;
    var fiat=req.body.fiat;
    var baseURL="https://apiv2.bitcoinaverage.com/indices/global/ticker/"
    var finalURL=baseURL+crypto+fiat;
    
    request(finalURL,(error,Response,body)=>{

    var data=JSON.parse(body);
    var price=data.last;
   res.send("price of "+crypto+" in  " +fiat+" is "+price);

    });

});

app.listen(3000,(Request,Response)=>{

console.log("server started...");

});