var http = require('http');
var api = require('./weather-api')
var url = require('url');

//create a server object:
http.createServer(async function (req, res) {
  var reqUrl = url.parse(req.url, true);

  // Check the URL path
  if (reqUrl.pathname === '/index') {
    var datas =  await api.queryData();
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<html><body><h1>Weather Data</h1>');
    res.write('<table border="1"><tr><td>位置</td><td>預測時間</td><td>預測內容</td></tr>');

    datas.forEach(function (data) {
      const htmlTable =[  
        '<tr>',
        '<td>' + data.location_name + '</td>' ,
        '<td>' + data.data_time + '</td>'  ,
        '<td>' + data.data_value + '</td>', 
        '</tr>'
        ].join('\n');
      res.write(htmlTable);
    });

    res.write('</table>');

    res.end(); // End the response

  

  } else {
    res.write('Hello World!'); // Default response
  }

  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080



var cron = require('node-cron');
cron.schedule('*/30 12 * * * *', () => {
  api.getForecast();
});
