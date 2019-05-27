import Vue from 'vue';
const basePath = process.env.VUE_APP_API + 'todos';

let todos = {
    get() {
        return Vue.axios
            .get(basePath)
            .then(response => {
                return Promise.resolve(response);
            })
            .catch (error => {
                return Promise.resolve(error);
            });
    },
    post(item) {
        return Vue.axios
            .post(`${basePath}`, item)
            .then(response => {
                return Promise.resolve(response);
            })
            .catch (error => {
                return Promise.resolve(error);
            });
    },
    put(item) {
        return Vue.axios
            .put(`${basePath}/${item._id}`, item)
            .then(response => {
                return Promise.resolve(response);
            })
            .catch (error => {
                return Promise.resolve(error);
            });
    },
    remove(itemId) {
        return Vue.axios
            .delete(`${basePath}/${itemId}`)
            .then(response => {

            })
            .catch (error => {
                return Promise.resolve(error);
            });
    }
};

export default todos;
