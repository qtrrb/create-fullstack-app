import { ref } from "vue";
import { defineStore } from "pinia";
import { get } from "../common/api";
import type { User } from "../models/user.model";

export const useUserStore = defineStore("user", () => {
  const user = ref<User>();

  async function fetchUserData() {
    user.value = await get<User>("/api/me");
  }

  async function logOut() {
    await get("/auth/logout");
    user.value = undefined;
  }

  return { user, fetchUserData, logOut };
});
