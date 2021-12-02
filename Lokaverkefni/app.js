const express = require('express');
const session = require("express-session");
const path = require('path');
const colors = require('colors');
const indexRouter = require('./routes');
const eventsRouter = require('./routes/events');
const loginRouter = require('./routes/login');
const contactRouter = require("./routes/contact");
const cdfmRouter = require('./routes/cdfm');
const gamingRouter = require('./routes/gaming');
const headMassageRouter = require('./routes/headMassage');
const lazertagRouter = require('./routes/lazertag');
const picnicRouter = require('./routes/picnic');
const pillowRouter = require('./routes/pillow');


const app = express();


//server static files
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public")));
//session setup
app.use(session({
    
    //it holds the secret key for session
    secret: "Your_Secret_key",
    
    //forces the session to be saved
    //back to the session store
    resave: true,

    //Forces a session that is "unintialized"
    //to be saved to the store
    saveUnintialized: true
}))

//template engine
app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");

//routers
app.use('/', indexRouter);
app.use('/events', eventsRouter);
app.use('/login', loginRouter);
app.use("/contact", contactRouter);
app.use('/cdfm', cdfmRouter);
app.use('/gaming', gamingRouter);
app.use('/headMassage', headMassageRouter);
app.use('/lazertag', lazertagRouter);
app.use('/picnic', picnicRouter);
app.use('/pillow', pillowRouter);


app.use((req,res) => {
    res.status(404);
    res.render("error", {title: "error", status: 404, msg: "síða fannst ekki! LMAO"});
});

app.use((err, req, res) =>{
    res.status(err.status || 500);
    res.render("error", { title: "error", status: res.status || 500, msg: "villa kom upp!"});
});


// setting up the srever
app.listen(3000, () => {
    console.log(colors.green("server is running on port 3000..."));
});