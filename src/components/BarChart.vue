<script>
import Vue from "vue";
import { Bar } from "vue-chartjs";

export default Vue.extend({
  extends: Bar,
  props: ["color"],
  mounted() {
    this.renderChart(
      {
        // Data
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Website View",
            borderColor: this.color,
            backgroundColor:'rgba(150,154,186,0.1)',
            pointBackgroundColor: "#66ff66",
            borderWidth: 3,
            pointBorderColor: "#66ff66",
            data: [38, 62, 51, 64, 55, 76, 40],
          },
        ],
      },
      // Options
      { responsive: true, maintainAspectRatio: false, legend:{display:false} }
    );
  },
});
</script>
