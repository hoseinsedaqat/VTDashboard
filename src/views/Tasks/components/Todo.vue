<template>
  <v-card class="cardStyle">
    <h2 class="white">Write Tasks</h2>
    <div class="form-group">
      <input type="text" class="input-style white width-100 my-1" v-model="todo" />
      <button class="white my-1 btn" @click="addTask()">Add Task</button>
      <v-simple-table class="cardStyle white" v-if="fetchTasks.length !== 0">
        <template class="white">
          <thead>
            <tr>
              <th class="text-center white">#</th>
              <th class="text-center white">Task</th>
              <th class="text-center white">Task ID</th>
              <th class="text-center white">STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in fetchTasks" :key="(item, i)">
              <td class="text-center white">
                {{ i + 1 }}
              </td>
              <td class="text-center white">{{ item.todo }}</td>
              <td class="text-center white">{{ item.id }}</td>
              <td class="text-center white">
                <div class="d-flex">
                  <v-icon
                    @click="deleteTask(i)"
                    class="cursor__pointer"
                    style="color: red"
                    >{{ "mdi-delete" }}</v-icon
                  >
                  <v-icon
                    @click="updateTask(i)"
                    class="cursor__pointer mx-1"
                    style="color: skyblue"
                    >{{ "mdi-pen" }}</v-icon
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";
import { v4 as uuidv4 } from "uuid";
export default Vue.extend({
  data() {
    return {
      todo: "" as string,
      forUpdate: null,
    };
  },
  computed: {
    ...mapGetters(["fetchTasks"]),
    ...mapMutations(["REMAIN_TASK"]),
  },
  methods: {
    // Add and Update
    addTask() {
      if (this.forUpdate !== null) {
        this.$toast.info("Update Task Successfully");
        this.$store.dispatch("UPDATE_TODO", { id: this.forUpdate, newTask: this.todo });
        this.forUpdate = null;
      } else {
        this.$toast.success("Add Task Successfully");
        this.$store.dispatch("ADD_TODO", { id: uuidv4(), todo: this.todo });
      }
      this.todo = "";
    },
    // Delete
    deleteTask(idx: number) {
      this.$toast.error("Deleted Task Successfully");
      this.$store.dispatch("DELETE_TODO", idx);
    },
    // For Update Todo
    updateTask(idx: any) {
      this.todo = this.fetchTasks[idx].todo;
      this.forUpdate = idx;
    },
  },
  mounted() {
    this.REMAIN_TASK;
  },
});
</script>
