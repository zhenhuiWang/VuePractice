// 可以认为是store的计算属性
export default {
    todos: state => state.todos,
    doubleCount(state) {
        return state.count * 2;
    },
};
