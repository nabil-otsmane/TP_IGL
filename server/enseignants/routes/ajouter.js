var router = require("express").Router();
var Model = require("../DBModel");

router.post('/add', (req, res) => {

    console.log(req.body);

    var teacher = new Model(req.body);

    teacher.save(err => {
        if(err) { 
            console.error(err);
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

});

module.exports = router;