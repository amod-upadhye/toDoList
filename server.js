//main server file

var express = require('express'); // Import Express from node Module

var path = require('path'); // get help with paths

var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');