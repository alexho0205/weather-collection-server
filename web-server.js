var http = require('http');
var api = require('./weather-api')

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

var cron = require('node-cron');
  cron.schedule('*/30 * * * * *', () => {
  api.getForecast();
});
