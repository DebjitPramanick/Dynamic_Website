const express = require("express");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;

//routing
//app.get(path, callback)
app.get('/',(req,res)=>{
    res.send("Hi");
})

// Server create

app.listen(port, () =>{
    console.log(`server is running at port no ${port}`);
})