<template>
    <button class="cursor-pointer">
        <div
            class="w-[83px] h-[83px] bg-blue-50 rounded-full relative shadow-[inset_0px_0px_1px_1px_rgba(0,0,0,0.3),_2px_3px_5px_rgba(0,0,0,0.1)] flex items-center justify-center">
            <div
                class="absolute w-[72px] h-[72px] z-10 bg-black rounded-full left-1/2 -translate-x-1/2 top-[5px] blur-[1px]">
            </div>
            <label
                class="group cursor-pointer absolute w-[72px] h-[72px] bg-gradient-to-b from-blue-600 to-blue-400 rounded-full left-1/2 -translate-x-1/2 top-[5px] shadow-[inset_0px_4px_2px_#60a5fa,inset_0px_-4px_0px_#1e3a8a,0px_0px_2px_rgba(0,0,0,10)] active:shadow-[inset_0px_4px_2px_rgba(96,165,250,0.5),inset_0px_-4px_2px_rgba(37,99,235,0.5),0px_0px_2px_rgba(0,0,0,10)] z-20 flex items-center justify-center">
                <div class="w-10 group-active:w-[36px] fill-blue-100 text-soft-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.5)]">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        class="" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v10m5.657-4.343a8 8 0 11-11.314 0" />
                    </svg>
                </div>
            </label>
        </div>
    </button>
</template>