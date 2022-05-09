const express = require("express");
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;
const app = express();


// Public Static Path
const staticPath = path.join(__dirname , '../public');

// Templates Path
const viewsPath =  path.join(__dirname , '../templates/views');
const partialsPath = path.join(__dirname , '../templates/partials');


app.set('view engine' , 'hbs');
app.set('views' , viewsPath);
hbs.registerPartials(partialsPath);


app.use(express.static(staticPath));




//Routing
app.get('/' , (req,res)=>{
    res.render("index")
});

app.get('/About' , (req,res)=>{
    res.render("about")
});

app.get('/weather' , (req,res)=>{
    res.render("weather")
});

app.get('*' , (req,res)=>{
    res.render("404" ,{
        errormsg:"OOps Page Not Found"
    })
});

app.listen(port ,'127.0.0.1' , ()=>{
    console.log("Server is at http://127.0.0.1:8000");
});