<template>
    <v-dialog
            v-model="dialog"
            max-width="680"
            persistent
    >
        <v-card>
            <v-card-title class="headline">Edit todo?</v-card-title>

            <v-card-text>
                <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                >
                    <v-text-field label="Description"  required flat solo light
                                  v-model="item.description"></v-text-field>
                </v-form>
            </v-card-text>


            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                        color="green darken-1"
                        flat="flat"
                        @click="confirm(item)"
                >
                    Save
                </v-btn>

                <v-btn
                        color="green darken-1"
                        flat="flat"
                        @click="cancel()"
                >
                    Cancel
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'TodoItemDialog',
    props: ['item', 'cancel', 'confirm'],
    data() {
        return {
            valid: null
        };
    },
    computed: {
        dialog() {
            return !!this.item;
        }
    }
};
</script>

<style>

</style>
