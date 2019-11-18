const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const User = require("./models/user");

const userRoutes = require("./routes/user");

mongoose.connect("mongodb://localhost:27017/newFolder",{useNewUrlParser: true, useUnifiedTopology: true});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(session({secret: "secret.", resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {done(null, user.id);});
passport.deserializeUser(function(id, done) {User.findById(id, function(err, user) {done(err, user);});});

app.use(userRoutes);

app.listen(3000, function() {
  console.log("server started at port 3000!");
});
