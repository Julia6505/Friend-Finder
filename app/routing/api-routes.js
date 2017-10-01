var express = require("express");
var friendsData = require("../data/friends");

//this will bring a viewable page of the friends user data in JSON format
module.exports = function(app) {

app.get("/api/friends", function (req,res) {
    res.json(friendsData);
    });


app.post("/api/friends", function(req,res) {
    console.log("Hey there!")
    //code for making matches occurs here
});

};