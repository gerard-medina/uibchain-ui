<template>
    <label>
        <div class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
            <input name="menu-button" class="hidden peer" type="checkbox" :checked="modelValue" @input="onInput" />
            <div class="w-[50%] h-[2px] bg-dark-blue dark:bg-soft-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
            <div class="w-[50%] h-[2px] bg-dark-blue dark:bg-soft-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
            <div class="w-[50%] h-[2px] bg-dark-blue dark:bg-soft-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
        </div>
    </label>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])

function onInput(e) {
  emit('update:modelValue', e.target.checked)
}
</script>