var router = require("express").Router();
var jwt = require("jsonwebtoken");

function checkJWT(cookie) {

    var ret = true;

    if(cookie === undefined || cookie.jwt_token === undefined)
    {
        ret = false;
    } else {
        var decoded = jwt.verify(cookie.jwt_token, process.env.SECRET);
        if(decoded === undefined)
            ret = false;

        if(decoded.type !== "admin")
            ret = false;
            
    }
    return ret;
}

router.post('/', (req, res) => {
    res.send({isAuth: checkJWT(req.cookies)});
});

module.exports = router;