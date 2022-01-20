<template>
  <nav
    class="
      fixed
      w-full
      flex
      justify-between
      px-6
      py-4
      items-center
      bg-white
      max-w-5xl
      mx-auto
    "
  >
    <div class="flex items-center">
      <img :src="logo" alt="logo" />
      <span class="text-xl text-blue-500 cursor-default">{{ pageName }}</span>
    </div>
    <ul class="flex space-x-4 items-center text-xl">
      <li>
        <router-link
          to="/account"
          class="p-2 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >계정관리</router-link
        >
      </li>
      <li>
        <router-link
          to="/dashboard"
          class="p-2 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >방문통계</router-link
        >
      </li>
    </ul>
    <div class="flex space-x-4 items-center">
      <div v-if="user" class="flex space-x-1 items-center cursor-default">
        <i class="bx bx-user"></i>
        <span>{{ user.name }}</span>
      </div>
      <button
        @click="logout"
        class="
          flex
          space-x-1
          items-center
          p-2
          rounded-lg
          border-blue-500 border-2
          hover:bg-blue-500 hover:text-white
        "
      >
        <span>로그아웃</span>
        <i class="bx bx-log-out"></i>
      </button>
    </div>
  </nav>
</template>

<script>
import logo from "../assets/logo.jpg";

export default {
  name: "Navbar",
  props: ["pageName"],
  data() {
    return {
      logo,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
      return;
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
i {
  font-size: 1.5rem;
}
</style>