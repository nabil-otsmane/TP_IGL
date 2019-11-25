var express = require("express");
var mongoose = require("mongoose");
var dotenv = require("dotenv");

dotenv.config();

var routes = require("./routes");

var app = express();

var auth = require("./auth");

app.use('*', auth);

Object.values(routes).forEach(element => {
    app.use('/api/enseignant/', element);
});



var port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server started with port " + port));