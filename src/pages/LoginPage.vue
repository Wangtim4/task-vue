<template>
  <main class="px-4 py-5 my-5 text-center" style="min-height: 50vh">
    <h1>Login</h1>
    <button class="btn btn-primary" @click="handleClick">Login</button>
  </main>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const handleClick = () => {
  router.push({ name: "tasks" });
};
</script>
