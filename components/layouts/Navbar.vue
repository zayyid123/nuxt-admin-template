<script lang="ts" setup>
defineProps({
    isOpenSidebar: {
        type: Boolean,
        required: true
    },
    toggleSidebar: {
        type: Function as PropType<() => void>,
        required: true
    },
});
</script>

<template>
    <header class="px-4 md:px-6 py-4 border-b border-[#2d2c2c]">
        <div class="flex items-center gap-x-4">
            <button @click="toggleSidebar">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-panel-left-icon">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M9 3v18"></path>
                </svg>
            </button>
            <div class="bg-[#2d2c2c] h-[16px] w-[1px]" />
            <h1 class="text-sm font-normal">Home</h1>
        </div>
    </header>
</template>