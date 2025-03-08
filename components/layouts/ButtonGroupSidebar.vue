<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
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
    groupLinks: {
        type: Array as PropType<{ name: string; url: string }[]>,
        required: true
    }
});
const isOpenButtonGroup = ref(false);
const route = useRoute();
const router = useRouter();
const isActive = computed(() => {
    return props.groupLinks.some(link => link.url === route.path);
});
const toggleSidebar = inject<() => void>('toggleSidebar')!;
const { isMobile } = useIsMobile();

const toggleButtonGroup = () => {
    isOpenButtonGroup.value = !isOpenButtonGroup.value;
};

const clickButtonSidebarMobile = (url: string) => {
    if (isMobile.value) {
        toggleSidebar();
    }

    router.push(url);
};
</script>

<template>
    <div :style="{
        maxHeight: isOpenButtonGroup ? '1000px' : '36px',
    }" class="overflow-hidden transform transition-all ease-in-out duration-300">
        <div @click="toggleButtonGroup"
            :class="['flex items-center justify-between p-2 rounded-lg cursor-pointer', isActive ? 'bg-[#27272A]' : 'hover:bg-[#27272A]']">
            <div class="flex items-center gap-2">
                <Icon :name="icon" size="20" />
                <span class="text-sm font-semibold">{{ name }}</span>
            </div>

            <Icon :class="isOpenButtonGroup && 'rotate-90'" name="ic:baseline-chevron-right"
                class="transform transition-transform ease-out duration-200" />
        </div>

        <div class="flex flex-col border-l border-[#2d2c2c] pl-2 ml-4 pt-2 gap-1">
            <div v-for="link in groupLinks" :key="link.name" class="flex flex-col gap-2"
                @click="clickButtonSidebarMobile(link.url)">
                <div :class="['flex items-center gap-2 p-2 hover:bg-[#27272A] rounded-lg cursor-pointer', route.path === link.url && 'bg-[#27272A]']">
                    <span class="text-sm font-semibold">{{ link.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>