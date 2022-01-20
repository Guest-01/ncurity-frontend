<template>
  <div
    class="
      fixed
      w-screen
      h-screen
      bg-gray-200
      flex flex-col
      justify-center
      items-center
    "
  >
    <form
      @submit.prevent="login"
      action="#"
      class="flex flex-col p-6 rounded-lg bg-white space-y-2"
    >
      <div
        class="
          flex
          items-center
          p-2
          border-2 border-blue-300
          rounded-lg
          justify-center
        "
      >
        <img :src="logo" alt="logo" />
        <span class="text-2xl text-blue-700">로그인</span>
      </div>
      <div class="flex flex-col space-y-2 bg-blue-200 rounded-lg px-4 py-2">
        <div class="flex space-x-4 items-center pt-2">
          <label for="username" class="w-1/4 text-center">ID</label>
          <input
            v-model="id"
            type="text"
            name="username"
            id="username"
            class="p-1"
            placeholder="admin"
            autofocus
          />
        </div>
        <div class="flex space-x-4 items-center pb-2">
          <label for="password" class="w-1/4 text-center">PW</label>
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            class="p-1"
            placeholder="a1234"
          />
        </div>
      </div>
      <button
        type="submit"
        class="
          p-2
          bg-blue-500
          rounded-lg
          text-white
          hover:bg-blue-600
          transition
        "
      >
        로그인
      </button>
    </form>
    <div
      v-if="errorMsg"
      class="
        py-2
        px-7
        mt-2
        rounded-lg
        border-2 border-red-500
        flex
        items-center
        space-x-2
        text-red-500
      "
    >
      <span>
        {{ errorMsg }}
      </span>
      <i
        @click="closeError"
        class="bx bx-x"
        style="font-size: 1.5rem; cursor: pointer"
      ></i>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo.jpg";

export default {
  name: "Login",
  data() {
    return {
      logo,
      id: null,
      password: null,
      errorMsg: null,
    };
  },
  methods: {
    login() {
      try {
        this.$store.dispatch("login", { id: this.id, password: this.password });
        this.$router.push("/dashboard");
        return;
      } catch (error) {
        console.error(error);
        this.errorMsg = "아이디 혹은 비밀번호가 잘못되었습니다";
      }
    },
    closeError() {
      this.errorMsg = null;
    },
  },
};
</script>