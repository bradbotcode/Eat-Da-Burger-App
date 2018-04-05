//dependencies
var express = require("express");
var router = express.Router();

//import model from burgers.js
var burger = ("./models/burger.js");

//redirect root to /index
router.get("/", function (req, res) {
    res.redirect("/index");
});

//render all burgers to DOM
router.get("/index", function (req, res) {
    burger.selectAll(function (data) {
        var hbrObj = {
            burgers: data
        };

        console.log(hbrObj);
        res.render("index", hbrObj);
    });
});

//create a new burger
router.post("/burgers/create", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.name], function (result) {
        console.log(result);
        res.redirect("/index");
    });
});

//devour a burger
router.put("/burgers/eat/:id", function (req, res) {
    burger.updateOne(req.params.id, function (result) {
        console.log(result);
        res.redirect("/index");
    });
});

module.exports = router;