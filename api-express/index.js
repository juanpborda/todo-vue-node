const express = require('express');
const serverless = require('serverless-http');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const todos = require('./routes/api/todo');

app.use('/.netlify/functions/index', todos);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
module.exports.todos = todos;