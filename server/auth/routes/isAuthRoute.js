var router = require("express").Router();
var jwt = require("jsonwebtoken");

function checkJWT(cookie) {

    var ret = true;

    if(cookie === undefined)
    {
        ret = false;
    } else {
        try {
            var decoded = jwt.verify(cookie, process.env.SECRET, {
                algorithms: ["HS256"]
            });

            if(decoded === undefined)
                ret = false;

            if(decoded.type !== "admin")
                ret = false;
        }
        catch(e) {
            ret = false;
        }    
    }
    return ret;
}

exports.check = checkJWT;

router.post('/', (req, res) => {
    res.json({isAuth: checkJWT(req.headers.authorization.split(' ')[1])});
});

exports.router = router;