<script>
import Vue from "vue";
import { Line } from "vue-chartjs";

export default Vue.extend({
  extends: Line,
  props:['color','pointColor','pointBorder','data'],
  mounted() {

    this.renderChart(
      {
        // Data
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            borderColor: this.color,
            backgroundColor:'rgba(150,154,186,0.1)',
            pointBackgroundColor: this.pointColor,
            borderWidth: 2,
            pointBorderColor: this.pointBorder,
            data: this.data,
          },
        ],
      },
      // Options
      { responsive: true, maintainAspectRatio: false, legend:{ display:false } }
    );
  },
});
</script>