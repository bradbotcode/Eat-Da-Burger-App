//dependencies
var express = require("express");
var router = express.Router();

//import model from burgers.js
var burgers = require("../models/burgers.js");

//redirect root to /index
router.get("/", function (req, res) {
  res.redirect("/index");
});

//render all burgers to DOM
router.get("/index", function (req, res) {
  burgers.all(function (data) {
    var hbrObj = {
      burgers: data
    };
    console.log(hbrObj);
    res.render("index", hbrObj);
  });
});

//create a new burger
router.post("/burgers/create", function (req, res) {
  burgers.create(req.body.burger_name, function (result) {
    res.redirect("/index");
  });
});

//devour a burger
router.post("/burgers/eat/:id", function (req, res) {
  console.log(req.params.id);
  burgers.update(req.params.id, function (result) {
    res.redirect("/index");
  });
});

module.exports = router;