<script lang="ts" setup>
import { Icon } from '#components'
import ButtonGroupSidebar from './ButtonGroupSidebar.vue';
import ButtonSidebar from './ButtonSidebar.vue';

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
    <aside :class="isOpenSidebar ? 'translate-x-0' : '-translate-x-full'"
        class="w-64 bg-[#18181B] border-r md:static fixed z-10 border-[#2d2c2c] p-2 h-screen transform transition-transform duration-100 ease-out">
        <!-- User -->
        <div class="flex items-center justify-between p-2 hover:bg-[#27272A] rounded-lg cursor-pointer">
            <div class="flex items-center gap-4">
                <img src="https://dashboard.dianprata.com/avatars/avatartion.png" alt="User"
                    class="w-9 h-9 rounded-lg" />
                <div>
                    <h1 class="text-sm font-semibold">John Doe</h1>
                    <p class="text-xs font-light text-[#9CA3AF]">Admin</p>
                </div>
            </div>

            <div>
                <Icon name="mynaui:chevron-up-down" />
            </div>
        </div>

        <!-- General -->
        <div class="mt-8">
            <h1 class="text-xs font-semibold text-[#9CA3AF] mb-2">General</h1>
            <!-- dashboard -->
            <ButtonSidebar name="Dashboard" icon="iconoir:home-simple-door" url="/dashboard" />

            <!-- profile -->
            <ButtonSidebar name="Profile" icon="solar:user-check-rounded-line-duotone" url="/dashboard/profile" />
            
            <!-- Users -->
            <ButtonSidebar name="Users" icon="solar:users-group-rounded-line-duotone" url="/dashboard/users" />
            
            <!-- resources -->
            <ButtonSidebar name="Resources" icon="solar:documents-line-duotone" url="/dashboard/resources" />
        </div>

        <!-- Middle -->
        <div class="mt-8">
            <h1 class="text-xs font-semibold text-[#9CA3AF] mb-2">Middle</h1>
            <div class="flex flex-col gap-2">
                <ButtonGroupSidebar
                    name="Settings"
                    icon="arcticons:ente-authenticator"
                    :groupLinks="[
                        { name: 'Profile', url: '/dashboard/profile' },
                        { name: 'Users', url: '/dashboard/users' },
                        { name: 'Resources', url: '/dashboard/resources' }
                    ]"
                />
            </div>
            <!-- profile -->
            <ButtonSidebar name="Profile" icon="solar:user-check-rounded-line-duotone" url="/dashboard/profile" />
        </div>
    </aside>

    <!-- Mobile Sidebar Overlay -->
    <div :class="isOpenSidebar ? 'translate-x-0' : '-translate-x-full'"
        class="fixed inset-0 bg-black bg-opacity-50 md:hidden transform transition-transform duration-100 ease-out"
        @click="toggleSidebar" style="z-index: 1; width: 100%;"></div>
</template>