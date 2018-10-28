const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")
let fs = require('fs')
const app = express()  // make express app
const port = process.env.PORT||8081

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
 res.render("Index.ejs")
})
app.get("/Index", function (req, res) {
  res.render("Index.ejs")
 })
 
// 4 http GET /temperature-converter
app.get("/temperature-converter", function (req, res) {
 res.render("temperature-converter.ejs")
})
// http GET/about
app.get("/AboutUs", function (req, res) {
  res.render("AboutUs.ejs")
 })

// 4 http GET /contact
app.get("/Contactus", function (req, res) {
 res.render("ContactUs.ejs")
})

 



// 5 handle valid POST request
app.post("/contact-me", function (req, res) {
  var api_key = '68495047adbad379d948232cd7fa7453-4836d8f5-2a1726d3';
  var domain = 'sandbox4619326f35024c54be0ec211948e41ab.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
   
  var data = {
    from: 'cal App user<postmaster@sandbox1efc7e9a2bb247e89ea29eaaa62ff931.mailgun.org>',
    to: 'venkatakhil.pendem@gmail.com',
    subject: req.body.firstname + " Sent you a message",
    text: req.body.subject
  };
   
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if(!error){
      res.send("Mail sent");
    }
    else{
      res.send("Not send");
    }
  });


 })


// 6 respond with 404 if a bad URI is requested
app.get(function (req, res) {
 res.render("404")
})

// Listen for an application request on designated port
app.listen(port, function () {
 console.log('Web app started and listening on http://localhost:' + port)
})