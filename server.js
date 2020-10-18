var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    //    PostModel = require('./api/models/postsModel'), //created model loading here
    //    UserModel = require('./api/models/usersModel'),
    //    CommentModel = require('./api/models/commentsModel'),
    bodyParser = require('body-parser');


// What are these 3 objects??? 
//console.log("postsModel", PostModel);
//console.log("commentsModel", CommentModel);
//console.log("usersModel", UserModel);


const urlString = 'mongodb+srv://nicola1234:nicola1234@blogexperiscluster.al9lg.mongodb.net/BlogExperis?retryWrites=true&w=majority';


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(urlString);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/blogRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('blog RESTful API server started on: ' + port);