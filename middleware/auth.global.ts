import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();

  if (
    !auth.user &&
    to.path !== "/auth/login" &&
    to.path !== "/auth/register" &&
    to.path !== "/"
  ) {
    return navigateTo("/auth/login");
  }
});
