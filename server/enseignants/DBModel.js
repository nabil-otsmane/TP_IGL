const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EnseignantSchema = new Schema({
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