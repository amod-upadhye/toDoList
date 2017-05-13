//main server file

var express = require('express'); // Import Express from node Module

var path = require('path'); // get help with paths

var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

// Initialize Express for the app
var app = express();

// Set Views Engine
app.set('views',path.join('__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').render); // Parse HTML

//set Static folder
app.use(express.static(path.join('__dirname','client')));

//Body parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));