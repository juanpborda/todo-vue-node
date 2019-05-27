<template>
    <v-text-field
            append-icon="check"
            class="mx-3"
            flat
            label="Add task"
            prepend-inner-icon="search"
            solo-inverted
            v-model="todo.description"
            v-on:keyup.enter="submit"
    ></v-text-field>
</template>

<script>
export default {
    name: 'TodoSearch',
    data() {
        return {
            todo: {
                description: '',
                completed: false
            }
        };
    },
    methods: {
        submit() {
            this.$store.dispatch('todos/post', this.$data.todo)
                .finally(() => {
                    this.$data.todo.description = '';
                });
        }
    }
}
</script>

<style>
</style>