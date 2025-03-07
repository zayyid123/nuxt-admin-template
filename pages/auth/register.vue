<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
import { useRouter } from 'vue-router';
import Button from '~/components/ui/Button.vue';
import { useField, useForm } from 'vee-validate';
import { toast } from 'vue-sonner';

const router = useRouter();
const isLoading = ref(false);
const validationSchema = toTypedSchema(
    zod.object({
        email: zod.string().min(1, { message: 'This is required' }).email({ message: 'Must be a valid email' }),
        password: zod.string().min(1, { message: 'This is required' }).min(8, { message: 'Too short' }),
        username: zod.string().min(1, { message: 'This is required' }).min(3, { message: 'Too short' }),
    })
);
const { handleSubmit, errors } = useForm({
    validationSchema,
});

const { value: email } = useField('email');
const { value: password } = useField('password');
const { value: username } = useField('username');

const onSubmit = handleSubmit(values => {
    isLoading.value = true;

    // save to local storage
    localStorage.setItem('user', JSON.stringify({
        email: values.email,
    }));
    toast.success('Register in successfully');

    setTimeout(() => {
        isLoading.value = false;

        router.push('/dashboard');
    }, 3000);
});
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 px-3">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h1 class="text-2xl font-bold mb-6 text-center">Register</h1>
            <form @submit.prevent="onSubmit">
                <div class="mb-4">
                    <label for="username" class="block text-gray-700">Username:</label>
                    <input type="text" id="username" v-model="username"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required />
                    <div v-if="errors.username" class="text-red-400 mt-1">{{ errors.username }}</div>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email:</label>
                    <input type="email" id="email" v-model="email"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required />
                    <div v-if="errors.email" class="text-red-400 mt-1">{{ errors.email }}</div>
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-gray-700">Password:</label>
                    <input type="password" id="password" v-model="password"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required />
                    <div v-if="errors.password" class="text-red-400 mt-1">{{ errors.password }}</div>
                </div>
                <Button :type="`submit`" :is-full-width="true" :is-loading="isLoading">Register</Button>
            </form>
        </div>
    </div>
</template>