<script lang="ts" setup>
import Button from '~/components/ui/Button.vue';
import { useRouter } from 'vue-router';

definePageMeta({
    layout: false,
});

const router = useRouter();
</script>

<template>
    <div class="flex justify-center items-center w-full h-full min-h-screen gap-3">
        <div class="flex flex-col gap-3 bg-zinc-100 p-5 rounded-lg shadow-lg text-zinc-800">
            <h1 class="text-2xl font-bold">Welcome to Nuxt Auth</h1>
            <div class="flex gap-3 items-center justify-center">
                <Button :onClick="() => router.push('/auth/login')">
                    Login
                </Button>
                <Button :onClick="() => router.push('/auth/register')">
                    Register
                </Button>
            </div>
        </div>
    </div>
</template>