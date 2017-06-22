var express = require('express');
var path = require('path');
var app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, () => console.log('listening on 8080'));
