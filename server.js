//main server file

var express = require('express'); // Import Express from node Module

var path = require('path'); // get help with paths

var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

// Initialize Express for the app
var app = express();

// Set Views Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile); // Parse HTML

//set Static folder
app.use(express.static(path.join(__dirname,'client')));
//Testing the use of latest angular release


//Body parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set Routes
app.use('/',index);
app.use('/api',tasks);

app.post('/task', (req, res) => {
  console.log('Hellooooooooooooooooo!');
})
//Listen to server on port
var port = 8080;
app.listen(port, function()
				{console.log("server started on port "+ port);
				}
				);