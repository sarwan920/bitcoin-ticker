const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(Request,Response)=>{

Response.sendFile(path.normalize(__dirname+"/../src/index.html"));

});

app.post("/",(Request,Response)=>{
    console.log(Request.body.crypto);
});

app.listen(3000,(Request,Response)=>{

console.log("server started...");

});