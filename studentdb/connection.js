// QUERY LOG
// CREATE DATABASE students;
// USE students;
// CREATE TABLE students (id VARCHAR(20) PRIMARY KEY, name TEXT NOT NULL, report_id TEXT NOT NULL, submission_time TEXT NOT NULL, obtained_marks INTEGER);

var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "ni9",
	port: "3306",
	user: "ni9",
	password: "nin"
})

connection.connect(
	(err) => {
		if (err)
			throw err;
		console.log("connected");
});

/*
		connection.query("CREATE DATABASE students", (err, result) => {
			if (err) throw err;
		    console.log("db created");
		});

		var sql = "CREATE TABLE students (id VARCHAR(10) name VARCHAR(100) report_no INT submission_time DATETIME obtained_marks INT)";

		connection.query(sql, (err) => {

var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "12345",
	database: "test",
	socketPath: '/var/run/mysqld/mysqld.sock'
})

connection.connect(
	(err) => {
		if (err) {
			throw err;
		}
		console.log("connected");
		/*
		
				connection.query("CREATE DATABASE students;", (err) => {
					if (err) throw err;
					console.log("db created");
				});
		
				
				var sql = "CREATE TABLE students (id VARCHAR(10) name VARCHAR(100) report_no INT submission_time DATETIME obtained_marks INT);";
				connection.query(sql, (err) => {
					if (err) throw err;
					console.log("tablecreated");
				});
		*/
	});


/*
var mysql = require('mysql');
var con = mysql.createConnection({
		host: "127.0.0.1:3306",
		user: "root",
		password: "12345"
	});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	con.query("CREATE DATABASE javatpoint", function (err, result) {
	if (err) throw err;
	console.log("Database created");
	});
});

var mysql = require('mysql');

var con = mysql.createConnection({
	host: '127.0.0.1',
	port: '3000',
	user: 'root',
	password: '123'
});

con.connect(function(err) {
	if (err) throw err;
	console.log('connected!');

	connection.query("CREATE DATABASE students", (err) => {
	if (err) throw err;
	else console.log("db created");
});
});
/*

var create = "CREATE TABLE students (id VARCHAR(10) name VARCHAR(100) report_no INT submission_time DATETIME obtained_marks INT)";
*/