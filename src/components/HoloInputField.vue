<template>
    <!-- From Uiverse.io by reglobby -->
    <div :class="['input-container w-3xs md:w-md', cargando ? 'node-loading' : '']">
        <div class="input-field-container">
            <input id="node-url-input" type="text" class="holo-input" placeholder="192.168.1.1" v-model="url"
                :disabled="cargando" />
            <div class="input-border"></div>
            <div class="holo-scan-line"></div>
            <div class="input-glow"></div>
            <div class="input-active-indicator"></div>

            <div class="input-data-visualization">
                <div class="data-segment" style="--index: 1;"></div>
                <div class="data-segment" style="--index: 2;"></div>
                <div class="data-segment" style="--index: 3;"></div>
                <div class="data-segment" style="--index: 4;"></div>
                <div class="data-segment" style="--index: 5;"></div>
                <div class="data-segment" style="--index: 6;"></div>
                <div class="data-segment" style="--index: 7;"></div>
                <div class="data-segment" style="--index: 8;"></div>
                <div class="data-segment" style="--index: 9;"></div>
                <div class="data-segment" style="--index: 10;"></div>
                <div class="data-segment" style="--index: 11;"></div>
                <div class="data-segment" style="--index: 12;"></div>
                <div class="data-segment" style="--index: 13;"></div>
                <div class="data-segment" style="--index: 14;"></div>
                <div class="data-segment" style="--index: 15;"></div>
                <div class="data-segment" style="--index: 16;"></div>
                <div class="data-segment" style="--index: 17;"></div>
                <div class="data-segment" style="--index: 18;"></div>
                <div class="data-segment" style="--index: 19;"></div>
                <div class="data-segment" style="--index: 20;"></div>
            </div>

            <div class="input-particles">
                <div class="input-particle" style="--index: 1; top: 20%; left: 10%;"></div>
                <div class="input-particle" style="--index: 2; top: 65%; left: 25%;"></div>
                <div class="input-particle" style="--index: 3; top: 40%; left: 40%;"></div>
                <div class="input-particle" style="--index: 4; top: 75%; left: 60%;"></div>
                <div class="input-particle" style="--index: 5; top: 30%; left: 75%;"></div>
                <div class="input-particle" style="--index: 6; top: 60%; left: 90%;"></div>
            </div>

            <div class="input-holo-overlay"></div>

            <div class="interface-lines">
                <div class="interface-line"></div>
                <div class="interface-line"></div>
                <div class="interface-line"></div>
                <div class="interface-line"></div>
            </div>

            <div class="hex-decoration"></div>
            <div class="input-status">Dirección del nodo</div>
            <div class="power-indicator"></div>

            <div class="frequency-spectrum">
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
                <div class="frequency-bar"></div>
            </div>

            <div class="input-decoration">
                <div class="decoration-dot"></div>
                <div class="decoration-line"></div>
                <div class="decoration-dot"></div>
                <div class="decoration-line"></div>
                <div class="decoration-dot"></div>
                <div class="decoration-line"></div>
                <div class="decoration-dot"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useConnectionStore } from '@/store/connection'

defineProps(['cargando'])

const store = useConnectionStore()

const url = computed({
    get: () => store.draftUrl,
    set: (val) => store.setDraftUrl(val),
})
</script>

<style scoped>
.input-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
}

.input-field-container {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
}

.holo-input {
    width: 100%;
    height: 60px;
    background: rgba(0, 12, 36, 0.7);
    border: none;
    outline: none;
    padding: 0 60px 0 20px;
    color: rgba(0, 195, 255, 0.9);
    font-family: "Orbitron", sans-serif;
    font-size: 18px;
    letter-spacing: 1px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 12px;
    box-shadow:
        0 0 15px rgba(0, 140, 255, 0.3),
        inset 0 0 10px rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease;
    text-shadow: 0 0 5px rgba(0, 160, 255, 0.7);
    z-index: 1;
}

.holo-input::placeholder {
    color: rgba(0, 110, 200, 0.4);
    transition: all 0.3s ease;
}

.input-border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border: 1px solid rgba(0, 150, 255, 0.4);
    border-radius: 12px;
    z-index: 2;
}

.input-border::before,
.input-border::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(0, 150, 255, 0.7);
    z-index: 2;
    transition: all 0.3s ease;
}

.input-border::before {
    top: -1px;
    left: -1px;
    border-right: none;
    border-bottom: none;
    border-radius: 12px 0 0 0;
}

.input-border::after {
    bottom: -1px;
    right: -1px;
    border-left: none;
    border-top: none;
    border-radius: 0 0 12px 0;
}

.holo-scan-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 150, 255, 0.5) 20%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(0, 150, 255, 0.5) 80%,
            rgba(0, 0, 0, 0) 100%);
    top: 0;
    left: 0;
    opacity: 0;
    filter: blur(1px);
    z-index: 3;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.input-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(ellipse at center,
            rgba(0, 150, 255, 0.1) 0%,
            rgba(0, 0, 0, 0) 70%);
    opacity: 0;
    border-radius: 4px;
    z-index: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.input-active-indicator {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(0, 150, 255, 0.7);
    border-radius: 50%;
    right: 20px;
    top: 25px;
    opacity: 0.3;
    box-shadow: 0 0 10px rgba(0, 150, 255, 0.5);
    transition: all 0.3s ease;
    z-index: 2;
}

.input-data-visualization {
    position: absolute;
    width: calc(100% - 40px);
    height: 3px;
    bottom: 12px;
    left: 20px;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.data-segment {
    width: 4%;
    height: 100%;
    background: rgba(0, 150, 255, 0.3);
    transition: all 0.5s ease;
}

.data-segment:nth-child(even) {
    height: 5px;
    transform: translateY(-1px);
}

.input-particles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 3;
    overflow: hidden;
    border-radius: 4px;
}

.input-particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(0, 150, 255, 0.7);
    border-radius: 50%;
    opacity: 0;
    filter: blur(1px);
    transition: all 0.3s ease;
    box-shadow: 0 0 5px rgba(0, 150, 255, 0.7);
}

.input-holo-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(90deg,
            rgba(0, 150, 255, 0.05) 25%,
            rgba(0, 150, 255, 0.02) 50%,
            rgba(0, 150, 255, 0.05) 75%);
    background-size: 8px 100%;
    opacity: 0.5;
    pointer-events: none;
    z-index: 4;
    mix-blend-mode: overlay;
}

.interface-lines {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 2;
}

.interface-line {
    position: absolute;
    background: rgba(0, 150, 255, 0.3);
    transition: all 0.3s ease;
}

.interface-line:nth-child(1) {
    width: 20px;
    height: 1px;
    top: 15px;
    right: 15px;
}

.interface-line:nth-child(2) {
    width: 1px;
    height: 20px;
    top: 15px;
    right: 15px;
}

.interface-line:nth-child(3) {
    width: 1px;
    height: 20px;
    bottom: 15px;
    left: 15px;
}

.interface-line:nth-child(4) {
    width: 20px;
    height: 1px;
    bottom: 15px;
    left: 15px;
}

.hex-decoration {
    position: absolute;
    width: 30px;
    height: 34px;
    background: transparent;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border: 1px solid rgba(0, 150, 255, 0.3);
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
    transition: all 0.3s ease;
    z-index: 2;
}

.input-status {
    position: absolute;
    bottom: -25px;
    right: 0;
    font-size: 12px;
    color: rgba(0, 150, 255, 0.5);
    letter-spacing: 1px;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
    text-transform: uppercase;
}

@keyframes scan-animation {
    0% {
        top: 0;
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        top: 100%;
        opacity: 0;
    }
}

@keyframes data-pulse {
    0% {
        transform: scaleY(1);
    }

    50% {
        transform: scaleY(1.8);
    }

    100% {
        transform: scaleY(1);
    }
}

@keyframes particle-float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.node-loading .holo-input,
.holo-input:focus {
    background: rgba(0, 22, 46, 0.8);
    box-shadow:
        0 0 20px rgba(0, 150, 255, 0.4),
        inset 0 0 15px rgba(0, 0, 0, 0.9);
    color: rgba(0, 210, 255, 1);
}

.node-loading .holo-input::placeholder,
.holo-input:focus::placeholder {
    color: rgba(0, 150, 255, 0.3);
    transform: translateX(10px);
}

.node-loading .holo-input~.input-border,
.holo-input:focus~.input-border {
    border-color: rgba(0, 180, 255, 0.7);
}

.node-loading .holo-input~.input-border::before,
.node-loading .holo-input~.input-border::after,
.holo-input:focus~.input-border::before,
.holo-input:focus~.input-border::after {
    border-color: rgba(0, 180, 255, 1);
    width: 30px;
    height: 30px;
}

.node-loading .holo-input~.holo-scan-line,
.holo-input:focus~.holo-scan-line {
    opacity: 1;
    animation: scan-animation 2s infinite ease-in-out;
}

.node-loading .holo-input~.input-glow,
.holo-input:focus~.input-glow {
    opacity: 1;
}

.node-loading .holo-input~.input-active-indicator,
.holo-input:focus~.input-active-indicator {
    opacity: 1;
    background: rgba(0, 200, 255, 1);
    box-shadow: 0 0 15px rgba(0, 200, 255, 0.7);
    transform: scale(1.2);
}

.node-loading .holo-input~.input-data-visualization,
.holo-input:focus~.input-data-visualization {
    opacity: 1;
}

.node-loading .holo-input~.input-data-visualization .data-segment,
.holo-input:focus~.input-data-visualization .data-segment {
    animation: data-pulse 2s infinite;
    animation-delay: calc(var(--index) * 0.1s);
}

.node-loading .holo-input~.input-status,
.holo-input:focus~.input-status {
    opacity: 1;
}

.node-loading .holo-input~.interface-lines .interface-line,
.holo-input:focus~.interface-lines .interface-line {
    background: rgba(0, 200, 255, 0.6);
}

.node-loading .holo-input~.hex-decoration,
.holo-input:focus~.hex-decoration {
    border-color: rgba(0, 200, 255, 0.6);
    box-shadow: 0 0 10px rgba(0, 200, 255, 0.3);
    transform: translateY(-50%) rotate(30deg);
}

.node-loading .holo-input~.input-particles .input-particle,
.holo-input:focus~.input-particles .input-particle {
    opacity: 1;
    animation: particle-float 3s infinite ease-in-out;
    animation-delay: calc(var(--index) * 0.2s);
}

.holo-input:hover {
    background: rgba(0, 15, 40, 0.75);
}

.holo-input:hover~.input-active-indicator {
    opacity: 0.6;
}

.holo-input:hover~.hex-decoration {
    border-color: rgba(0, 180, 255, 0.5);
}

.power-indicator {
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,
            rgba(0, 180, 255, 0.7) 0%,
            rgba(0, 180, 255, 0.3) 100%);
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    z-index: 3;
}


.node-loading .holo-input~.power-indicator,
.holo-input:focus~.power-indicator {
    transform: scaleX(1);
}

.input-decoration {
    position: absolute;
    top: 50%;
    left: -30px;
    transform: translateY(-50%);
    width: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    opacity: 0.7;
    transition: all 0.3s ease;
    z-index: 2;
    pointer-events: none;
}

.decoration-dot {
    width: 4px;
    height: 4px;
    background: rgba(0, 150, 255, 0.7);
    border-radius: 50%;
    margin: 3px 0;
}

.decoration-line {
    width: 15px;
    height: 1px;
    background: rgba(0, 150, 255, 0.5);
    margin: 3px 0;
}


.node-loading .holo-input~.input-decoration,
.holo-input:focus~.input-decoration {
    opacity: 1;
    transform: translateY(-50%) translateX(-5px);
}

.node-loading .holo-input~.input-decoration .decoration-dot,
.holo-input:focus~.input-decoration .decoration-dot {
    background: rgba(0, 200, 255, 1);
    box-shadow: 0 0 5px rgba(0, 200, 255, 0.7);
}

.node-loading .holo-input~.input-decoration .decoration-line,
.holo-input:focus~.input-decoration .decoration-line {
    background: rgba(0, 200, 255, 0.7);
    box-shadow: 0 0 3px rgba(0, 200, 255, 0.5);
}

.frequency-spectrum {
    position: absolute;
    bottom: -40px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 40px;
    width: 260px;
    gap: 3px;
    left: 50%;
    transform: translateX(-50%);
}

.frequency-bar {
    width: 4px;
    height: 5px;
    background: rgba(0, 162, 255, 0.5);
    border-radius: 0 0 2px 2px;
    transition:
        height 0.3s ease,
        background 0.3s ease;
}

.node-loading .frequency-spectrum .frequency-bar {
    background: rgba(0, 255, 136, 0.5);
    animation: frequency-animation 1.5s infinite ease;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(1) {
    animation-delay: 0.1s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(2) {
    animation-delay: 0.2s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(3) {
    animation-delay: 0.1s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(4) {
    animation-delay: 0.3s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(5) {
    animation-delay: 0.5s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(6) {
    animation-delay: 0.2s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(7) {
    animation-delay: 0.4s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(8) {
    animation-delay: 0.1s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(9) {
    animation-delay: 0.3s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(10) {
    animation-delay: 0.2s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(11) {
    animation-delay: 0.5s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(12) {
    animation-delay: 0.3s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(13) {
    animation-delay: 0.1s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(14) {
    animation-delay: 0.4s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(15) {
    animation-delay: 0.2s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(16) {
    animation-delay: 0.3s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(17) {
    animation-delay: 0.1s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(18) {
    animation-delay: 0.5s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(19) {
    animation-delay: 0.2s;
}

.node-loading .frequency-spectrum .frequency-bar:nth-child(20) {
    animation-delay: 0.4s;
}

@keyframes frequency-animation {
    0% {
        height: 5px;
    }

    50% {
        height: 35px;
    }

    100% {
        height: 5px;
    }
}
</style>