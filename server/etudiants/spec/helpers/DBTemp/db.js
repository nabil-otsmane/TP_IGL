var mongoose = require("mongoose");

/**
 * mongoose connection helper
 */

mongoose.connect("mongodb+srv://amine1234:amine1234@cluster0-vbjw6.mongodb.net/comptes?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
 });

var db = mongoose.connection;