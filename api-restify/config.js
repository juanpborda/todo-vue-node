module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 5000,
    URL: process.env.BASE_URL || 'http://localhost:5000',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://todo-vue-node-145:vg5gCaB6jz7V84C@todo-vue-node-vkaxc.mongodb.net/todo-vue-node?retryWrites=true'
};