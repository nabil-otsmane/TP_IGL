var router = require("express").Router();
var Model = require("../DBModel");

/**
 * 
 * @function ajouter - It allows to add an Etudiant to our DB 
 */
function ajouter(req, res) {

    //console.log(req.body);

    var etudiant = new Model(req.body);

    etudiant.save(err => {
        if(err) { 
            res.json({
                type: "error",
                msg: "Bad request."
            });
        }
        else res.json({
            type: "info",
            msg: "user added!"
        });
    });

}

router.post('/add', ajouter);

module.exports = {router, ajouter};