<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import Button from '~/components/ui/Button.vue';

const router = useRouter();
const state = reactive({
    email: '',
    password: '',
});

const login = async () => {
    localStorage.setItem('user', JSON.stringify({
        email: state.email,
        password: state.password,
    }));

    router.push('/dashboard');
};

</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100 px-3">
        <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
            <h1 class="text-2xl font-bold text-center">Login</h1>
            <form @submit.prevent="login" class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" v-model="state.email" required
                        class="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
                    <input type="password" v-model="state.password" required
                        class="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <Button :type="`submit`" :is-full-width="true" :is-disabled="false" >Login</Button>
            </form>
        </div>
    </div>
</template>