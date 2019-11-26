var router = require("express").Router();
var axios = require("axios");

function isAuthenticated(cookie) {
    
    return axios.request({
        url: "http://localhost:"+process.env.AUTH_PORT+"/isAuth",
        method: "post",
        headers: {
            Cookie: cookie
        }
    });
}

router.post("*", (req, res, next) => {
    isAuthenticated(req.headers.cookie)
    .then(data => {
        if(!data.data.isAuth)
        {
            res.json({type: "error", msg: "You're not authenticated!"});
        } else {
            next();
        }
    })
    .catch(function (err){
        console.log(err);
        if(!err.status)
            res.json({type: "error", msg: "server not responding!"});
        else
            res.json({type: "error", msg: "unknown error"});
    });
});

module.exports = router;