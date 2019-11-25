var mongoose = require("mongoose");

/*
 * mongoose connection
 */
mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
 });

var db = mongoose.connection;

db.on("error", console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
    console.log("connected to database!");
});