<template lang="html">
    <div>
        <input v-model="newTodoText" type="text" placeholder="Add a todo" @keyup.enter="addTodo({id:4,text:newTodoText})">
        <ul>
            <li v-for="(todo, index) in todos">
                {{todo.text}}
                <button type="button" name="button" @click="remove(index)">X</button>

            </li>

        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
    data: () => {
        return{
            newTodoText:'',
        };
    },
    computed: {
        ...mapGetters([
            'todos',
        ]),

    },
    methods: {
        ...mapActions([
            'addTodo'
        ]),
        remove: function(index) {
            this.todos.splice(index, 1);
        }
    }
}
</script>

<style lang="css">
</style>
