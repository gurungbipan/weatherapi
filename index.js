const express = require("express");
const res = require("express/lib/response");
const app = express();
const importData = require("./data.json")
const importDataTraffic = require("./trafficData.json")

let port = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.send("Hello World");
});

app.get('/weather', (req,res) =>{
    res.send(importData)
});

app.get('/traffic', (req,res) =>{
    res.send(importDataTraffic)
});

app.listen(port,()=> {
    console.log(`App is listening on PORT http://localhost:${port}`);
}); 


//comment

