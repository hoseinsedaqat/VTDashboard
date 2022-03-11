<template>
  <div>
    <!-- Create Content -->
    <section id="sideBar">
      <aside class="fixedPosition">
        <ul>
          <li v-for="(side, idx) in aside" :key="(side, idx)">
            <v-icon class="mx-1" color="#FFF">
              {{ side.icon }}
            </v-icon>
            <router-link :to="side.link"> {{ side.name }} </router-link>
          </li>
        </ul>
      </aside>

    </section>
    <!-- Mobile Header -->
    <div class="mobile-menu" style="display: none">
      <v-sheet
        dark
        height="50"
        width="100%"
        class="overflow-hidden"
        style="position: fixed; z-index: 1"
      >
        <v-container class="fill-height">
          <v-row class="d-flex justify-content-between">
            <v-btn class="mx-1" color="pink" dark @click.stop="drawer = !drawer">
              <v-icon>
                {{ "mdi-menu" }}
              </v-icon>
            </v-btn>
            <h3 class="mx-1">VT Dashboard</h3>
          </v-row>
        </v-container>

        <v-navigation-drawer
          v-model="drawer"
          fixed
          temporary
          style="background: linear-gradient(0deg, #389466, #42b883)"
        >
          <v-divider></v-divider>

          <v-list dense>
            <ul>
              <li v-for="(side, idx) in aside" :key="(side, idx)">
                <v-icon class="mx-1" color="#FFF">
                  {{ side.icon }}
                </v-icon>
                <router-link :to="side.link"> {{ side.name }} </router-link>
              </li>
            </ul>
          </v-list>
        </v-navigation-drawer>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import asideMenu from "@/Utils/Aside";
export default Vue.extend({
  name: "Header",
  data() {
    return {
      drawer: null,
      aside: asideMenu,
    };
  }
});
</script>
