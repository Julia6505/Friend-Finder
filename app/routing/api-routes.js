var friendsData = require("../data/friends");

//this will bring a viewable page of the friends user data in JSON format
module.exports = function(app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
     
    });


    app.post("/api/friends", function(req, res) {
     friendsData.push(req.body);
    //  res.json(true);
    //  console.log(friendsData)
     
    });



};


