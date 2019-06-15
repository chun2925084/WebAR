var express = require('express');
var app = express();
 
app.use(express.static('dist'));
 
app.get('/camera.html', function (req, res) {
   res.sendFile( __dirname + "/"+ "camera.html" );
})
 
app.get('/process_get', function (req, res) {
 
   // 輸出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(process.env.PORT||8082, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("build success")
 
})