<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
import Button from '~/components/ui/Button.vue';
import { toast } from 'vue-sonner';
import { useAuthStore } from '~/stores/auth';

definePageMeta({
    layout: false,
});

const router = useRouter();
const isLoading = ref(false);
const auth = useAuthStore();
const validationSchema = toTypedSchema(
    zod.object({
        email: zod.string().min(1, { message: 'This is required' }).email({ message: 'Must be a valid email' }),
        password: zod.string().min(1, { message: 'This is required' }).min(8, { message: 'Too short' }),
    })
);
const { handleSubmit, errors } = useForm({
    validationSchema,
});

const { value: email } = useField('email');
const { value: password } = useField('password');

const onSubmit = handleSubmit(values => {
    isLoading.value = true;

    // save to pinia
    auth.login({ email: values.email });

    toast.success('Logged in successfully');

    setTimeout(() => {
        isLoading.value = false;

        router.push('/dashboard');
    }, 2000);
});

</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100 px-3">
        <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
            <h1 class="text-2xl font-bold text-center">Login</h1>
            <form @submit.prevent="onSubmit" class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" id="email" v-model="email" required
                        class="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    <div v-if="errors.email" class="text-red-400 mt-1">{{ errors.email }}</div>
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
                    <input type="password" id="password" v-model="password" required
                        class="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    <span class="text-red-400 mt-11">{{ errors.password }}</span>
                </div>
                <Button :type="`submit`" :is-full-width="true" :is-loading="isLoading">Login</Button>
            </form>
        </div>
    </div>
</template>