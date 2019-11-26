var router = require("express").Router();
var axios = require("axios");

function isAuthenticated(Cookie) {

    return {
        then: function(e){
            e({isAuth: true});
            return {catch: function(){}}
        }
    };

    return axios.post("localhost:"+process.env.AUTH_PORT+"/isAuth", {
        headers: {
            Cookie
        }
    }).then(res => res.json())
}

router.post("*", (req, res, next) => {
    isAuthenticated(req.cookies)
    .then(json => {
        if(!json.isAuth)
        {
            res.json({type: "error", msg: "You're not authenticated!"});
        } else {
            next();
        }
    })
    .catch(function (err){
        if(!err.status)
            res.json({type: "error", msg: "server not responding!"});
        else
            res.json({type: "error", msg: "unknown error"});
    });
});

module.exports = router;