<template>
    <div class="container mx-auto max-w-screen-xl">
        <section class="w-full pt-10 p-5 sm:p-10">
            <h1 class="text-xl text-center mb-8 bg-gradient-to-r from-blue dark:from-blue to-blue-800 dark:to-[#57e8fc] from-40% to-65% bg-clip-text text-transparent">Transacciones pendientes</h1>
            <div v-if="paginatedPool.length !== 0" class="relative overflow-x-auto rounded-2xl shadow-light dark:shadow-dark scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right">
                        <thead class="text-xs uppercase border-b">
                            <tr>
                                <th scope="col" class="px-3 md:px-6 py-4">Id</th>
                                <th scope="col" class="px-3 md:px-6 py-4">Emisario</th>
                                <th scope="col" class="px-3 md:px-6 py-4">Receptor</th>
                                <th scope="col" class="px-3 md:px-6 py-4">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="transaction in paginatedPool" :key="transaction.id" class="border-b hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-3 md:px-6 py-3">{{ cutExtraChars(transaction.id) }}</td>
                                <td class="px-3 md:px-6 py-3">{{ cutExtraChars(transaction.senderAddress ?? 'coinbase') }}</td>
                                <td class="px-3 md:px-6 py-3">{{ cutExtraChars(transaction.trOuts[0].address) }}</td>
                                <td class="px-3 md:px-6 py-3">{{ cutExtraChars(transaction.trOuts[0].amount) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 pb-3 px-3" aria-label="Table navigation">
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                        Mostrando <span class="font-semibold text-gray-900 dark:text-white">{{ startRow + 1 }}-{{ endRow }}</span> de <span class="font-semibold text-gray-900 dark:text-white">{{ pool.length }}</span>
                    </span>
                    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <button @click="prevPage" :disabled="currentPage === 1" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Anterior</button>
                        </li>
                        <li v-for="page in totalPages" :key="page">
                            <button @click="goToPage(page)" :class="['flex items-center justify-center px-3 h-8 leading-tight border',
                                page === currentPage ? 'text-blue-600 border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' :
                                'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white']">
                                {{ page }}
                            </button>
                        </li>
                        <li>
                            <button @click="nextPage" :disabled="currentPage === totalPages" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Siguiente</button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div v-if="paginatedPool.length === 0" class="text-center text-gray-500 dark:text-gray-400">
                No hay transacciones pendientes.
            </div>
        </section>
        <section class="w-full pt-10 p-5 sm:p-10">
            <h1 class="relative z-1 text-xl text-center mb-8 bg-gradient-to-r from-blue dark:from-blue to-blue-800 dark:to-[#57e8fc] from-40% to-65% bg-clip-text text-transparent">Blockchain</h1>

            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                <div v-for="block in blocks" :key="block.id" class="w-full max-w-md relative rounded-lg shadow-light dark:shadow-dark flex flex-col">
                    <div class="absolute z-1 top-0 right-0 bg-blue text-xs text-white font-medium px-2 py-1 rounded-tr-md rounded-bl-md">{{ block.index === 0 ? 'genesis' : '#' + block.index }}</div>
                    <div class="flex justify-center p-2 border-b z-1">
                        <p class="max-w-60 truncate" :title="block.hash"><strong>Hash:</strong> {{ block.hash }}</p>
                    </div>
                    <div class="w-full flex flex-1 z-1">
                        <div class="w-1/3 p-2 border-r">
                            <p><strong>Fecha:</strong> {{ new Date(block.timestamp * 1000).toLocaleString() }}</p>
                            <p><strong>Dificultad:</strong> {{ block.difficulty }}</p>
                            <p><strong>Nonce:</strong> {{ block.nonce }}</p>
                        </div>
                        <div class="w-2/3">
                            <ul>
                                <li v-for="transaction in block.data" :key="transaction.id">
                                    <div class="flex items-center justify-between px-2 py-1 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <span class="flex-1 truncate font-mono text-sm text-gray-700 dark:text-gray-300" :title="transaction.senderAddress ?? 'coinbase'">
                                            {{ transaction.senderAddress ?? 'coinbase' }}
                                        </span>
    
                                        <div class="flex flex-col items-center">
                                            <!-- Cantidad encima -->
                                            <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">{{ transaction.trOuts[0].amount }}</span>
                                            <!-- Flecha -->
                                            <span class="-mt-4 mx-5 text-lg text-gray-500 dark:text-gray-400">
                                                →
                                            </span>
                                        </div>

                                        <span class="flex-1 truncate font-mono text-sm text-gray-700 dark:text-gray-300 text-right" :title="transaction.trOuts[0].address">
                                            {{ transaction.trOuts[0].address }}
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex justify-center p-2 border-t z-1">
                        <p class="max-w-60 truncate" :title="block.previousHash"><strong>Hash anterior:</strong> {{ block.previousHash }}</p>
                    </div>
                </div>
            </div>

            <div v-if="blocks.length === 0" class="text-center text-gray-500 dark:text-gray-400">
                No hay bloques disponibles.
            </div>
        </section>
    </div>
</template>

<script setup>
import api from '@/api/axios'
import { ref, computed, onMounted } from 'vue';

// Pool
const pool = ref([])
const currentPage = ref(1)
const rowsPerPage = 10
const totalPages = computed(() => Math.ceil(pool.value.length / rowsPerPage))
const startRow = computed(() => (currentPage.value - 1) * rowsPerPage)
const endRow = computed(() => Math.min(currentPage.value * rowsPerPage, pool.value.length))
const paginatedPool = computed(() => pool.value.slice(startRow.value, endRow.value))

// Blockchain
const blocks = ref([])

onMounted(() => {
    api.get('/blocks')
        .then(response => {
            blocks.value = response.data;
        })
        .catch(error => {
            console.error('Error fetching blocks:', error);
        });

    api.get('/transactionPool')
        .then(response => {
            pool.value = response.data;
        })
        .catch(error => {
            console.error('Error fetching blocks:', error);
        });
});

function cutExtraChars(str) {
    return str.length > 8 ? str.slice(0, 8) + '...' : str;
}

function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) currentPage.value = page
}
function prevPage() {
    if (currentPage.value > 1) currentPage.value--
}
function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++
}
</script>