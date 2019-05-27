const express = require('express');
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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public'));

    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    debug(`Listening on port ${chalk.green(port)}`);
});