<template>
    <header
        class="fixed w-full z-50 bg-soft-white dark:bg-dark-blue shadow-lg/70 shadow-neutral-400 dark:shadow-stone-950">
        <div class="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div class="flex items-center gap-6 sm:gap-8">
                <!-- Logo -->
                <router-link to="/" class="hover:opacity-60 transition-opacity duration-300 flex items-center h-full gap-1.5" aria-label="Home">
                    <IconoUib class="text-blue w-8 h-8" />
                    <span class="text-xl font-medium mb-1">chain</span>
                </router-link>
    
                <!-- Nav -->
                <nav class="hidden sm:flex gap-4 items-center">
                    <router-link v-if="connection.isConnected" to="/blockchain">
                        <NavButton :text="'Blockchain'" />
                    </router-link>
                    <router-link v-if="auth.isAuthenticated" to="/mi-wallet">
                        <NavButton :text="'Mi wallet'" />
                    </router-link>
                </nav>
            </div>

            <!-- Acciones -->
            <div class="flex items-center gap-2 sm:gap-4">
                <div class="flex items-center gap-2 sm:gap-4">
                    <NavButton v-if="auth.isAuthenticated" @click="auth.logout" :text="'Cerrar sesión'" />
                    <button @click="toggleTheme" type="button"
                        class="hover:bg-dark-blue hover:text-soft-white dark:hover:bg-soft-white dark:hover:text-dark-blue focus:outline-none focus:ring-2 focus:ring-blue/40 transition-colors duration-300 cursor-pointer rounded-full text-sm p-1.5"
                        aria-label="Alternar modo oscuro">
                        <svg v-if="isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="5" fill="none" />
        
                            <line x1="12" y1="1" x2="12" y2="4" />
                            <line x1="12" y1="20" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="4" y2="12" />
                            <line x1="20" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                        </svg>
                    </button>
                </div>

                <!-- Menu móvil -->
                <MenuButton v-if="(connection.isConnected || auth.isAuthenticated)" class="sm:hidden" v-model="isMobileMenuOpen" />
            </div>
        </div>
        <div v-if="isMobileMenuOpen && (connection.isConnected || auth.isAuthenticated)" class="sm:hidden absolute top-full right-0 bg-soft-white dark:bg-dark-blue px-4 pb-4 w-2xs shadow-lg/70 shadow-neutral-400 dark:shadow-stone-950 rounded-bl-lg">
            <nav class="flex flex-col gap-4 mt-4 text-center">
                <router-link v-if="connection.isConnected" to="/blockchain">
                    <NavButton :text="'Blockchain'" />
                </router-link>
                <router-link v-if="auth.isAuthenticated" to="/mi-wallet">
                    <NavButton :text="'Mi wallet'" />
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import IconoUib from '@/assets/iconoUib.svg'
import { useConnectionStore } from '@/store/connection'
import { useAuthStore } from '@/store/auth'
import MenuButton from './MenuButton.vue'
import NavButton from './NavButton.vue'

const isDark = ref(true)
const isMobileMenuOpen = ref(false)

const toggleTheme = () => {
    isDark.value = !isDark.value
    const theme = isDark.value ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', theme)
}

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        isDark.value = savedTheme === 'dark'
    } else {
        isDark.value = true
        localStorage.setItem('theme', 'dark')
    }
    document.documentElement.classList.toggle('dark', isDark.value)
})

const connection = useConnectionStore()
const auth = useAuthStore()
</script>
