<template>
  <section>
    <Header />
    <section id="contents">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <section class="mainContent">
              <!-- Line Order Chart -->
              <OrderChart/>
              <!-- 4 Card -->
              <CardInfo/>
              <!-- 3 Chart -->
              <ThreeChart/>
              <!-- Employees Information -->
              <Employees/>
              <!-- Global Defenition -->
              <GlobalInformation/>
              <!-- Footer -->
              <Footer/>
            </section>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import CardInfo from './components/CardInfo.vue';
import ThreeChart from './components/ThreeChart.vue';
import Employees from './components/Employees.vue';
import GlobalInformation from './components/GlobalInformation.vue';
import OrderChart from './components/OrderChart.vue';

export default Vue.extend({
  name: "Home",
  components: {
    ThreeChart,
    CardInfo,
    Employees,
    GlobalInformation,
    OrderChart
  },
});
</script>
