const router = require("express").Router();
const passport = require("passport")
const Client_Home_Page_URL = "http://localhost:3000";
const Login_Success_URL = "http://localhost:3000/teacher/dashboard";


// After successful login, retrieve user info
router.get("/login/success", (req, res) => {
    res.send(`Welcome ${req.user}`)
});


// After failed login, send fail message
router.get("/login/failed", (req, res) => {
    res.send("You failed to log in")
});


// When Logout, redirect to Client Home Page
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(Client_Home_Page_URL);
});

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

// Redirect to Home Page after a Successful Login
router.get("/google/redirect",passport.authenticate("google", 
    { failureRedirect: "/login/failed" }),
    function(req, res){
        res.redirect(Login_Success_URL)
    }
);

module.exports = router;