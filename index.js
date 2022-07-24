var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "localhost",
	port: "3000",
	user: "root",
	password: ""
})
/*
connection.connect(
	(err) => {
		if (err)
			throw err;
		console.log("connected");


		connection.query("CREATE DATABASE students", (err, result) => {
			if (err) throw err;
			console.log("db created");
		});
		// USE students;
		// CREATE TABLE students (id VARCHAR(20) PRIMARY KEY, name TEXT NOT NULL, submission_time TEXT NOT NULL, submit_id TEXT NOT NULL, report_id TEXT NOT NULL, obtained_marks INTEGER);

	});
*/








//var http = require("http");
//var fs = require("fs");
//var url = require("url");
var bodyParser = require("body-parser");
var express = require("express");
var multer = require("multer");
var ejs = require("ejs");
var informations = require("./dbobject.js");


var app = express();

console.log("Hello world!");

app.listen(3306, () => {
	console.log("listening port 3000");
});


app.get("/", function(req, res) {
	res.sendFile(__dirname + "/frontend/studentlogin.html");
})

app.get("/teacher", function(req, res) {
	res.sendFile(__dirname + "/frontend/teacherlogin.html");
})



// set the view engine to ejs
app.set('view engine', 'ejs');
// teacher side
// well. that was disgusting. res.render("pathname", data) here filename(of the ejs file that i am rendering the data) should be index(probably for one is mandatory). and path should be ./views. and shouldn't write full path.
// app.get("/", (req, res) => {
// 	var str = "asdfasdf";
// 	res.render('index.ejs', { hudai: "asdf;asldkjf" });
// });


app.get('/', (req, res) => {
	// render method takes two parameters
	// first parameter should be the .ejs file
	// second parameter should be an object
	// which is accessible in the .ejs file  
	// this .ejs file should be in views folder 
	// in the root directory.
	res.render('index', {
		firstName: "Geeks,",
		lastName: "A Computer Science Portal",
		hudai: "asdfasdfasdf"
	});
})





// use res.render to load up an ejs view file

app.post("/teacher", (bodyParser.urlencoded({ extended: false })),
	(req, res) => {
		var teacherpassword = "123";
		if (req.body.password === teacherpassword) {

			ejs_path = __dirname + "/views/index.ejs";
			res.render(ejs_path);

		}
	});







// student side
var query = "";
var submitid = "";

app.post("/student", (bodyParser.urlencoded({ extended: false })),
	(req, res) => {
		query = "INSERT INTO students (id, name, submission_time, report_id) VALUES (" + req.body.id + ", " + req.body.name + ", ";
		submitid = req.body.id + "_" + req.body.name;
		res.sendFile(__dirname + "/frontend/studenthome.html");
	});

// saving in storage
var storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "./submission");
	},
	filename: (req, file, callback) => {
		var time = new Date();
		query = query + submitid + ", " + time + ", ";
		callback(null, submitid);
	}
});
var upload = multer({ storage: storage }).single("report");

// "The <NAME> you use in multer's upload.single(<NAME>) function must be the same as the one you use in <input type="file" name="<NAME>" ...>" --> took me hours to fix this

app.post("/uploadfile", (req, res) => {
	upload(req, res, (err) => {
		console.log(query);
		if (err) { res.end("error uploading file"); }
		res.end("uploaded successfully");
	}
	);
});






//download file 

app.get("/download", (req, res) => {
	var path = __dirname + "/submission/";
	res.download(path + "1234_ef_1658565415752", (err) => {
		if (err) { res.end("error") };
	});
});



console.log(query);