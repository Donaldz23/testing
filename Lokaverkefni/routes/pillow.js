const express = require("express");

const router = express.Router();

// náum í index síðuna og birtum hana
router.get("/",(req, res) => {
    const text = "Register page";
    let loggedIn = false;
    if (req.session.loggedIn) {
        loggedIn = true;
    } 
    res.render("pillow",{title:"pillow", text,loggedIn});
});


module.exports = router;
    