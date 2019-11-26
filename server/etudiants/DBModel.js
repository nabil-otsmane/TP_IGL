const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EtudiantSchema = new Schema({
    login: {
        type: String,
        required: true
    },
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
        type: Date,
        default: Date.now
    },
});

module.exports = Etudiant = mongoose.model('etudiant', EtudiantSchema);