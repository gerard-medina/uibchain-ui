<template>
    <LightBars :count="10" />
    <div class="h-full w-full flex flex-col items-center justify-center">
        <!-- <div class="flex flex-col items-center justify-center gap-3">
            <h1 class="mb-3 text-2xl bg-gradient-to-r from-blue to-dark-blue dark:from-blue dark:to-light-blue bg-clip-text text-transparent">Iniciar conexión</h1>
            <PowerButton />
        </div> -->
        <HoloInputField :cargando="estadoCargando" />
        <HoloButton v-model:cargando="estadoCargando" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import LightBars from '@/components/LightBars.vue';
import PowerButton from '@/components/PowerButton.vue';
import HoloInputField from '@/components/HoloInputField.vue';
import HoloButton from '@/components/HoloButton.vue';

const estadoCargando = ref(false)
</script>