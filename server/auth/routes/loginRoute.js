var router = require("express").Router();
var jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
var Model = require("../DBModel");

async function checkPassword(email, pass) {


    let user = await (Model.findOne({ email }).exec());

    if(!user)
        return false;

    var match = await bcrypt.compare(pass, bcrypt.hashSync(user.password));

       if(!match) return false;

    return user;
}

function createJWT(type)
{
    return jwt.sign({ type }, process.env.SECRET, { algorithm: "HS256" });
}   

router.post('/', (req, res, next) => {

    if(req.body === undefined)
    {
        res.json({type: "error", msg: "Bad request."});
        return;
    }
    
    const { email, password } = req.body;

    if(email === undefined || password === undefined)
    {
        res.json({type: 'error', msg: 'Bad request.'});
        return;
    }

    checkPassword(email, password).then(user => {

        if(!user)
        {
            res.json({type: 'error', msg: "Wrong Credentials."});
            return;
        }

        res.cookie('jwt_token', createJWT(user.type));
        res.json({type:"info", msg: "login success."});
    })
    .catch(err => {
        console.error(err);
        res.status(501);
        res.send("");
    });
});

module.exports = router;