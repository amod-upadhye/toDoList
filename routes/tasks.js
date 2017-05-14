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


// Create GET Request for one task
router.get('/tasks/:id', function(req,res,next){
	// display One Task
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, task){
		if(err){
			res.send(err); // display error if there is one
		}
		else{
			res.json(task); // send tasks as JSON output
		}
	});
});

router.post('/task', function(req,res,next){
	// Create task from body
	var task = req.body;
	
	// check if task is valid 
	if(!task.title || (task.isDone + '')){
		res.status(400);
		res.json({
			"error" : "Bad Data"
		});
	}else{
		db.tasks.save(task, function(err, task){
			if(err){
			res.send(err); // display error if there is one
			}
			else{
			res.json(task); // send tasks as JSON output
			}
		});
	}
});

// Delete a task
router.delete('/tasks/:id', function(req,res,next){
	// delete this task
	db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},function(err, task){
		if(err){
			res.send(err); // display error if there is one
		}
		else{
			res.json(task); // send tasks as JSON output
		}
	});
});

// Update TASK
router.put('/tasks/:id', function(req,res,next){
	var task = req.body;
	var updTask = {};
	
	if(task.isDone){
		updTask.isDone = task.isDone;
	}
	if(task.title){
		updTask.title = task.title;
	}
	if(!updTask){
		res.status(400);
		res.json({
			"error" : "Bad Data"
		});
	}else{
	db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, task){
		if(err){
			res.send(err); // display error if there is one
		}
		else{
			res.json(task); // send tasks as JSON output
		}
		
	});}
});
//Export router variable so it can be accessed from outside
module.exports = router;