/**
 * Creating the Schema of the Enseignant model
 * @constructor - The constructor of the Schema's model
 * It has these required feilds : nom,prenom, email, password, specialite,nss
 * @exports schemaModel - We Export the Schema Model 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EnseignantSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    specialite: {
        type: String,
        required: true
    },
    nss: {
        type: Number,
        default: 0
    },
});

module.exports = Enseignant = mongoose.model('enseignant', EnseignantSchema);