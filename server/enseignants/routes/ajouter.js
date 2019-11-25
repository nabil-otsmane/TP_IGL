var router = require("express").Router();

router.post('/add', (req, res) => {
    res.send({msg: "user added!"});
});


module.exports = router;