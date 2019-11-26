var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var cors = require("cors");

dotenv.config();

require("./db");
var routes = require("./routes");
var auth = require("./auth");

var app = express();

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

app.use('*', auth);

Object.values(routes).forEach(element => {
    app.use('/api/etudiant/', element);
});



var port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server started with port " + port));