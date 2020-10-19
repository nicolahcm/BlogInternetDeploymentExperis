var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    PostsModel = require('./api/models/postsModel'), //created model loading here
    UsersModel = require('./api/models/usersModel'), // * These ARE NECESSARY. It threw me an error of model schema.
    CommentsModel = require('./api/models/commentsModel'),
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


var routesPosts = require('./api/routes/postsRoutes'); //importing route (only for posts)
routesPosts(app); //register the route

var routesComments = require('./api/routes/commentsRoutes'); // Importing route (only for comments)
routesComments(app);

var routesUsers = require('./api/routes/usersRoutes');
routesUsers(app);


app.listen(port);


console.log('blog RESTful API server started on: ' + port);