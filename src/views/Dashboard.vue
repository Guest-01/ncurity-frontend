<template>
  <header>
    <Navbar pageName="방문통계" />
    <section class="bg-gray-200 pt-24 pb-4 px-4 space-y-2 h-screen">
      <article class="p-4 border-2 border-white rounded-lg">
        <span>시간 별 방문자 수 추이</span>
      </article>
      <article class="p-4 border-2 border-white rounded-lg">
        방문자 TOP 10
      </article>
    </section>
  </header>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Dashboard",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>