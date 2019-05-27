const app = require('./server');
const chalk = require('chalk');
const debug = require('debug')('app');
const port = process.env.PORT || 5000;

app.use('/api/todos', app.todos);
app.listen(port, () => {
    debug(`Listening on port ${chalk.green(port)}`);
});