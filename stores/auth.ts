import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as { email: string } | null,
  }),
  actions: {
    async login(data: { email: string } | null) {
      this.user = data;
    },
    async logout() {
      this.user = null;
    },
  },
  persist: true
});
