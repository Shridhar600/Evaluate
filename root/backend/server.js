const keys = require("./config/keys");
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./config/passport-setup');
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user-model");
const authRoutes = require("./routes/auth-routes");
const examRoutes = require("./routes/exam-routes");

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

app.use('/', authRoutes)
app.use('/exam', examRoutes)

app.listen(5000, () => console.log(`App listening on port ${5000} 🚀🔥`))