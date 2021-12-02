const express = require("express");

const router = express.Router();

// náum í login síðuna og birtum hana
router.get("/",(req, res) => {
    const name = req.session.name;
    const title = "Events";
    let loggedIn = false;
    if (req.session.loggedIn) {
        loggedIn = true;
    } 
    res.render("events",{title:"events", title,name,loggedIn});
});

// náum í login síðuna og birtum hana
router.post("/",(req, res) => {
    req.session.name=req.body.name;
    const name = req.session.name;
    const title = "Events";
    res.render("events",{title:"events", title,name});
});

module.exports = router;
