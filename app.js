const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")
let fs = require('fs')
const app = express()  // make express app


// ADD THESE COMMENTS AND IMPLEMENTATION HERE
// 1 set up the view engine
// 1 set up the view engine
app.set("views", path.resolve(__dirname, "views")) // path to views
app.set("view engine", "ejs") // specify our view
// 2 include public assets and use bodyParser
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3 set up the logger
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));


// 4 handle valid GET requests
app.get("/", function (req, res) {
 //res.sendFile(path.join(__dirname + '/assets/index.html'))
 res.render("index.ejs")
})
app.get("/Index", function (req, res) {
  res.render("Index.ejs")
 })
 app.get("/AboutUs", function (req, res) {
  res.render("AboutUS")
 })
 
// 4 http GET /tic-tac-toe
app.get("/temperature-converter", function (req, res) {
 res.render("temperature-converter")
})

// 4 http GET /about
app.get("/ContactUs", function (req, res) {
 res.render("ContactUs.ejs")
})


// 5 handle valid POST request
app.post("/contact", function (req, res) {
 const name = req.body.inputname;
 const email = req.body.inputemail;
 const company = req.body.inputcompany;
 const comment = req.body.inputcomment;
 const isError = true;

 // setup e-mail data with unicode symbols
 const mailOptions = {
   from: '"Denise Case" <denisecase@gmail.com>', // sender address
   to: 'dcase@nwmissouri.edu, denisecase@gmail.com', // list of receivers
   subject: 'Message from Website Contact page', // Subject line
   text: comment,
   err: isError
 }

 // logs to the terminal window (not the browser)
 console.log('\nCONTACT FORM DATA: ' + name + ' ' + email + ' ' + comment + '\n');
 })


// 6 respond with 404 if a bad URI is requested
app.get(function (req, res) {
 res.render("404")
})

// Listen for an application request on designated port
app.listen(process.env.PORT, function () {
 console.log('Web app started and listening on http://localhost:')
})

