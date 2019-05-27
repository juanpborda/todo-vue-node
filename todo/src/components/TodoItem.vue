<template>
    <v-list-tile :key="item._id" >
        <v-list-tile-action>
            <v-chip label small>{{item.created_at|formatDate}}</v-chip>

        </v-list-tile-action>

        <v-list-tile-content>
            <v-list-tile-title>
                <p :class="item.completed ? 'green--text strike--text' : 'light-blue--text'">{{item.description}}</p>
            </v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn icon ripple @click="completeItem(item)" v-on="on">
                        <v-icon v-if="!item.completed" color="green lighten-1">check</v-icon>
                        <v-icon v-if="item.completed" color="orange lighten-1">clear</v-icon>
                    </v-btn>
                </template>
                <span>Mark as {{item.completed ? 'incomplete' : 'complete'}}</span>
            </v-tooltip>
        </v-list-tile-action>

        <v-list-tile-action>
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn icon ripple v-on="on" @click.stop="edit(item)" :disabled="item.completed">
                        <v-icon color="blue lighten-1">edit</v-icon>
                    </v-btn>
                </template>
                <span>Edit</span>
            </v-tooltip>

        </v-list-tile-action>
        <v-list-tile-action>
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn icon ripple @click="deleteItem(item._id)" v-on="on">
                        <v-icon color="red lighten-1">delete</v-icon>
                    </v-btn>
                </template>
                <span>Remove</span>
            </v-tooltip>
        </v-list-tile-action>
    </v-list-tile>
</template>

<script>
export default {
    data() {
        return {
            dialog: false
        };
    },
    name: 'TodoItem',
    props: ['item', 'edit'],
    methods: {
        deleteItem(itemId) {
            this.$store.dispatch('todos/remove', itemId);
        },
        completeItem(item) {
            this.$store.dispatch('todos/update', {...item, completed: !item.completed});
        },
    }
}
</script>

<style scoped lang="scss">
    .strike--text {
        text-decoration: line-through;
    }
</style>