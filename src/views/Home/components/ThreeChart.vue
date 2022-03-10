<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4" xl="4" lg="4" sm="12">
        <v-card class="cardStyle">
          <div>
            <span class="font-muted font-small">Total Shipments</span>
            <div class="d-flex my-1">
              <v-icon class="chartColor1">{{ "mdi-bell" }}</v-icon>
              <p class="mx-1 white">452,200</p>
            </div>
          </div>
          <LineChart color="#66ff66" pointBorder="#66ff66" pointColor="#66ff66"
          :data="[30, 20, 64, 40, 55, 34, 70]"/>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" xl="4" lg="4" sm="12">
        <v-card class="cardStyle">
          <div>
            <span class="font-muted font-small">Daily Sales</span>
            <div class="d-flex my-1">
              <v-icon class="chartColor2">{{ "mdi-truck-delivery" }}</v-icon>
              <p class="mx-1 white">3,500€</p>
            </div>
          </div>
          <BarChart :color="'#1d8cf8'" />
        </v-card>
      </v-col>
      <v-col cols="12" md="4" xl="4" lg="4" sm="12">
        <v-card class="cardStyle">
          <div>
            <span class="font-muted font-small">Completed tasks</span>
            <div class="d-flex my-1">
              <v-icon class="chartColor3">{{ "mdi-send" }}</v-icon>
              <p class="mx-1 white">12,100K</p>
            </div>
          </div>
          <LineChart
            color="tomato"
            pointBorder="tomato"
            pointColor="tomato"
            :data="[27, 53, 36, 70, 54 , 76, 60]"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";
export default {
  name: "ThreeChart",
  components: {
    BarChart,
    LineChart,
  },
};
</script>
