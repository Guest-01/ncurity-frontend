<template>
  <ag-grid-vue
    style="width: 100%; height: 100%"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
    @first-data-rendered="onFirstDataRendered"
    :pagination="true"
    :paginationPageSize="10"
  >
  </ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  props: {
    columnDefs: {
      type: Array,
      // 오브젝트나 배열은 꼭 기본값을 반환하는
      // 팩토리 함수의 형태로 사용되어야 합니다.
      default: function () {
        return [{ field: "make" }, { field: "model" }, { field: "price" }];
      },
    },
    rowData: {
      type: Array,
      // 오브젝트나 배열은 꼭 기본값을 반환하는
      // 팩토리 함수의 형태로 사용되어야 합니다.
      default: function () {
        return [
          { make: "Toyota", model: "Celica", price: 35000 },
          { make: "Ford", model: "Mondeo", price: 32000 },
          { make: "Porsche", model: "Boxter", price: 72000 },
        ];
      },
    },
  },
  methods: {
    onFirstDataRendered(params) {
      params.api.sizeColumnsToFit();
    },
  },
};
</script>