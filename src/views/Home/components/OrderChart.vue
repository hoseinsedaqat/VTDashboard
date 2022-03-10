<template>
  <v-card class="cardStyle">
    <span class="white font-muted">Total Shipment</span>
    <h2 class="white my-1">Performance</h2>
    <LineChart
      class="white"
      color="#66ff66"
      pointBorder="#66ff66"
      pointColor="#66ff66"
      :data="[38, 62, 51, 64, 55, 76, 40]"
    />
  </v-card>
</template>

<script>
import LineChart from "@/components/LineChart.vue";
export default {
  name: "OrderChart",
  components: {
    LineChart,
  },
};
</script>

<style></style>
