<template>
  <section>
    <Header />
    <!-- Contents -->
    <section id="contents">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <section class="mainContent">
              <h3 class="mx-2">Calendar</h3>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="12" sm="12" lg="12" xl="12">
                    <vc-calendar
                      is-dark
                      :attributes="attrs"
                      style="width: 100%; height: 50vh; z-index: 0"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="12" sm="12" lg="12" xl="12">
                    <p>
                      Hi! 👋 I'm Nathan, the creator and maintainer of V-Calendar. I
                      started this project because I wanted a simple, yet flexible, way to
                      use attributed calendars and date pickers in my web applications and
                      I thought it could help others save some time too! By sponsoring
                      this project you can help ensure that this project continues to get
                      the love it deserves, along with getting a shout-out in the list
                      above.
                    </p>
                  </v-col>
                </v-row>
              </v-container>
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
  name: "Calendar",
  data() {
    return {
      attrs: [
        {
          key: "today",
          highlight: "red",
          dates: new Date(),
        },
      ],
    };
  },
});
</script>