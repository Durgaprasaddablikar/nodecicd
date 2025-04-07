// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Server running!');
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports = server;

