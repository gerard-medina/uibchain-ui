<template>
    <LightBars :count="10" />
    <div class="h-full w-full flex flex-col items-center justify-center py-20 gap-10">
        <ConnectWallet />
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
import ConnectWallet from '@/components/ConnectWallet.vue';

const estadoCargando = ref(false)
</script>