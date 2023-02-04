<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import GithubButton from "./GithubButton.vue";
import LogoutButton from "./LogoutButton.vue";
import DropdownMenu from "./DropdownMenu.vue";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>

<template>
  <header>
    <div class="header-content">
      <div class="logo-with-text">
        <img
          alt="fullstack logo"
          class="logo"
          src="/icon.svg"
          width="30"
          height="30"
        />
        <h1>Fullstack</h1>
      </div>
      <div v-if="user">
        <DropdownMenu>
          <template #toggle>
            <div class="user-content">
              <p>{{ user.username }}</p>
              <img
                :src="user.image"
                height="24"
                width="24"
                class="avatar"
                alt="user avatar"
              />
            </div>
          </template>
          <template #content>
            <p>
              Signed in as <b>{{ user.username }}</b>
            </p>
            <LogoutButton class="full-width" />
          </template>
        </DropdownMenu>
      </div>
      <div v-else>
        <GithubButton />
      </div>
    </div>
  </header>
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

.avatar {
  border-radius: 50%;
}
.user-content {
  display: flex;
  align-items: center;
}

.user-content p {
  margin: 0 0.5rem 0 0;
  font-weight: 600;
}

.full-width {
  width: 100%;
}
</style>
