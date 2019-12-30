/**
 * Creating the Schema of the Etudaint model
 * @constructor - The constructor of the Schema's model
 * It has these required feilds : nom,prenom, email, password, goupe,matricule, Date de Naissance
 * @exports schemaModel - We Export the Schema Model 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EtudiantSchema = new Schema({
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
    groupe: {
        type: String,
        required: true
    },
    matricule: {
        type: String,
        required: true
    },
    date_naissance: {
        type: String,
        default: Date.now
    },
});

module.exports = Etudiant = mongoose.model('etudiant', EtudiantSchema);