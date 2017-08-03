var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/landingPage.html'));
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/featured.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/all', (req, res) => {
  res.sendFile(path.join(__dirname + '/all.html'));
});

app.listen(3034, () => console.log('listening on 3034'));
