<script setup lang="ts">
import { RouterView } from "vue-router";
import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import NavBar from "./components/NavBar.vue";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
onMounted(async () => {
  if (!user.value) {
    userStore.fetchUserData();
  }
});
</script>

<template>
  <NavBar />
  <RouterView />
</template>
