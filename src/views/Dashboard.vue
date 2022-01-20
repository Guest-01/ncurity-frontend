<template>
  <main class="max-w-5xl mx-auto">
    <Navbar pageName="방문통계" />
    <section class="bg-gray-200 pt-24 pb-4 px-4 space-y-2">
      <article class="p-4 border-2 border-white rounded-lg">
        <div class="flex justify-between">
          <span class="text-xl">시간 별 방문자 수 추이</span>
          <span>총 방문: {{ totalCounts }}</span>
        </div>
        <BarChart
          :chartdata="chartData1"
          :options="{
            responsive: true,
            maintainAspectRatio: false,
          }"
        />
      </article>
      <article class="p-4 border-2 border-white rounded-lg">
        <span class="text-xl">방문자 TOP 10</span>
        <div class="flex">
          <div class="basis-1/3">
            <PieChart
              :chartdata="chartData2"
              :options="{
                responsive: true,
                maintainAspectRatio: false,
              }"
            />
          </div>
          <div class="basis-2/3">
            <Table :columnDefs="columnDefs" :rowData="visitorData" />
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import BarChart from "../components/BarChart.vue";
import PieChart from "../components/PieChart.vue";
import Table from "../components/Table.vue";
import timeData from "../assets/time.json";
import visitorData from "../assets/visitor.json";

export default {
  name: "Dashboard",
  components: {
    Navbar,
    BarChart,
    PieChart,
    Table,
  },
  data() {
    return {
      timeData: timeData.slice(0, -50),
      visitorData,
    };
  },
  computed: {
    totalCounts() {
      return this.timeData.reduce((total, item) => {
        return total + item.doc_count;
      }, 0);
    },
    chartData1() {
      // Bar Chart
      return {
        labels: this.timeData.map((data) => data.key_as_string.slice(0, -8)),
        datasets: [
          {
            label: "방문 수",
            backgroundColor: this.getRandomColor(),
            data: this.timeData.map((data) => data.doc_count),
          },
        ],
      };
    },
    chartData2() {
      // Pie Chart
      return {
        labels: this.visitorData.map((data) => data.name),
        datasets: [
          {
            label: "방문수",
            data: this.visitorData.map((data) => data.visit_count),
            backgroundColor: this.getRandomColors(this.visitorData.length),
          },
        ],
      };
    },
    columnDefs() {
      const keys = Object.keys(this.visitorData[0]);
      return keys.map((key) => {
        return { field: key, sortable: true, filter: true, resizable:true };
      });
    },
  },
  methods: {
    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    getRandomColors(n) {
      const colorList = [];
      for (let i = 0; i < n; i++) {
        colorList.push(this.getRandomColor());
      }
      return colorList;
    },
  },
};
</script>

<style>
</style>