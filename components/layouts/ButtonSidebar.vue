<script lang="ts" setup>
import { Icon } from '#components';

defineProps({
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
</script>

<template>
    <div class="flex flex-col gap-2" @click="$router.push(url)">
        <div class="flex items-center gap-2 p-2 hover:bg-[#27272A] rounded-lg cursor-pointer">
            <Icon :name="icon" size="20" />
            <span class="text-sm font-semibold">{{ name }}</span>
        </div>
    </div>
</template>