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

<style scoped>
.header-content {
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
}

header h1 {
  font-size: 1.25rem;
  margin: 0;
}

header {
  border-bottom: 1px #e5e7eb solid;
  backdrop-filter: saturate(50%) blur(10px);
  position: sticky;
  top: 0;
}

.logo-with-text {
  display: flex;
  align-items: center;
}

.logo-with-text img {
  margin-right: 0.5rem;
}
</style>
