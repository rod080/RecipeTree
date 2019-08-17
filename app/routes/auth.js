    var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {
    //GET
    app.get("/signup", authController.signup)
    app.get('/signin', authController.signin)
    app.get('/logout', authController.logout)
    app.get('/dashboard', isLoggedIn, authController.dashboard);

    //POST
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin',
    }
    ));
    app.post('/signup', passport.authenticate('local-signup', {
        sucessRedirect: '/dashboard',
        failureRedirect: '/signup',
    }
    ));
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }
}