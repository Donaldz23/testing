const express = require("express");
const router = express.Router();

// náum í login síðuna og birtum hana
router.get("/",(req, res) => {
    if(req.session.loggedin){
        res.redirect("/")
    }else{
		let loggedIn = false;
		if (req.session.loggedIn) {
			console.log('true');
			const loggedIn = true;
		} 
		const name = req.session.name;
		const title = "Login";
		const header01 = "";
		res.render("login",{title:"login",header01, title,name, loggedIn});
    }
});


// get login page
router.post('/', (req, res) => {
	const adminUser = "Andres";
	const adminPassword = "Andres";
	const user = req.body.uname;
	const password = req.body.psw;

	if (adminUser === user && adminPassword === password){
		req.session.loggedIn = true;
		req.session.uname = user;
		res.redirect('/');
	} else {
		console.log('Notandi fannst ekki');
		res.redirect('/login');
	}
});


module.exports = router;
