var express = require('express');
var router = express.Router();
var path = require('path');
var qr = require('qr-image');

router.get('/', function(req, res, next) {
  console.log('ia m in activities')
  //res.sendFile(path.join(__dirname,'../','public/activities.html'));
  var qr_buf = qr.imageSync('I love QR!', { type: 'png' });
  res.render('image', { srcString: 'data:image/gif;base64,'+qr_buf.toString('base64') });
});


module.exports = router;