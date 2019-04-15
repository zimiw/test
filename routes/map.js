
var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');
let {findAll,insertOne,find} = require('../db')


router.get('/', function (req, res) {
    console.time('getmap')
    
    console.timeEnd('getmap');
    let keys = Object.keys(req)
    res.send(JSON.stringify(keys));
});
router.get('/', function(req, res, next) {
  console.log('what');
  findAll('ladies',{},(err,result)=>{
  	console.log(result.length)
  	res.send(result[0]);
  });
  //res.render('index', { title: 'Express' });
});

router.get('/add',function(req,res,next){
	console.log('in add');
	var lady = {
	"num": 1,
	"name":"璎珞",
	"nick_name":"璎珞",
	"age":20,
	"height":165,
	"weight":60,
	"size":"36c",
	"intruduce":"皮肤白皙",
	"thumpUrl":[],
	"imgUrls":[],
	"services":["GM","YYY","KJ","MY","SW","ZF","SW","69","AA"],
	"charge":["600/P/60M","1000/PP/90M","2000/BY"],
	"range":4,
	"comments":[{
		"name":"xiaogg",
		"say":"very good",
		"time":"2018.10.12 21:20:50"
	}],
	"phones":[],
	"address":"上海市静安区安远路84号",
	"qq":[],
	"wechat":[],
	"state": "stop"
};
	insertOne('ladies',lady,(err,result)=>{
		if(err){
			console.log(err)
		}
		console.log(result.insertedId)
		res.send(result.insertedId);
	});
});
router.get('/:name',function(req,res,next){
	//console.log(req)
	console.log(req.params.name);
	let par = {
		'name': req.params.name
	}
	find('ladies',par,(err,result)=>{
		console.log(result)
		console.log(result.length);
		res.send('finde '+ result.length + 'records')
	})
})

module.exports = router;