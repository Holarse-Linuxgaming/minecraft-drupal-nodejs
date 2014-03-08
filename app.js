var _ = require("underscore");
var mysql = require("mysql");
var express = require("express");
var app = express();

var connection = mysql.createConnection({ 
  host: "localhost",
  user: "migration",
  password: "migrationpassword",
  database: "holarse"
});

connection.connect();

app.get("/minecraft/allowed_users.json", function(req, res) {
  connection.query("select * from minecraft_users;", function(err, rows) {
    var vals = _.map(rows, function(i) { return i.value; });
    console.log(vals);
    res.send(vals);
  });
});

var server = app.listen(4567, function() {
  console.log("Listening on port %d", server.address().port);
});
