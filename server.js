//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controllers.js");

var app = express();

// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3030;

//routes
app.use('/', routes);

//express.static middleware 
app.use(express.static("public"));

//data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//handlebars engine
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//start server so it can listen to client requests
app.listen(PORT, function () {
    console.log("Server is listening on: http://localhost" + PORT);
});