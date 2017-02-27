var express = require('express');
var app = express();
var DbConnection = require('./configuration');//requiring the whole folder so configData can be used
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));//ensures that it can handle URL encoded data.
app.use(bodyParser.json());//parses JSON out of the HTTP request
var port = process.env.port || 3000;


app.use('/assets', express.static('./public'));

    app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Methods', 'GET, HEAD, PUT, OPTIONS, POST, DELETE');
    response.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.options('*', cors());
app.use(cors());

app.set('view engine', 'ejs');

//database connection and init seed data
mongoose.connect(DbConnection.DbConnectionString());
setupController(app);
// apiController(app);
app.use(apiController);

app.listen(port);
