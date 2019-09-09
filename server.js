var express = require("express");
var express = bodyParser("body-parser");
var path = require("path");

var app = express():
var port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }());
app.use(bodyParser.text());            
app.use(bodyParser.json({ type: "application/vnd.api+json" }());

app.use(express.static("app/public"));


app.listen(port, () => console.log(Listening on port %s", port));
