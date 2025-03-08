<script lang="ts" setup>
import { ref, provide } from 'vue';
import Sidebar from '~/components/layouts/Sidebar.vue';
import Navbar from '~/components/layouts/Navbar.vue';

const isOpenSidebar = ref(true);

const toggleSidebar = () => {
    isOpenSidebar.value = !isOpenSidebar.value;
};
provide('toggleSidebar', toggleSidebar);
provide('isOpenSidebar', isOpenSidebar);
</script>

<template>
    <div class="flex h-screen bg-[#09090B] text-[#F4F4F5]">
        <!-- Sidebar -->
        <Sidebar />

        <div :class="!isOpenSidebar && 'md:-ml-64'"
            class="flex flex-col overflow-y-scroll flex-1 transition-all duration-200 ease-out">
            <!-- Navbar -->
            <Navbar />

            <!-- Content -->
            <main class="flex-1 px-4 md:px-6 py-4">
                <slot />
            </main>
        </div>
    </div>
</template>