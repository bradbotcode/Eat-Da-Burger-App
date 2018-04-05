//import orm.js
var orm = require("./config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cb) {
        orm.insertOne("burgers", "burgerName", userInput, function (res) {
            cb(res);
        });
    },
    update: function (cb) {
        orm.updateOne("burgers", "devoured", "id", paramID, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;