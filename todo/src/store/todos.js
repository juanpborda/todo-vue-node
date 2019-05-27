import Vue from 'vue';
import Repository from '@/repository/index';

export default {
    namespaced: true,
    // -----------------------------------------------------------------
    state: {
        todos: []
    },
    // -----------------------------------------------------------------
    getters: {
        all: state => state.todos
    },
    // -----------------------------------------------------------------
    mutations: {
        setTodos: (state, todos) => {
            Vue.set(state, 'todos', todos);
        },
        addTodo: (state, todo) => {
            state.todos.push(todo);
            Vue.set(state, 'todos', state.todos);
        },
        updateTodo: (state, todo) => {
            const idx = state.todos.findIndex(e => e._id === todo._id);
            Vue.set(state.todos, idx, todo);
        },
        removeTodo: (state, id) => {
            const idx = state.todos.findIndex(e => e._id === id);
            if (idx > -1) {
                Vue.delete(state.todos, idx);
            }
        }
    },
    // -----------------------------------------------------------------
    actions: {
        get: context => {
            return Repository.todos.get()
                .then(response => {
                    context.commit('setTodos', response.data);
                    return Promise.resolve(context.state.todos);
                })
        },
        post: (context, todo) => {
            return Repository.todos.post(todo)
                .then(response => {
                    context.commit('addTodo', response.data);
                    return Promise.resolve(context.state.todos);
                })
                .catch(error => {
                    console.log('failed: ', error);
                });
        },
        update: (context, todo) => {
            return Repository.todos.put(todo)
                .then(response => {
                    context.commit('updateTodo', todo);
                    return Promise.resolve(context.state.todos);
                })
                .catch(error => {
                    console.log('failed: ', error);
                });
        },
        remove: (context, id) => {
            return Repository.todos.remove(id)
                .then(response => {
                    context.commit('removeTodo', id);
                    return Promise.resolve(context.state.todos);
                })
                .catch(error => {
                    console.log('failed: ', error);
                });
        }
    }
};
