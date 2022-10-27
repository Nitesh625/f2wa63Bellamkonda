var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next)
 {

  var value1 = Math.random() *15;

  var value2 = Math.random() *15;

  var value3 = Math.random() *15;

  

  var tangent = Math.atan2(value1);

  var tanh = Math.atanh(value2);

  var cb= Math.cbrt(value3);

  

  res.render('computation', { title: 'Nitesh Bellamkonda',

  value1:value1,

  value2:value2,
  value3:value3,

  

  tangent:tangent,

  tanh:tanh,

  cb:cb

 

});

});



module.exports = router;