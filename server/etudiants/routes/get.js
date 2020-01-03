var router = require("express").Router();
var Model = require("../DBModel");

/**
 * @function get it allows to find some Students from to DB in order to Delete or to do Smthing with
 * 
 */
function get(req, res) {
    Model.find((err, etudiants) => {
        if(err){
            console.error(err);
            res.json({type: "error", msg: "internal error."});
        }

        res.json({type: "info", msg: etudiants});
    });
}

router.post("/get", get);


module.exports = {router, get};