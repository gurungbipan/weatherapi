const express = require("express");
const res = require("express/lib/response");
const app = express();
const importData = require("./data.json")
const importDataTraffic = require("./trafficData.json")
const importCapitolData = require("./capitolData.json")


let port = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.send("Weather and Traffic API");
});

app.get('/test', (req,res)=>{
    res.send("This '/test' page is created to test pipeline, staging and finally production");
});

app.get('/weather', (req,res) =>{
    res.send(importData)
});

app.get('/traffic', (req,res) =>{
    res.send(importDataTraffic)
});

app.get('/capitol', (req,res) =>{
    res.send(importCapitolData)
});

app.listen(port,()=> {
    console.log(`App is listening on PORT http://localhost:${port}`);
}); 




//comment

