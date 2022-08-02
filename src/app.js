const express = require("express");
const path = require("path");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;

// middle ware setting the path
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath))

//routing
//app.get(path, callback)

app.get('/',(req,res)=>{
    res.send("Hi");
})

// Server create

app.listen(port, () =>{
    console.log(`server is running at port no ${port}`);
})