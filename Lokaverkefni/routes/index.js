const express = require("express");

const router = express.Router();

// náum í index síðuna og birtum hana
router.get("/",(req, res) => {
    const text = "Register page";
    let loggedIn = false;
    if (req.session.loggedIn) {
        loggedIn = true;
    } 
    
    res.render("index",{title:"Home", text, loggedIn});
});

router.post("/",(req, res) => {
    req.session.name=req.body.name;
    const name = req.session.name;
    const title = "Your name:";
    res.render("index",{title:"Home", title,name});
});


module.exports = router;
    