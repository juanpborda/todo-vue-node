<template>
    <v-layout row justify-center>
        <v-flex xs6>
            <v-card>
                <v-toolbar color="light-blue darken-4">
                    <TodoSearch></TodoSearch>
                </v-toolbar>
                <v-list two-line>
                    <template v-for="(item, index) in todos">
                        <TodoItem :edit="openDialog" :key="index" :item="item"></TodoItem>
                        <v-divider v-if="index + 1 < todos.length" :key="`divider-${index}`"></v-divider>
                    </template>
                </v-list>
            </v-card>
        </v-flex>
        <TodoItemDialog v-if="selectedItem" :item="selectedItem" :confirm="editItem" :cancel="closeDialog"></TodoItemDialog>
    </v-layout>
</template>

<script>
import TodoSearch from "@/components/TodoSearch";
import TodoItem from "@/components/TodoItem";
import TodoItemDialog from "@/components/TodoItemDialog";
export default {
    components: {TodoItemDialog, TodoItem, TodoSearch},
    data() {
        return {
            selectedItem: null,
            dialog: false
        }
    },
    methods: {
        openDialog(item) {
            this.selectedItem = {...item};
            this.dialog = true;
        },
        closeDialog() {
            this.selectedItem = null;
            this.dialog = false;
        },
        editItem(item) {
            this.$store.dispatch('todos/update', item)
                .then(() => {
                    this.closeDialog();
                });
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