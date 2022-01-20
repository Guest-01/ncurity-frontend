<template>
  <main class="max-w-5xl mx-auto">
    <Navbar pageName="계정관리" />
    <section class="bg-gray-200 pt-24 pb-4 px-4 space-y-2">
      <article class="p-4 border-2 border-white rounded-lg">
        <span class="text-xl">계정 목록</span>
        <Table
          style="height: 500px"
          :columnDefs="columnDefs"
          :rowData="accounts"
        />
      </article>
    </section>
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Table from "../components/Table.vue";
import accounts from "../assets/account.json";

export default {
  name: "Account",
  components: {
    Navbar,
    Table,
  },
  data() {
    return {
      accounts,
    };
  },
  computed: {
    columnDefs() {
      const keys = Object.keys(accounts[0]);
      return keys.map((key) => {
        return { field: key, sortable: true, filter: true, resizable: true };
      });
    },
  },
};
</script>

<style>
</style>