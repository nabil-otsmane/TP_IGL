var router = require("express").Router();
var Model = require("../DBModel");

router.post("/get", (req, res) => {
    Model.find((err, teachers) => {
        if(err){
            console.error(err);
            res.send({type: "error", msg: "internal error."});
        }

        res.send(teachers);
    });
});


module.exports = router;