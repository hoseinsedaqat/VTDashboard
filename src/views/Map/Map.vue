<template>
  <section>
    <Header />
    <!-- Contents -->
    <section id="contents">
      <v-container fluid>
        <v-row>
          <v-col cols="12" lg="12" xl="12" sm="12" md="12">
            <section class="mainContent">
              <h3 class="my-1">Google Maps</h3>
              <GmapMap
                :center="{ lat: 27.1832, lng: 56.2666 }"
                :zoom="8"
                style="width: 100%; height: 600px"
              />
            </section>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Map",
});
</script>

<style></style>
