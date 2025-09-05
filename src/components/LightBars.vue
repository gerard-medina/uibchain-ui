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
                <div class="absolute w-[4px] h-[20vh] bg-white dark:bg-black origin-top-left -rotate-30">
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
                <div class="absolute w-[4px] h-[30vh] bg-white dark:bg-black origin-top-left -rotate-30">
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

            <!-- Barras 4 -->
            <div class="hidden md:block absolute left-7/50 w-[4px] h-[60vh] bg-white dark:bg-black">
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="4"
                        class="absolute -top-[10vh] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                    </div>
                </div>
                <div class="absolute w-[4px] h-[25vh] bg-white dark:bg-black origin-top-left -rotate-30">
                    <div class="relative w-full h-full overflow-hidden">
                        <div data-group="4"
                            class="absolute -top-[calc(10vh+60vh)] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                    <div
                        class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -bottom-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                        <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                        <div data-group="4"
                            class="absolute -top-[calc(10vh+60vh+25vh)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden md:block absolute bottom-0 left-[calc(7/50*100%+0.5*25vh+0.5*5px)] w-1 h-[10vh] bg-white dark:bg-black"> <!-- 0.5 = sin(30º) -->
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="4"
                        class="absolute -top-[calc(10vh+100vh-(60vh+25vh))] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -top-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                    <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                    <div data-group="4"
                        class="absolute -top-[calc(10vh+100vh-(60vh+25vh)-12px)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
            </div>

            <!-- Barras 5 -->
            <div class="hidden md:block absolute left-10/50 w-[4px] h-[70vh] bg-white dark:bg-black">
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="5"
                        class="absolute -top-[10vh] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                    </div>
                </div>
                <div class="absolute w-[4px] h-[20vh] bg-white dark:bg-black origin-top-left -rotate-30">
                    <div class="relative w-full h-full overflow-hidden">
                        <div data-group="5"
                            class="absolute -top-[calc(10vh+70vh)] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                    <div
                        class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -bottom-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                        <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                        <div data-group="5"
                            class="absolute -top-[calc(10vh+70vh+20vh)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden md:block absolute bottom-0 left-[calc(10/50*100%+0.5*20vh+0.5*5px)] w-1 h-[8vh] bg-white dark:bg-black"> <!-- 0.5 = sin(30º) -->
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="5"
                        class="absolute -top-[calc(10vh+100vh-(70vh+20vh))] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -top-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                    <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                    <div data-group="5"
                        class="absolute -top-[calc(10vh+100vh-(70vh+20vh)-12px)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
            </div>

            <!-- Derecha -->
            <!-- Barras 6 -->
            <div class="absolute right-2/50 w-[4px] h-[70vh] bg-white dark:bg-black">
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="6"
                        class="absolute -top-[10vh] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                    </div>
                </div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -bottom-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                    <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                    <div data-group="6"
                        class="absolute -top-[calc(10vh+70vh)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 right-2/50 w-1 h-[20vh] bg-white dark:bg-black">
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="6"
                        class="absolute -top-[calc(10vh+100vh-70vh)] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -top-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                    <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                    <div data-group="6"
                        class="absolute -top-[calc(10vh+100vh-70vh-12px)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
            </div>

            <!-- Barras 7 -->
            <div class="absolute right-3/50 w-[4px] h-[50vh] bg-white dark:bg-black">
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="7"
                        class="absolute -top-[10vh] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                    </div>
                </div>
                <div class="absolute w-[4px] h-[20vh] bg-white dark:bg-black origin-top-right rotate-30">
                    <div class="relative w-full h-full overflow-hidden">
                        <div data-group="7"
                            class="absolute -top-[calc(10vh+50vh)] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                    <div
                        class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -bottom-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                        <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                        <div data-group="7"
                            class="absolute -top-[calc(10vh+50vh+20vh)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 right-[calc(3/50*100%+0.5*20vh+0.5*5px)] w-1 h-[25vh] bg-white dark:bg-black"> <!-- 0.5 = sin(30º) -->
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="7"
                        class="absolute -top-[calc(10vh+100vh-(50vh+20vh))] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -top-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                    <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                    <div data-group="7"
                        class="absolute -top-[calc(10vh+100vh-(50vh+20vh)-12px)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
            </div>

            <!-- Barras 8 -->
            <div class="absolute right-4/50 w-[4px] h-[50vh] bg-white dark:bg-black">
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="8"
                        class="absolute -top-[10vh] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                    </div>
                </div>
                <div class="absolute w-[4px] h-[30vh] bg-white dark:bg-black origin-top-right rotate-30">
                    <div class="relative w-full h-full overflow-hidden">
                        <div data-group="8"
                            class="absolute -top-[calc(10vh+50vh)] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                    <div
                        class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -bottom-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                        <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                        <div data-group="8"
                            class="absolute -top-[calc(10vh+50vh+30vh)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 right-[calc(4/50*100%+0.5*30vh+0.5*5px)] w-1 h-[15vh] bg-white dark:bg-black"> <!-- 0.5 = sin(30º) -->
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="8"
                        class="absolute -top-[calc(10vh+100vh-(50vh+30vh))] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -top-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                    <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                    <div data-group="8"
                        class="absolute -top-[calc(10vh+100vh-(50vh+30vh)-12px)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
            </div>

            <!-- Barras 9 -->
            <div class="hidden md:block absolute right-7/50 w-[4px] h-[60vh] bg-white dark:bg-black">
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="9"
                        class="absolute -top-[10vh] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                    </div>
                </div>
                <div class="absolute w-[4px] h-[25vh] bg-white dark:bg-black origin-top-right rotate-30">
                    <div class="relative w-full h-full overflow-hidden">
                        <div data-group="9"
                            class="absolute -top-[calc(10vh+60vh)] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                    <div
                        class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -bottom-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                        <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                        <div data-group="9"
                            class="absolute -top-[calc(10vh+60vh+25vh)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden md:block absolute bottom-0 right-[calc(7/50*100%+0.5*25vh+0.5*5px)] w-1 h-[10vh] bg-white dark:bg-black"> <!-- 0.5 = sin(30º) -->
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="9"
                        class="absolute -top-[calc(10vh+100vh-(60vh+25vh))] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -top-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                    <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                    <div data-group="9"
                        class="absolute -top-[calc(10vh+100vh-(60vh+25vh)-12px)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
            </div>

            <!-- Barras 10 -->
            <div class="hidden md:block absolute right-10/50 w-[4px] h-[70vh] bg-white dark:bg-black">
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="10"
                        class="absolute -top-[10vh] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                    </div>
                </div>
                <div class="absolute w-[4px] h-[20vh] bg-white dark:bg-black origin-top-right rotate-30">
                    <div class="relative w-full h-full overflow-hidden">
                        <div data-group="10"
                            class="absolute -top-[calc(10vh+70vh)] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                    <div
                        class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -bottom-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                        <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                        <div data-group="10"
                            class="absolute -top-[calc(10vh+70vh+20vh)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-drop">
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden md:block absolute bottom-0 right-[calc(10/50*100%+0.5*20vh+0.5*5px)] w-1 h-[8vh] bg-white dark:bg-black"> <!-- 0.5 = sin(30º) -->
                <div class="relative w-full h-full overflow-hidden">
                    <div data-group="10"
                        class="absolute -top-[calc(10vh+100vh-(70vh+20vh))] inset-x-0 mx-auto w-[1px] h-[10px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
                    </div>
                </div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 flex justify-center items-center -top-[12px] w-[14px] h-[14px] rounded-full overflow-hidden bg-white dark:bg-black">
                    <div class="relative w-3/5 h-3/5 rounded-full bg-soft-white dark:bg-dark-blue z-1"></div>
                    <div data-group="10"
                        class="absolute -top-[calc(10vh+100vh-(70vh+20vh)-12px)] inset-x-0 mx-auto w-[10px] h-[14px] bg-white blur-[8px] shadow-[0_0_10px_13px] shadow-blue dark:shadow-white animate-rise">
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