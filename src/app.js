const express = require("express");
const path = require("path");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;

// setting the path
const staticPath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views")
const partialpath = path.join(__dirname, "../templates/partials")


// middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))
app.use(express.static(staticPath))
app.set('view engine', '.hbs');
app.set("views", templatepath);
hbs.registerPartials(partialpath);


//routing
//app.get(path, callback)

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/contact',(req,res)=>{
    res.render("contact");
})

// Server create

app.listen(port, () =>{
    console.log(`server is running at port no ${port}`);
})