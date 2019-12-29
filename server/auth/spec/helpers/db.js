var mongoose = require("mongoose");

/**
 * mongoose connection
 */

mongoose.connect("mongodb://localhost:27017/auth", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
 });

var db = mongoose.connection;