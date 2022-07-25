var mysql = require('mysql');

var con = mysql.createConnection({
	host: "127.0.0.1",
	port: "3306",
	user: "gitpod",
	password: "newpassword",
  database: "students"
});

// well global variable is not updating why
// local variable has highest precedence over any other
// actually variable is updating but way too late than i said console.log()
// does js suck


con.connect(function(err) {
  if (err) throw err;
});

var x = con.query("SELECT * FROM students", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });


console.log(x);

module.exports = x;



