import * as types from './mutation-types';

export default {
    // 载荷应该是一个对象(第二个参数)，使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [types.ADD_TODO](state, {id, text}) {
        state.todos.push({
            id,
            text,
        });
    },
    [types.INCREMENT](state, number) {
        // 变更状态
        state.count += number;
    },
};
