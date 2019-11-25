var router = require("express").Router();
var Model = require("../DBModel");

router.post("/remove/:id", (req, res) => {
    Model.deleteOne({_id: req.params.id}, err => {
        if(err){
            res.send({type: "error", msg: "user not found or can not be deleted."});
        } else {
            res.send({type: "info", msg: "user deleted."});
        }
    })
});

module.exports = router;