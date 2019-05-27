const express = require('express');
const serverless = require('serverless-http');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const todos = require('./routes/api/todo');

app.use('/api/todos', todos);

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
    app.use('/.netlify/functions/server', router);  // path must route to lambda

    module.exports = app;
    module.exports.handler = serverless(app);
} else {
    app.listen(port, () => {
        debug(`Listening on port ${chalk.green(port)}`);
    });
}

module.exports = app;
module.exports.handler = serverless(app);