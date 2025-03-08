<script setup>
import { ref } from 'vue';

const isOpenSidebar = ref(true);

const toggleSidebar = () => {
    isOpenSidebar.value = !isOpenSidebar.value;
};
</script>

<template>
    <div class="flex h-screen bg-[#09090B] text-[#F4F4F5]">
        <!-- Sidebar -->
        <aside :class="isOpenSidebar ? 'translate-x-0' : '-translate-x-full'"
            class="w-64 bg-[#18181B] border-r md:static fixed z-10 border-[#2d2c2c] p-4 h-screen transform transition-transform duration-100 ease-out">
            <h2 class="text-xl font-bold">Sidebar</h2>
        </aside>

        <!-- Mobile Sidebar Overlay -->
        <div :class="isOpenSidebar ? 'translate-x-0' : '-translate-x-full'" class="fixed inset-0 bg-black bg-opacity-50 md:hidden transform transition-transform duration-100 ease-out" @click="toggleSidebar" style="z-index: 1; width: 100%;"></div>

        <div :class="!isOpenSidebar && 'md:-ml-64'" class="flex flex-col overflow-y-scroll flex-1 transition-all duration-200 ease-out">
            <!-- Navbar -->
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

            <!-- Content -->
            <main class="flex-1 px-4 md:px-6 py-4">
                <slot /> <!-- Ini akan digantikan oleh konten halaman -->
            </main>
        </div>
    </div>
</template>