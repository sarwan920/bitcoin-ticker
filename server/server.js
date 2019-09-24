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
    var amount=req.body.amount;
   
    var options={
        url:"https://apiv2.bitcoinaverage.com/convert/global",
        method: "GET",
        qs:{
            from:crypto,
            to:fiat,
            amount:amount
        }
    };
    
    request(options,(error,Response,body)=>{

    var data=JSON.parse(body);
    var price=data.price;
    var currentDate=data.time;

    res.write("<p>The Current time and Date is"+ currentDate+"</p>")
   res.write("<h1>"+amount+" "+ crypto +" is worth "+price+"</h2>");
   res.send();

    });

});

app.listen(3000,(Request,Response)=>{

console.log("server started...");

});