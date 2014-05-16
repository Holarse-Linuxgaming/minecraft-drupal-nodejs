var _ = require("underscore");
var mysql = require("mysql");
var restify = require("restify");

var connection = mysql.createConnection({ 
  host: "localhost",
  user: "migration",
  password: "migrationpassword",
  database: "holarse"
}).connect();

var server = restify.createServer();
server.get("/minecraft/allowed_users.json", function(req, res, next) {
	connection.query("select * from minecraft_users;", function(err, rows) {
    	var vals = _.map(rows, function(i) { return i.value; });
    	console.log(vals);
    	res.send(vals);
  	});	 
});

var server = server.listen(4567, function() {
  console.log("Listening on port %d", server.address().port);
});
