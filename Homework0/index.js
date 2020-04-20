var express = require('express');
var app = express();

app.use(express.static('src'));

var port = 3000

app.listen(port, function(){
    console.log("Server start on port: " + port);
});