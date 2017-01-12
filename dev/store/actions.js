import * as types from './mutation-types';

export default {
    // 提交mutation, 任何由mutation导致的状态变更都应该在此刻完成。
    addTodo({commit}, {id, text}) {
        commit(types.ADD_TODO, {
            id,
            text,
        });
    },

    increment({commit}) {
        commit(types.INCREMENT, 10);
    },
};
