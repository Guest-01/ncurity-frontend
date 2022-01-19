<template>
  <div
    class="fixed w-screen h-screen bg-gray-200 flex justify-center items-center"
  >
    <form @submit.prevent="" action="#" class="flex flex-col p-6 rounded-lg bg-white space-y-2">
      <div class="flex items-center p-2 border-2 border-blue-300 rounded-lg justify-center">
        <img :src="logo" alt="logo" />
        <span class="text-2xl text-blue-700">로그인</span>
      </div>
      <div class="flex flex-col space-y-2 bg-blue-200 rounded-lg px-4 py-2">
        <div class="flex space-x-4 items-center pt-2">
          <label for="username" class="w-1/4 text-center">ID</label>
          <input type="text" name="username" id="username" autofocus/>
        </div>
        <div class="flex space-x-4 items-center pb-2">
          <label for="password" class="w-1/4 text-center">PW</label>
          <input type="password" name="password" id="password" />
        </div>
      </div>
      <button type="submit" class="p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition">로그인</button>
    </form>
  </div>
</template>

<script>
import logo from "@/assets/logo.jpg";

export default {
  name: "Login",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
input {
  @apply p-1 focus:outline-none border-b-2 border-blue-300;
}
</style>