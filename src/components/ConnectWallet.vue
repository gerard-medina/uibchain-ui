<template>
    <transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
    >
        <div v-if="conectado" class="relative rounded-2xl h-70 md:h-70 w-3xs md:w-md shadow-light dark:shadow-dark">
            <img src="@/assets/uibcoin.png" alt="Uibcoin Logo" class="absolute left-1/2 -translate-x-1/2 -z-1 h-full blur-xs">
            <form class="h-full w-full bg-soft-white/70 dark:bg-dark-blue/70 flex flex-col justify-center gap-2 md:gap-5 p-6 rounded-2xl">
                <h1 class="status-text text-center">MI WALLET</h1>
                <div class="w-full relative h-9 md:h-10">
                    <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16"
                        xmlns="http://www.w3.org/2000/svg" class="input-icon">
                        <path
                            d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z">
                        </path>
                    </svg>
                    <input type="text" class="input-field h-full" placeholder="Usuario" autocomplete="off">
                </div>
                <div class="w-full relative h-9 md:h-10">
                    <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16"
                        xmlns="http://www.w3.org/2000/svg" class="input-icon">
                        <path
                            d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z">
                        </path>
                    </svg>
                    <input type="password" class="input-field h-full" placeholder="Contraseña">
                </div>
                <div class="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5">
                    <button class="neu-button text-light-blue inset-shadow-light dark:inset-shadow-dark w-full bg-soft-white dark:bg-dark-blue hover:bg-transparent border-transparent rounded-full h-9 md:h-10">Iniciar Sesión</button>
                    <button class="neu-button text-light-blue inset-shadow-light dark:inset-shadow-dark w-full bg-soft-white dark:bg-dark-blue hover:bg-transparent border-transparent rounded-full h-9 md:h-10">Registrar</button>
                </div>
            </form>
        </div>
    </transition>
</template>

<script setup>
import { useConnectionStore } from '@/store/connection'
import { computed } from 'vue'

const store = useConnectionStore()
let conectado = computed(() => store.isConnected)

</script>

<style scoped>
.input-icon {
    fill: rgba(0, 195, 255, 0.9);
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    background: transparent;
    z-index: 1;
}

.input-field {
    width: 100%;
    height: 100%;
    background: rgba(0, 12, 36, 0.7);
    border: none;
    outline: none;
    padding: 0 30px 0 30px;
    color: rgba(0, 195, 255, 0.9);
    font-family: "Orbitron", sans-serif;
    font-size: 18px;
    letter-spacing: 1px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 12px;
    transition: all 0.3s ease;
    text-shadow: 0 0 5px rgba(0, 160, 255, 0.7);
}

.input-field:focus {
    box-shadow:
        0 0 15px rgba(0, 140, 255, 0.3),
        inset 0 0 10px rgba(0, 0, 0, 0.8);
}

.input-field::placeholder {
    color: rgba(0, 110, 200, 0.4);
    transition: all 0.3s ease;
}

.status-text {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 162, 255, 0.8);
    text-shadow: 0 0 5px rgba(0, 162, 255, 0.5);
    position: relative;
    transition: all 0.3s ease;
}

.neu-button {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-style: hidden;
    border-width: 2px;
    text-shadow: 0 0 5px rgba(0, 160, 255, 0.7);
}

.neu-button:hover {
    border: 2px solid rgb(206, 206, 206);
    box-shadow: inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff;
}

.dark .neu-button:hover {
    border: 2px solid #222429;
    box-shadow: inset 2px 2px 5px rgb(18 18 18 / 85%), inset -2px -2px 5px rgba(255, 255, 255, 0.15), 2px 2px 5px rgb(18 18 18 / 85%), -2px -2px 5px rgba(255, 255, 255, 0.15);
}

.neu-button:focus {
    outline: none;
    box-shadow: inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff;
}
</style>