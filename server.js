var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
var app = express();
var server = process.env.PORT || 8080;

// EXPRESS
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// BODY-PARSER
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//Parse application/json
app.use(bodyParser.json());


app.listen(server, function () {
    console.log("App listening on PORT " + server);
});

