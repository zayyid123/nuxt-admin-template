<script lang="ts" setup>
const props = defineProps({
    onClick: {
        type: Function as PropType<(payload: MouseEvent) => void>,
        required: false
    },
    isFullWidth: {
        type: Boolean,
        default: false
    },
    isDisabled: {
        type: Boolean,
        default: false
    },
    type: {
        type: String as () => 'button' | 'submit' | 'reset',
        default: 'button'
    },
});
</script>

<template>
    <button :type="type" :disabled="isDisabled"
        :class="`${isFullWidth && 'w-full'} ${isDisabled ? 'bg-zinc-500 cursor-not-allowed' : 'bg-zinc-800 hover:bg-zinc-700'}`"
        class=" px-3 py-2 rounded-lg text-white ease-in-out duration-300" @click="props.onClick">
        <slot>Button</slot>
    </button>
</template>