var path = require("path");
var friendsArray = require ('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res){
        res.json(friendsArray);
    });

      app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests a.
    friendsArray.push(req.body);
      res.json(true);
  });

};
