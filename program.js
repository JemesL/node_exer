var fs = require('fs')
var http = require('http')
// var buffer = fs.readFileSync('/Users/JL/Documents/javascripting/content.txt')
//
// console.log(buffer)

// fs.readFile('/Users/JL/Documents/javascripting/content.txt','utf8',function (err,data){
//   if (err) throw err;
//   console.log(data);
// })

// var text = fs.readFileSync('/Users/JL/Documents/javascripting/content.txt','utf8')
// console.log(text);
// fs.readdir('/Users/JL/Documents/javascripting/',function(err, list){
//   if (err) throw err;
//   console.log(list);
// })
//
// console.log('readFile begin');

// var mymodule = require('./mymodule.js')
// mymodule(4)

// var options = {
//   hostname: 'www.baidu.com',
//   port: 80,
//   path: '/upload',
//   method: 'POST'
// };
//
// var req = http.request(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
// });
//
// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });
//
// write data to request body
// req.write('data\n');
// req.write('data\n');
// req.end();

// http.get("http://www.google.com/index.html", function(res) {
//   console.log("Got response: " + res.statusCode);
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });

var concat = require('concat-stream')
// var fs = require('fs')

var read = fs.createReadStream('readme.md')
var write = concat(function(data) {})

read.pipe(write)
