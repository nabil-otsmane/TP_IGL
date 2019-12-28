const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

/**
 * Item Model
 */
const Enseignant = require('../../../models/Enseignant');
/**
 * @function FindEnseignant
 * @route GET api/users/enseignant
 * @description Get all Enseignants
 * @access public
 */
router.get('/', (req, res) => {
    Enseignant.find()
        .sort({ nom: -1 })
        .then(enseignant => res.json(enseignant));
});


/**
 * @function CreateEnseignant
 * @route POST api/users/enseignant
 * @description Create An Enseignant
 * @access private
 * @param {any} req we get from it the all the information about the Enseignant to add
 */


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


/**
 * @function DeleteEnseignant
 * @route DELETE api/items/:id
 * @description Delete an item from the DB
 * @access private
 * @param {any} req we get from it the id of the Enseignant to delete
 */



router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;