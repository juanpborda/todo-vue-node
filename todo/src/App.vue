<template>
  <v-app dark>
    <TodoNav></TodoNav>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <TodoFooter></TodoFooter>
  </v-app>
</template>

<script>
import TodoNav from '@/components/TodoNav';
import TodoFooter from "@/components/TodoFooter";

export default {
  data() {
    return {
      drawer: false
    };
  },
  name: 'App',
  components: { TodoFooter, TodoNav }
}
</script>
