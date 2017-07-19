var http = require('http');


var fs = require('fs');

var server = new http.Server();
server.listen(8000);

server.on('request', function(request, response){
  // var url = require('url').parse(request.url);
  // if (url.pathname === '/test/1') {
  //
  // }
})
console.log('111');
console.log(http);
