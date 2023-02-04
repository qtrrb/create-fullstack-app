<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
  <button @click="userStore.logOut()">Log Out</button>
</template>

<style scoped>
button {
  display: inline-flex;
  box-sizing: border-box;
  background-color: #1c1917;
  color: #fafaf9;
  border: #1c1917 1px solid;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  height: 2.125rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.3rem;
  align-items: center;
  justify-content: center;
  transition-property: color, background-color;
  transition-duration: 0.2s;
}

button:hover {
  background-color: #fafaf9;
  color: #1c1917;
}
</style>
