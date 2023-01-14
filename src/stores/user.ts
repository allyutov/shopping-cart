import { defineStore } from "pinia";
import type { UserInfoType } from "@/types/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as UserInfoType | null,
    token: "",
  }),

  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUser(user: UserInfoType) {
      this.user = user;
    },
  },
});
