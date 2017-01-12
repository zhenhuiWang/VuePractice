// 组装模块并导出store

const Vue = require('vue');
const Vuex = require('vuex');

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});
