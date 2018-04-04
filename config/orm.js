//import connection.js
var connection = require("./connection.js");

//establishing orm methods
var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function (table, col, yourBurger, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?) ";
        connection.query(queryString, [table, col, yourBurger], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function (table, col, id, paramID, cb) {
        var queryString = "UPDATE ?? SET ?? = 1 WHERE ?? = ?";
        connection.query(queryString, [table, col, id, paramID], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }

};

module.exports = orm;