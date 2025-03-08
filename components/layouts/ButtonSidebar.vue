<script lang="ts" setup>
import { Icon } from '#components';
import { useRoute } from 'vue-router';
import { useIsMobile } from '~/composables/useIsMobile';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});
const route = useRoute();
const router = useRouter();
const isActive = computed(() => route.path === props.url);
const toggleSidebar = inject<() => void>('toggleSidebar')!;
const { isMobile } = useIsMobile();

const toggleSidebarMobile = (url: string) => {
    if (isMobile.value) {
        toggleSidebar();
    }

    router.push(url);
};
</script>

<template>
    <div class="flex flex-col gap-2" @click="toggleSidebarMobile(url)">
        <div
            :class="['flex items-center gap-2 p-2 rounded-lg cursor-pointer', isActive ? 'bg-[#27272A]' : 'hover:bg-[#27272A]']">
            <Icon :name="icon" size="20" />
            <span class="text-sm font-semibold">{{ name }}</span>
        </div>
    </div>
</template>