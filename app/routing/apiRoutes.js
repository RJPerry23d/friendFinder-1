var path = require("path");
var friendsArray = require ('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res){
        res.json(friendsArray);
    });

      app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    friendsArray.push(req.body);
      res.json(true);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsArray = [];

    console.log(tableData);
  });
};
