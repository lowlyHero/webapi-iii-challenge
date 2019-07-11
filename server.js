const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h1>Sanity == Good</h1>`)
});

function logger(req, res, next) {
  timestamp = new Date().now();
  console.log(`${req.method} ${req.url} ${timestamp}`);
  next();
};

module.exports = server;
