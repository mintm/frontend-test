/**
Main node.js server file
*/

var express = require('express'),
app = express();

// Serve statics files
app.use(express.static(__dirname + '/public'));

// Default
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/app/index.html');
});

var port = 8081;
app.listen(port, () => {
  console.info('[server] Listening on port ' + port);
});
