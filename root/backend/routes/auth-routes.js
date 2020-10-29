const router = require("express").Router();
const passport = require("passport")

//Unprotected Routes
router.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
});

router.get('/failed', (req, res) => {
    res.send('<h1>Log in Failed :(</h1>')
});

// Middleware - Check user is Logged in
const checkUserLoggedIn = (req, res, next) => {
    req.user ? next(): res.sendStatus(401);
}

//Protected Route.
router.get('/login/success', checkUserLoggedIn, (req, res) => {
    if (req.user) {
        res.json({
            success: true,
            message: "user has successfully authenticated",
            user: req.user,
            cookies: req.cookies
        });
    }
});

// Auth Routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
    function(req, res) {
        res.redirect('http://localhost:3000/welcome');
    }
);
  
  
  // updating database with selected user type
router.post('/typeselect', (req, res) => {
    User.updateOne({ googleId: req.body.id }, { type: req.body.type }, function(err, result){
      if (err) {
        console.log(err)
      } else {
        console.log(result);
      }
    })
})
  
  //Logout
router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('http://localhost:3000');
})

module.exports = router;