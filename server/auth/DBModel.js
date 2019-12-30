const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Creating the Schema of the account model
 * @constructor - The constructor of the Schema's model
 * It has three required feild : login, password, type
 * @exports schemaModel - We Export the Schema Model 
 * 
 */
const AdminSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "admin"
    }
});

module.exports = Admin = mongoose.model('admins', AdminSchema);