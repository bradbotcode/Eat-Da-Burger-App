//import orm.js
var orm = require("./config/orm.js");

var burger = {
    all: orm.selectAll("burgers"),
    create: orm.insertOne("burgers", "burgerName", userInput), //userInput = req.body.burger_name
    update: orm.updateOne("burgers", "devoured", "id", x) //x = req.params.id
}

module.exports = burger;