var router = require("express").Router();
var Model = require("../DBModel");

router.post("/get", (req, res) => {
    Model.find((err, teachers) => {
        if(err){
            console.error(err);
            res.json({type: "error", msg: "internal error."});
        }

        res.json(teachers);
    });
});


module.exports = router;