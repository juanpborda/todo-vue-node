const dotenv = require('dotenv').config();
const express = require('express');
const mongodb = require('mongodb');
const debug = require('debug')('app');

const router = express.Router();

// Create
router.post('/', async(req, res) => {
    const todos = await loadTodosCollection();
    const todo = {
        description: req.body.description,
        completed: false,
        created_at: new Date()
    };
    await todos.insertOne(todo);
    res.status(201).send(todo);
});
// Read
router.get('/', async(req, res) => {
    const todos = await loadTodosCollection();
    res.send(await todos.find({}).toArray());
});
// Update
router.put('/:id', async(req, res) => {
    const todos = await loadTodosCollection();
    debug(req.body);
    todos.updateOne({_id: new mongodb.ObjectID(req.params.id)}, {
        $set: {
            description: req.body.description,
            completed: req.body.completed
        }
    });
    res.status(201).send();
});
// Delete
router.delete('/:id', async(req, res) => {
    const todos = await loadTodosCollection();
    await todos.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadTodosCollection () {
    const uri = process.env.DB_HOST;
    const client = await mongodb.MongoClient.connect(uri, {useNewUrlParser: true});

    return client.db('todo-vue-node').collection('todos');
}

module.exports = router;