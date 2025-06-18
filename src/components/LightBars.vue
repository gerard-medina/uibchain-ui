<template>
    <div class="absolute inset-0 -z-1 overflow-hidden pointer-events-none">
        <div class="relative h-screen w-full flex">
            <!-- Izquierda -->
            <!-- Barras 1 -->
            <div class="absolute left-1/50 w-[4px] h-[70vh] bg-white dark:bg-black">
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="1"
                        class="absolute -top-[10vh] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                    </div>
                </div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -bottom-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                    <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                    <div data-group="1"
                        class="absolute -top-[calc(10vh+70vh)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-1/50 w-1 h-[20vh] bg-white dark:bg-black">
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="1"
                        class="absolute -top-[calc(10vh+100vh-70vh)] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -top-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                    <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                    <div data-group="1"
                        class="absolute -top-[calc(10vh+100vh-70vh-12px)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
            </div>

            <!-- Barras 2 -->
            <div class="absolute left-3/50 w-[4px] h-[50vh] bg-white dark:bg-black">
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="2"
                        class="absolute -top-[10vh] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                    </div>
                </div>
                <div class="absolute w-[4px] h-[20vh] bg-white dark:bg-black origin-[0%_0%] -rotate-30">
                    <div class="relative w-full h-full overflow-hidden">
                        <div data-group="2"
                            class="absolute -top-[calc(10vh+50vh)] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                    <div
                        class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -bottom-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                        <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                        <div data-group="2"
                            class="absolute -top-[calc(10vh+50vh+20vh)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-[calc(3/50*100%+0.5*20vh+0.5*5px)] w-1 h-[25vh] bg-white dark:bg-black"> <!-- 0.5 = sin(30º) -->
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="2"
                        class="absolute -top-[calc(10vh+100vh-(50vh+20vh))] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -top-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                    <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                    <div data-group="2"
                        class="absolute -top-[calc(10vh+100vh-(50vh+20vh)-12px)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
            </div>

            <!-- Barras 3 -->
            <div class="absolute left-4/50 w-[4px] h-[50vh] bg-white dark:bg-black">
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="3"
                        class="absolute -top-[10vh] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                    </div>
                </div>
                <div class="absolute w-[4px] h-[30vh] bg-white dark:bg-black origin-[0%_0%] -rotate-30">
                    <div class="relative w-full h-full overflow-hidden">
                        <div data-group="3"
                            class="absolute -top-[calc(10vh+50vh)] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                    <div
                        class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -bottom-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                        <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                        <div data-group="3"
                            class="absolute -top-[calc(10vh+50vh+30vh)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-[calc(4/50*100%+0.5*30vh+0.5*5px)] w-1 h-[15vh] bg-white dark:bg-black"> <!-- 0.5 = sin(30º) -->
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="3"
                        class="absolute -top-[calc(10vh+100vh-(50vh+30vh))] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -top-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                    <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                    <div data-group="3"
                        class="absolute -top-[calc(10vh+100vh-(50vh+30vh)-12px)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const maxDelay = 4
    const groups = new Map()

    document.querySelectorAll('[data-group]').forEach(el => {
        const group = el.getAttribute('data-group')

        if (!groups.has(group)) {
            const delay = (Math.random() * maxDelay).toFixed(2) + 's'
            groups.set(group, delay)
        }

        el.style.animationDelay = groups.get(group)
    })
})
</script>