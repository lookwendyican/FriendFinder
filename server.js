var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var nodemon = require("nodemon");
var chalk = require("chalk");
//Set up Express
var app = express();
var port = process.env.PORT || 3000;

//Express dta parsing capabilities
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());            
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("app/public"));

//Router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// LISTENER
app.listen(port, () => console.log(chalk.green("Listening on port:  ", port)));
