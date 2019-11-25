var router = require("express").Router();
var axios = require("axios");

function isAuthenticated(cookie) {

    return axios.post(process.env.AUTH_IP+":"+process.env.AUTH_PORT+"/isAuth", {
        cookie
    }).then(res => res.json())
}

router.post("/:id", (req, res) => {
    isAuthenticated(req.cookies).then(json => {
        if(!json.isAuth)
        {
            res.send({type: "error", msg: "You're not authenticated!"});
        }
    });
});

module.exports = router;