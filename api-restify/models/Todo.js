const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const TodoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        required: true
    }
});

mongoose.plugin(timestamp,  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

const Todo = mongoose.model('Todo', TodoSchema, 'todos');

module.exports = Todo;