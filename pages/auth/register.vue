<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import Button from '~/components/ui/Button.vue';

const router = useRouter();
const state = reactive({
    username: '',
    email: '',
    password: '',
});

const register = async () => {
    localStorage.setItem('user', JSON.stringify({
        username: state.username,
        email: state.email,
    }));

    router.push('/dashboard');
};
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h1 class="text-2xl font-bold mb-6 text-center">Register</h1>
            <form @submit.prevent="register">
                <div class="mb-4">
                    <label for="username" class="block text-gray-700">Username:</label>
                    <input type="text" id="username" v-model="state.username"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required />
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email:</label>
                    <input type="email" id="email" v-model="state.email"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-gray-700">Password:</label>
                    <input type="password" id="password" v-model="state.password"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required />
                </div>
                <Button :type="`submit`" :is-full-width="true" :is-disabled="false">Register</Button>
            </form>
        </div>
    </div>
</template>