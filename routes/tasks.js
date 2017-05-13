//tasks file
var express = require('express');
var router = express.Router();

router.get('/tasks', function(req,res,next){
	res.send('TASK PAGE');
});

//Export router variable so it can be accessed from outside
module.exports = router;