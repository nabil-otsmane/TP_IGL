var router = require("express").Router();
var Model = require("../DBModel");

router.post("/get", (req, res) => {
    Model.find((err, etudiants) => {
        if(err){
            console.error(err);
            res.json({type: "error", msg: "internal error."});
        }

        res.json(etudiants);
    });
});


module.exports = router;