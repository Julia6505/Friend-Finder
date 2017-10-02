var friendsData = require("../data/friends");

console.log(friendsData);
//this will bring a viewable page of the friends user data in JSON format
module.exports = function(app) {

    app.post("/api/friends", function(req, res) {
     friendsData.push(req.body);
     console.log(friendsData)
    });

};


