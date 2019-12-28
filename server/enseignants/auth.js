var router = require("express").Router();
var axios = require("axios");

function isAuthenticated(cookie) {
    
    if(cookie)
        cookie = cookie.split(' ')[1];

    return axios.request({
        url: process.env.AUTH_URL+":"+process.env.AUTH_PORT+"/isAuth",
        method: "post",
        headers: {
            Authorization: "Bearer " + cookie,
            crossDomaine: true
        }
    });
}

router.post("*", (req, res, next) => {

    isAuthenticated(req.headers.authorization)
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
