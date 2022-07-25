// database connection

var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "127.0.0.1",
	port: "3306",
	user: "gitpod",
	password: "newpassword"
});


connection.connect((err) => {
	if (err)
		throw err;
	console.log("connected");

	connection.query("CREATE DATABASE IF NOT EXISTS students", (err, result) => {
		if (err) throw err;
		console.log("db created");
	});

	connection.query("USE students", (err, result) => {
		if (err) throw err;
		console.log("using db - students");
	});

	connection.query("CREATE TABLE IF NOT EXISTS students (id VARCHAR(20) PRIMARY KEY, name TEXT NOT NULL, submission_time TEXT NOT NULL, submit_id TEXT NOT NULL, obtained_marks INTEGER)", (err, result) => {
		if (err) throw err;
		console.log("table created");
	});


	// 		CREATE TABLE students (
	//             id VARCHAR(20) PRIMARY KEY, 
	//             name TEXT NOT NULL, 
	//             submission_time TEXT NOT NULL, 
	//             submit_id TEXT NOT NULL, 
	//             obtained_marks INTEGER
	// );

});




















// set up

var bodyParser = require("body-parser");
var express = require("express");
var multer = require("multer");
var ejs = require("ejs");
const { urlencoded } = require("body-parser");

var app = express();

const port = process.env.PORT || 3000


app.listen(3000, () => {
	console.log("listening port 3306");
});












// login

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/frontend/studentlogin.html");
})

app.get("/teacher", function (req, res) {
	res.sendFile(__dirname + "/frontend/teacherlogin.html");
})














// teacher side

// set the view engine to ejs
app.set('view engine', 'ejs');

// well. that was disgusting. res.render("pathname", data) here filename(of the ejs file that i am rendering the data) should be index(probably for one is mandatory). and path should be ./views. and shouldn't write full path.
// also we have to pass and show together
// use res.render to load up an ejs view file + passing data to ejs

connection.query("USE students");


var informations;



app.post("/teacher", (bodyParser.urlencoded({ extended: false })), (req, res) => {
	var teacherpassword = "123";
	if (req.body.password === teacherpassword) {
		connection.query("SELECT * FROM students", function (err, result, fields) {
			if (err) throw err;
			informations = result;
			// why and how 
			// local variable has highest precedence over any other
			// so if i render the element from the if statement. informations = result wouldn't be updated when the object will be rendered
			// but we can access mother parameter from a child parameter from a function
			res.render('index', { students: informations });
		});
	}
});

















// student side

var query = "";
var submitid = "";

app.post("/student", (bodyParser.urlencoded({ extended: false })), (req, res) => {
	query = "INSERT INTO students (id, name, submission_time, submit_id) VALUES ('" + req.body.id + "', '" + req.body.name + "', '";
	submitid = req.body.id + "" + "_" + req.body.name;
	res.sendFile(__dirname + "/frontend/studenthome.html");
});

// saving in storage
var storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "./submission");
	},
	filename: (req, file, callback) => {
		var time = new Date();
		query = query + time + "', '" + submitid + "')";
		callback(null, submitid);
	}
});
var upload = multer({ storage: storage }).single("report");

// "The <NAME> you use in multer's upload.single(<NAME>) function must be the same as the one you use in <input type="file" name="<NAME>" ...>" --> took me hours to fix this

app.post("/uploadfile", (req, res) => {
	upload(req, res, (err) => {
		if (err) { res.end("error uploading file"); }
		
		// running the query to insert a row in db
		connection.query(query, (err, result) => {
			if (err) throw err;
			console.log("inserted a student data row");
		});

		res.end("uploaded successfully");
	});
});


















// teacher side 

//download file 

app.get("/download/:filename", (req, res) => {
	var path = __dirname + "/submission/" + req.params.filename;
	console.log(path);
	res.download(path, (err) => {
		if (err) { res.end("error") };
	});

});







//giving marks
app.post("/givemarks/:submit", bodyParser.urlencoded({ extended: false }), (req, res) => {

	// making another query to update marks
	marksquery = "update students set obtained_marks = " + req.body.marks + " where id = " + req.params.submit;
	connection.query(marksquery, (err, result) => {
		if (err) throw err;
		console.log("marks given");
	});

	//redirecting to page to view updates
	//res.render("index", { students: informations });
	res.redirect("back");
});


