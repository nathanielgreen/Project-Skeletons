const express = require("express");
const port = 8080;
const app = express();

 app.use('/', express.static(__dirname + '/public'));
 app.use('/*', express.static(__dirname + '/public/index.html'));

 app.get('*', function(req, res) {
  res.sendfile('/public/index.html');
});

 app.listen(port, function(error) {
   if (error) {
     console.error(error);
   } else {
     console.log("Server started: " + port);
   }
 });
