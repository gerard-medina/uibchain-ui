<template>
    <button class="h-15 w-50 rounded-2xl shadow-light dark:shadow-dark active:shadow-none
        active:inset-shadow-light dark:active:inset-shadow-dark transition-none cursor-pointer hover:bg-linear-(--soft-gradient) dark:hover:bg-linear-(--dark-gradient)">
        {{ text }}
    </button>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    text: {
        type: String,
        default: 'Click Me'
    }
})
const text = ref(props.text)
</script>
