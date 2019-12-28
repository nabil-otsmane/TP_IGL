var mongoose = require("mongoose");     

/**
 * Connecting to the Data Base
 * @function
 * @param {string} URL - The Url of the DataBase
 * @param {ConnectionOptions} CO  - The Options how we connect to the BD
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
