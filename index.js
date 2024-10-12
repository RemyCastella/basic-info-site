const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let path = __dirname;
  switch (req.url) {
    case '/':
      path += '/index.html';
      break;
    case '/about':
      path += '/about.html';
      break;
    case '/contact':
      path += '/contact-me.html';
      break;
    default:
      path += '/404.html';
      break;
  }
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(5000);
