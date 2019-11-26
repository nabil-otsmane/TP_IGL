var router = require("express").Router();
var Model = require("../DBModel");

router.post("/remove/:id", (req, res) => {
    Model.find({_id: req.params.id}, (err) => {
        if(err){
            console.error(err);
            res.send({type: "error", msg: "user not found."});
        }
    }).deleteOne(err => {
        if(err){
            console.error(err);
            res.send({type: "error", msg: "user couldn't be deleted."});
        } else {
            res.send({type: "info", msg: "user deleted."});
        }
    })
});

module.exports = router;