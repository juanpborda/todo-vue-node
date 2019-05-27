import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading, {
    loader: 'bars',
    color: '#00b0ff',
    backgroundColor: '#333',
    width: 128,
    height: 128
});
