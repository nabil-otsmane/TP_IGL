var router = require("express").Router();
var Model = require("../DBModel");

router.post('/add', (req, res) => {

    var teacher = new Model(req.body);

    teacher.save(err => {
        if(err) { 
            console.error(err);
            res.send({
                type: "error",
                msg: "Bad request."
            });
        }
        else res.send({
            type: "info",
            msg: "user added!"
        });
    });

});

module.exports = router;