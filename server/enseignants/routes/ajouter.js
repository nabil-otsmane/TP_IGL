var router = require("express").Router();
var Model = require("../DBModel");


/**
 * 
 * @function ajouter - It allows to add an Enseignant to our DB 
 */
async function ajouter(req, res) {

    if(!req.body)
    {
        res.json({
            type:"error",
            msg:"no body to add"
        });
        return;
    }

    var teacher = new Model(req.body);

    teacher.save(err => {
        
        if(err) {
            //console.log(err);
            res.json({
                type: "error",
                msg: "Bad request."
            });
            return;
        }

        console.log("yes!");
        res.json({
            type: "info",
            msg: "user added!"
        });
        
    });
}

router.post('/add', ajouter);

module.exports = {
    router,
    ajouter
};