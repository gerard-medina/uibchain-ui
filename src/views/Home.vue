<template>
    <LightBars :count="10" />
    <div class="h-3/4 flex flex-col items-center justify-center">
        <h1 class="mb-3 text-2xl bg-gradient-to-r from-blue to-dark-blue dark:from-blue dark:to-light-blue bg-clip-text text-transparent">Iniciar conexión</h1>
        <PowerButton />
    </div>
</template>

<script setup>
import PowerButton from '@/components/PowerButton.vue';
import LightBars from '@/components/LightBars.vue';
</script>