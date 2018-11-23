
var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function (req, res) {
    console.time('getmap')
    
    console.timeEnd('getmap');
    let keys = Object.keys(req)
    res.send(JSON.stringify(keys));
});

module.exports = router;