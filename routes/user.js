const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/user");

router.get("/", function(req, res) {
    res.render("sample");
});

router.get("/index", function(req, res) {
    res.render("index");
});

router.get("/account", function(req, res) {
  if(req.isAuthenticated()){
    res.redirect("/");
  } else {
    res.render("user");
  }
});

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/account");
});

router.post("/login", passport.authenticate("local", {
  failureRedirect: "/account",
  successRedirect: "/"
}), function(req, res) {
});

router.post("/signup", function(req, res) {
  User.register({username: req.body.username}, req.body.password, function(err, user){
    if(err) {
      console.log(err);
      res.redirect("/account");
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/");
      });
    }
  });
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/account");
}

module.exports = router;
