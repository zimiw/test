
var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/:name', function (req, res) {
    var time = new Date();
    var videoName = req.params.name;
    console.log(videoName)
    console.log("-------点击查询下载" + time.getFullYear() + "/" + time.getMonth() + "/" + time.getDate() + "/" + time.getHours() + "/" + time.getMinutes() + "/" + time.getSeconds() + "-------");
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    var rs = fs.createReadStream(path.join(__dirname,'../public/videos/',videoName) + '.mp4');
    rs.pipe(res);
 
    rs.on('end', function () {
        res.end();
        console.log('end call');
    });
});

module.exports = router;