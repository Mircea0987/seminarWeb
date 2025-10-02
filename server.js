//import la express
const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("Salutare");
});


app.listen(7001);


function returnName(name){
    return `Hello + ${name}`;
}

returnName("James");