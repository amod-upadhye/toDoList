//tasks file
var express = require('express');
var router = express.Router();

//Connect to Mongo DB using MongoJS
var mongojs = require('mongojs');

// Connect to MongoDB
// TODO add UserName and Password support, there seems to be an issue with Mongo Authentication
var db = mongojs('mongodb://localhost:27017/todoListDB',['tasks']);

// Create GET Request for All tasks
router.get('/tasks', function(req,res,next){
	//res.send('TASK PAGE');
	// display all the tasks
	db.tasks.find(function(err, tasks){
		if(err){
			res.send(err); // display error if there is one
		}
		else{
			res.json(tasks); // send tasks as JSON output
		}
	});
});


// Create Get Request for one task
router.get('/tasks/:id', function(req,res,next){
	// display all the tasks
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, task){
		if(err){
			res.send(err); // display error if there is one
		}
		else{
			res.json(task); // send tasks as JSON output
		}
	});
});

//Export router variable so it can be accessed from outside
module.exports = router;