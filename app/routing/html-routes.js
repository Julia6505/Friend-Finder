var express = require("express");
var path = require("path");


//html page routes; when user clicks on links, this is how the server knows where to go
module.exports = function(app) {

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname,"../public/home.html"));
    });
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/api/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.js"));
    });
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
 
};