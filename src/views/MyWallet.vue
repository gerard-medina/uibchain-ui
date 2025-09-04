<template>
    <div class="container mx-auto max-w-screen-xl p-10">
        <section class="w-full relative rounded-lg shadow-light dark:shadow-dark flex flex-col p-5">
            <h1 class="text-xl text-center mb-6 bg-gradient-to-r from-blue dark:from-blue to-blue-800 dark:to-[#57e8fc] from-40% to-65% bg-clip-text text-transparent">Mi clave pública</h1>
            <p class="text-center truncate" :title="address">{{ address }}</p>

            <h1 class="text-xl text-center mt-10 mb-6 bg-gradient-to-r from-blue dark:from-blue to-blue-800 dark:to-[#57e8fc] from-40% to-65% bg-clip-text text-transparent">Mi saldo</h1>
            <div class="flex items-center justify-center gap-2">
                <span class="text-4xl font-medium bg-gradient-to-t from-blue dark:from-blue to-blue-800 dark:to-[#57e8fc] from-40% to-65% dark:from-10% dark:to-50% bg-clip-text text-transparent">{{ balance }}</span>
                <img src="@/assets/uibcoin.png" alt="TUIB" class="w-8 h-8" />
            </div>
        </section>

        <section>
            <h1 class="relative text-xl text-center mt-16 mb-6 bg-gradient-to-r from-blue dark:from-blue to-blue-800 dark:to-[#57e8fc] from-40% to-65% bg-clip-text text-transparent z-1">Enviar transacción</h1>

            <div class="w-full max-w-md mx-auto relative rounded-2xl shadow-light dark:shadow-dark">
                <form @submit.prevent="handleSendTransaction" class="bg-soft-white/70 dark:bg-dark-blue/70 flex flex-col justify-center gap-4 p-6 rounded-2xl">
                    <!-- Direccion de destino -->
                    <div class="w-full relative h-10">
                        <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16"
                            xmlns="http://www.w3.org/2000/svg" class="input-icon">
                            <path
                                d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z">
                            </path>
                        </svg>
                        <input 
                            v-model="recipientAddress" 
                            type="text" 
                            name="recipient" 
                            class="input-field h-full" 
                            placeholder="Dirección de destino"
                            required
                        >
                    </div>

                    <!-- Cantidad -->
                    <div class="w-full relative h-10">
                        <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16"
                            xmlns="http://www.w3.org/2000/svg" class="input-icon">
                            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                        </svg>
                        <input 
                            v-model="amount" 
                            type="number" 
                            name="amount" 
                            class="input-field h-full" 
                            placeholder="Cantidad"
                            min="0.00000001"
                            step="0.00000001"
                            required
                        >
                    </div>

                    <!-- Botón de envío -->
                    <button 
                        type="submit" 
                        class="neu-button text-light-blue inset-shadow-light dark:inset-shadow-dark w-full bg-soft-white dark:bg-dark-blue hover:bg-transparent border-transparent rounded-full h-10 flex items-center justify-center gap-2"
                    >
                        <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                        </svg>
                        Enviar Transacción
                    </button>
                </form>
            </div>
        </section>
    </div>
</template>

<script setup>
import api from '@/api/axios'
import { useAuthStore } from '@/store/auth'
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert2'

const address = ref('');
const balance = ref(0);
const recipientAddress = ref('');
const amount = ref('');

onMounted(() => {
    const authStore = useAuthStore();
    const username = authStore.user;
    if (!username) {
        console.error('Username not found');
        return;
    }

    // Cargar dirección
    api.get('/address', { params: { username } })
        .then(response => {
            address.value = response.data.address;
        })
        .catch(error => {
            console.error('Error fetching address:', error);
        });

    // Cargar saldo
    api.get('/balance', { params: { username } })
        .then(response => {
            balance.value = response.data.balance;
        })
        .catch(error => {
            console.error('Error fetching balance:', error);
        });
});

async function handleSendTransaction() {
    try {
        if (amount.value <= 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Cantidad inválida',
                text: 'La cantidad debe ser mayor a 0',
                confirmButtonColor: '#0e6efd'
            });
            return;
        }

        if (amount.value > balance.value) {
            Swal.fire({
                icon: 'error',
                title: 'Saldo insuficiente',
                text: `Tu saldo actual es ${balance.value} TUIB`,
                confirmButtonColor: '#0e6efd'
            });
            return;
        }

        // Mostrar loading
        Swal.fire({
            title: 'Enviando transacción...',
            text: 'Por favor espera',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const response = await api.post('/sendTransaction', {
            address: recipientAddress.value,
            amount: amount.value
        });

        // Cerrar loading y mostrar éxito
        Swal.fire({
            icon: 'success',
            title: '¡Transacción enviada!',
            text: `Se han enviado ${amount.value} TUIB exitosamente`,
            confirmButtonColor: '#0e6efd'
        });

    } catch (error) {
        console.error('Error sending transaction:', error);
        
        Swal.fire({
            icon: 'error',
            title: 'Error al enviar',
            text: 'No se pudo procesar la transacción. Inténtalo de nuevo.',
            confirmButtonColor: '#0e6efd'
        });
    }
}
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

.dark .neu-button:focus {
    outline: none;
    box-shadow: inset 2px 2px 5px rgb(18 18 18 / 85%), inset -2px -2px 5px rgba(255, 255, 255, 0.15), 2px 2px 5px rgb(18 18 18 / 85%), -2px -2px 5px rgba(255, 255, 255, 0.15);
}
</style>