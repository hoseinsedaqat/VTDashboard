<template>
  <section>
    <Header />
    <!-- Contents -->
    <section id="contents">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <section class="mainContent">
              <UserContent/>
            </section>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import UserContent from './components/UserContent.vue'
export default Vue.extend({
  name: "User",
  components:{
    UserContent
  }
});
</script>