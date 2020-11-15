const passport = require("passport")
const User = require("../models/user-model");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require("mongoose")
const keys = require("./keys")

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
      done(null, user);
  });
});


passport.use(
  new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // check if user already exists in our own db
    User.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser){
            // already have this user
            done(null, currentUser);
        } else {
            // if not, create user in our db
            new User({
              googleId: profile.id,
              name: profile._json.given_name,
              screenName: profile.displayName,
              profileImage: profile._json['picture'],
              email: profile._json.email
            }).save().then((newUser) => {
                done(null, newUser);
            });
          }
      });
  }
));