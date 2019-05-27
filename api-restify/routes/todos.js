const errors = require('restify-errors');
const Todo = require('../models/Todo');

module.exports = (server) => {
    server.get('/api/todos', async(req, res, next) => {
        try {
            const todos = await Todo.find({});
            res.send(todos);
            next();
        } catch (err) {
            return next(new errors.InvalidContentError(err));
        }
    });

    server.post('/api/todos', async(req, res, next) => {
        if (!req.is('application/json')) {
            return next(new errors.InvalidContentError('JSON REQ'));
        }

        const { description } = req.body;

        const todo = new Todo({
            description,
            completed: false
        });

        try {
            const newTodo = await todo.save();
            res.send(newTodo);
            next();
        } catch (err) {
            return next(new errors.InternalError(err.message));
        }

    });

    server.put('/api/todos/:id', async(req, res, next) => {
        if (!req.is('application/json')) {
            return next(new errors.InvalidContentError('JSON REQ'));
        }

        try {
            const todo = await Todo.findOneAndUpdate({_id: req.params.id}, req.body);
            res.send(201);
            next();
        } catch (err) {
            return next(
                new errors.ResourceNotFoundError(
                    `Todo not found with id ${req.params.id}`
                )
            );
        }
    });

    server.del('/api/todos/:id', async(req, res, next) => {
        if (!req.is('application/json')) {
            return next(new errors.InvalidContentError('JSON REQ'));
        }

        try {
            const todo = await Todo.findOneAndDelete({_id: req.params.id});
            res.send(204);
            next();
        } catch (err) {
            return next(
                new errors.ResourceNotFoundError(
                    `Todo not found with id ${req.params.id}`
                )
            );
        }
    });
};