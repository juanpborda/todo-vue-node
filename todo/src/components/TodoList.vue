<template>
    <v-layout row justify-center>
        <v-flex xs6>
            <v-card>
                <v-toolbar color="light-blue darken-4">
                    <TodoSearch></TodoSearch>
                </v-toolbar>
                <v-list two-line>
                    <template v-for="(item, index) in todos">
                        <TodoItem :key="index" :item="item"></TodoItem>
                        <v-divider v-if="index + 1 < todos.length" :key="`divider-${index}`"></v-divider>
                    </template>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import TodoSearch from "@/components/TodoSearch";
import TodoItem from "@/components/TodoItem";
export default {
    components: {TodoItem, TodoSearch},
    data() {
        return {
        }
    },
    computed: {
        todos() {
            return this.$store.getters['todos/all'];
        }
    },
    created() {
        this.$store.dispatch('todos/get');
    }
};
</script>

<style>

</style>