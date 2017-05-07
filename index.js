var express = require('express');
var app = express();
app.enable('trust proxy');
app.get('/', function(req, res) {
  res.send({
    ipaddress: req.ip,
    software: req.headers['user-agent'].split('(')[1].split(')')[0],
    language: req.headers['accept-language'].split(',')[0]
  });

});

app.listen(8080, function() {
  console.log('listening on port 8080');
});
