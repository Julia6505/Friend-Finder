var express = require("express");
var bodyParser = require("body-parser");


//create express server and port
var app = express();
var PORT = 8080;

//allow the parsing of data
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require("./app/routing/html-routes")(app);
require("./app/routing/api-routes")(app);

app.listen(PORT, function(){
    console.log("App listening on local host" + PORT)
});
