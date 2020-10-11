const keys = require("./config/keys");
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./config/passport-setup');
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user-model");

const app = express();


// Database Connection
mongoose.connect(keys.mongodb.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, function(err){
  if (err){
    console.log(err);
  }
  else{
    console.log("Connected");
  }
});

// // Set up cors to allow us to accept requests from our frontend client server
app.use(
    cors({
        origin: "http://localhost:3000", //allow to server to accept requests from different origin
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
        credentials: true //Allow session cookies from browser to pass through
    })
)

app.use(bodyParser.json());

//Configure Session Storage
app.use(cookieSession({
  name: 'session-name',
  keys: ['key1', 'key2']
}))

//Configure Passport
app.use(passport.initialize());
app.use(passport.session());

//Unprotected Routes
app.get('/', (req, res) => {
  res.send('<h1>Home</h1>')
});

app.get('/failed', (req, res) => {
  res.send('<h1>Log in Failed :(</h1>')
});

// Middleware - Check user is Logged in
const checkUserLoggedIn = (req, res, next) => {
  req.user ? next(): res.sendStatus(401);
}

//Protected Route.
app.get('/login/success', checkUserLoggedIn, (req, res) => {
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
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    res.redirect('http://localhost:3000/welcome');
  }
);


// updating database with selected user type
app.post('/typeselect', (req, res) => {
  User.updateOne({ googleId: req.body.id }, { type: req.body.type }, function(err, result){
    if (err) {
      console.log(err)
    } else {
      console.log(result);
    }
  })
})

//Logout
app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('http://localhost:3000');
})

app.listen(5000, () => console.log(`App listening on port ${5000} 🚀🔥`))