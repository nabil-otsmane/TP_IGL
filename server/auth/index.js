var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");

dotenv.config();

require("./db");

var isAuthRouter = require("./routes/isAuthRoute");
var loginRouter = require("./routes/loginRoute");

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());

app.use('/isAuth', isAuthRouter.router);
app.use('/login', loginRouter.router);

port = process.env.PORT;

app.listen(port, () => console.log("Auth server running at port " + port + "."));