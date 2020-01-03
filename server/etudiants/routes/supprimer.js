var router = require("express").Router();
var Model = require("../DBModel");

/**
 * @function supprimer it allows us to delete a student from the DB
 */
function supprimer(req, res) {
    Model.deleteOne({_id: req.params.id}, err => {
        if(err){
            res.json({type: "error", msg: "user not found or can not be deleted."});
        } else {
            res.json({type: "info", msg: "user deleted."});
        }
    })
}

router.post("/remove/:id", supprimer);

module.exports = {router, supprimer};