const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const server = express();

// Global Middleware
server.use(express.json());
server.use(helmet());
server.use(logger('dev'));

//custom middleware
server.use(reqLogger);

server.get('/', (req, res) => {
  res.send(`<h2>Sanity Check</h2>`)
});

// the next param is a function that points to the next middleware
// calling next() will signal that middleware has finished & should call next middleware function

function reqLogger(req, res, next) {
  timestamp = new Date().now();
  console.log(`${req.method} ${req.url} ${timestamp}`);
  next();
};

function validateUserId(req, res, next) {
  next();
};

function validateUser(req, res, next) {
  next();
};

function validatePost(req, res, next) {
  next();
};

//error handling
server.use((error, req, res, next) => {
  res.status(400).json({
    message: 'Bad request friend! Try again.', error
  });
})

module.exports = server;
