import { ref, onMounted, onUnmounted } from 'vue';

export function useIsMobile() {
  const MOBILE_BREAKPOINT = 768;
  const isMobile = ref<boolean>(false);

  const checkScreenSize = () => {
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
  };

  onMounted(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mql.addEventListener('change', checkScreenSize);
    checkScreenSize();

    onUnmounted(() => {
      mql.removeEventListener('change', checkScreenSize);
    });
  });

  return { isMobile };
}