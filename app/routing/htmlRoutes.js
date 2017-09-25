var path = require("path");

// if going thte survey it loads the survey page else it takes you to the home page

module.exports = function (app) {
    app.get('/survey', function(req, res){
        res.sendfile(path.join(__dirname + '/../public/survey.html'))
    });

    app.use(function(req, res){
        res.sendfile(path.join(__dirname + '/../public/home.html'))
    });
}