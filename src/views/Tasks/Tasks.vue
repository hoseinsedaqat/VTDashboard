<template>
  <section>
    <Header />
    <!-- Contents -->
    <section id="contents">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <section class="mainContent">
              <!-- Todo Task -->
              <Todo />
            </section>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Todo from "./components/Todo.vue";
export default Vue.extend({
  name: "Tasks",
  components: {
    Todo,
  },
});
</script>
