var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv');//.load();
var exphbs = require('express-handlebars');
LocalStrategy = require('passport-local').Strategy;


//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.get('/', function (req, res) {

    res.send('Welcome to Passport with Sequelize');
});

//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);

//For Handlebars
app.set('views', './app/views')
app.engine('handlebars', exphbs({
    extname: '.handlebars'
}));
app.set('view engine', '.handlebars');

app.get('/', function (req, res) {
    res.send('Welcome to Passport with Sequelize');
});

//load passport strategy
require('./app/config/passport/passport.js')(passport, models.User);

//Sync Database
models.sequelize.sync().then(function () {
    console.log('Nice! Database looks fine')
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});

//Listening APP at port 5000
app.listen(3000, function (err) {
    if (!err)
        console.log("Site is live");
    else console.log(err)

});

//4. Write a Passport Strategy
// "Failed to serialize user into session"