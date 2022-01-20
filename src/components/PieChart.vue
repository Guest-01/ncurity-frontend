// chart.js는 template 태그가 필요없음

<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: ["chartdata", "options"],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>