const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Enseignant = require('../../../models/Enseignant');

// @route   GET api/users/enseignant
// @desc    Get All Enseignants
// @access  Public
router.get('/', (req, res) => {
    Enseignant.find()
        .sort({ nom: -1 })
        .then(enseignant => res.json(enseignant));
});

// @route   POST api/users/enseignant
// @desc    Create An Enseignant
// @access  Private
router.post('/', auth, (req, res) => {
    const newEnseignant = new Enseignant({
        login: req.body.login,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: req.body.password,
        specialite: req.body.specialite,
        nss: req.body.nss
    });

    newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;