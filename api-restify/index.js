const restify = require('restify');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const config = require('./config');
const corsMiddleware = require('restify-cors-middleware')

const server = restify.createServer();

// Middlewares
server.use(restify.plugins.bodyParser());
const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ['http://localhost:8080']
});

server.pre(cors.preflight);
server.use(cors.actual);

server.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true});
});

mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

db.on('error', (err) => console.log(err));

db.once('open', () => {
    require('./routes/todos')(server);
    debug(`Server started on port ${config.PORT}`);
});