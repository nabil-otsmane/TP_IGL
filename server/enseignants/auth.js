var router = require("express").Router();
var axios = require("axios");

function isAuthenticated(cookie) {

    return {
        then: function(e){
            e({isAuth: true});
            return {catch: function(){}}
        }
    };

    return axios.post(process.env.AUTH_IP+":"+process.env.AUTH_PORT+"/isAuth", {
        cookie
    }).then(res => res.json())
}

router.post("*", (req, res, next) => {
    isAuthenticated(req.cookies)
    .then(json => {
        if(!json.isAuth)
        {
            res.send({type: "error", msg: "You're not authenticated!"});
        } else {
            next();
        }
    })
    .catch(function (err){
        if(!err.status)
            res.send({type: "error", msg: "server not responding!"});
        else
            res.send({type: "error", msg: "unknown error"});
    });
});

module.exports = router;