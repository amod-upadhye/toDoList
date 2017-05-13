//index file
var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
	res.send('INDEX PAGE');
});

//Export router variable so it can be accessed from outside
module.exports = router;