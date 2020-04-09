//import libraries
const express = require("express");
const path = require("path");
const hbs = require("hbs");

//import Utils
const weather = require("../utils/weather");



//instanciating Express app
const app = express();

//starting server
app.listen(  process.env.PORT || 3000, () => {
  console.log("listening on port 3000");
});

//sertting file paths
const publicDir = path.join(__dirname, "../public");
const viersDir = path.join(__dirname, "../templates/views");
const PartialsDir = path.join(__dirname, "../templates/partials");



//handlenbars configuration
app.set("view engine", "hbs");
app.set("views", viersDir);
hbs.registerPartials(PartialsDir)

//setup static directory to serve
app.use(express.static(publicDir));

//routes for the app
app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "praful chandra",
  });
});


app.get("/help", (req, res) => {
  res.render("help", {
    help_message: "this is a help page",
    name:"praful chandra",
    title :"Help Page"
  });
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/weather", (req, res) => {

  weather.getWeather(req.query.city,(val)=>{
   res.json(val)
    
  })
});
