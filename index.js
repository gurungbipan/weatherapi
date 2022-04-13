const express = require("express");
const res = require("express/lib/response");
const app = express();
const importData = require("./data.json")
let port = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.send("Hello World");
});

app.get('/weather', (req,res) =>{
    res.send(importData)
});

app.listen(port,()=> {
    console.log(`App is listening on PORT http://localhost:${port}`);
}); 


