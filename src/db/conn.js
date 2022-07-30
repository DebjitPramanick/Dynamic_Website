const mongoose = require("mongoose");

// Creating a Database
mongoose.connect("mongodb://localhost:27017/eludynamic",{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successful")
}).catch((error)=>{
    console.log(error);
})