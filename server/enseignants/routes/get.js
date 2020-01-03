var router = require("express").Router();
var Model = require("../DBModel");

/**
 * @function get it allows to find all teachers from DB for more processing
 * 
 */
function get(req, res) {

    Model.find((err, teachers) => {
        if(err){
            console.error(err);
            res.json({type: "error", msg: "internal error."});
        }

        res.json({type: "info", msg: teachers});
    });
}

router.post("/get", get);


module.exports = {router, get};