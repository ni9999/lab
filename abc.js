const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
const PORT = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

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

// Start the server
app.listen(PORT, err => {
	err ?
		console.log("Error in server setup") :
		console.log("Server listening on Port", PORT)
});