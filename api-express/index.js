const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const app = express();

// middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const todos = require('./routes/api/todo');

app.use('/api/todos', todos);

app.get('/', (req, res) => {
    res.send('OK.');
});

app.listen(port, () => {
    debug(`Listening on port ${chalk.green(port)}`);
});