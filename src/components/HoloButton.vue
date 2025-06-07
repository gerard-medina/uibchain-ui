<template>
    <div :class="['button-container mt-5', cargando ? 'node-loading' : '']">
        <button id="holo-button" :disabled="cargando" @click="realizarLlamada" class="hidden"></button>
        <h1 class="status-text mb-6">{{ cargando ? 'CONECTANDO' : 'INICIAR ENLACE' }}</h1>

        <label class="holo-button" for="holo-button">
            <div class="holo-box">
                <div class="holo-inner"></div>
                <div class="scan-effect"></div>
                <div class="holo-particles">
                    <div class="holo-particle"></div>
                    <div class="holo-particle"></div>
                    <div class="holo-particle"></div>
                    <div class="holo-particle"></div>
                    <div class="holo-particle"></div>
                    <div class="holo-particle"></div>
                </div>

                <div class="activation-rings">
                    <div class="activation-ring"></div>
                    <div class="activation-ring"></div>
                    <div class="activation-ring"></div>
                </div>

                <div class="cube-transform">
                    <div class="cube-face"></div>
                    <div class="cube-face"></div>
                    <div class="cube-face"></div>
                    <div class="cube-face"></div>
                    <div class="cube-face"></div>
                    <div class="cube-face"></div>
                </div>
            </div>

            <div class="corner-accent"></div>
            <div class="corner-accent"></div>
            <div class="corner-accent"></div>
            <div class="corner-accent"></div>

            <div class="holo-glow"></div>
        </label>

        <div class="data-chips">
            <div class="data-chip">STATUS: IDLE [0x4F]</div>
            <div class="data-chip">QUANTUM VERIFY: 82.6%</div>
            <div class="data-chip">SYNCH: PENDING</div>
            <div class="data-chip">0x7A2C8B9F</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    cargando: Boolean
})

const emit = defineEmits(['update:cargando'])

const realizarLlamada = async () => {
    console.log('Llamada a la API iniciada');
    if (props.cargando) return
    emit('update:cargando', true)
    try {
        // Simulación de una llamada a un endpoint
        await new Promise(resolve => setTimeout(resolve, 2000))
    } catch (error) {
        console.error('Error en la llamada:', error)
    } finally {
        emit('update:cargando', false)
    }
}
</script>

<style scoped>
.button-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    z-index: 10;
}

.holo-button {
    position: relative;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transform-style: preserve-3d;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.holo-box {
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(0, 162, 255, 0.7);
    border-radius: 12px;
    background-color: rgba(0, 24, 55, 0.5);
    box-shadow:
        0 0 10px rgba(0, 162, 255, 0.5),
        inset 0 0 15px rgba(0, 162, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all 0.3s ease;
    transform-style: preserve-3d;
}

.holo-inner {
    position: absolute;
    width: 30%;
    height: 30%;
    background-color: rgba(0, 162, 255, 0.5);
    border-radius: 4px;
    opacity: 0;
    transform: scale(0) rotate(45deg);
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 162, 255, 0.8);
}

.scan-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,
            transparent,
            rgba(0, 162, 255, 0.8),
            transparent);
    animation: scan-off 4s infinite;
    opacity: 0.3;
    transition: all 0.3s ease;
}

@keyframes scan-off {
    0% {
        left: -100%;
        opacity: 0.3;
    }

    100% {
        left: 100%;
        opacity: 0.3;
    }
}

@keyframes scan-on {
    0% {
        left: -100%;
        opacity: 1;
    }

    100% {
        left: 100%;
        opacity: 1;
    }
}

.node-loading .holo-box {
    border-color: rgba(0, 255, 136, 0.7);
    box-shadow:
        0 0 10px rgba(0, 255, 136, 0.6),
        inset 0 0 15px rgba(0, 255, 136, 0.4);
}

.node-loading .holo-inner {
    background-color: rgba(0, 255, 136, 0.7);
    box-shadow: 0 0 15px rgba(0, 255, 136, 1);
    opacity: 1;
    transform: scale(1) rotate(45deg);
}

.node-loading .scan-effect {
    animation: scan-on 2s infinite;
    opacity: 1;
    background: linear-gradient(90deg,
            transparent,
            rgba(0, 255, 136, 0.8),
            transparent);
}

.holo-glow {
    position: absolute;
    width: 200%;
    height: 200%;
    left: -50%;
    top: -50%;
    background: radial-gradient(ellipse at center,
            rgba(0, 162, 255, 0.2) 0%,
            rgba(0, 162, 255, 0.1) 40%,
            rgba(0, 0, 0, 0) 70%);
    pointer-events: none;
    filter: blur(10px);
    opacity: 0.5;
    z-index: -1;
    animation: glow-pulse 4s infinite alternate;
    transition: all 0.5s ease;
}

@keyframes glow-pulse {
    0% {
        opacity: 0.3;
        filter: blur(10px) brightness(0.8);
    }

    100% {
        opacity: 0.6;
        filter: blur(15px) brightness(1.2);
    }
}

.node-loading .holo-glow {
    background: radial-gradient(ellipse at center,
            rgba(0, 255, 136, 0.2) 0%,
            rgba(0, 255, 136, 0.1) 40%,
            rgba(0, 0, 0, 0) 70%);
    animation: active-glow-pulse 2s infinite alternate;
}

@keyframes active-glow-pulse {
    0% {
        opacity: 0.4;
        filter: blur(10px) brightness(1);
    }

    100% {
        opacity: 0.8;
        filter: blur(20px) brightness(1.5);
    }
}

.corner-accent {
    position: absolute;
    width: 15px;
    height: 15px;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(0, 162, 255, 0.5);
    transition: all 0.3s ease;
}

.corner-accent:nth-child(1) {
    top: -5px;
    left: -5px;
    border-right: none;
    border-bottom: none;
    border-radius: 5px 0 0 0;
}

.corner-accent:nth-child(2) {
    top: -5px;
    right: -5px;
    border-left: none;
    border-bottom: none;
    border-radius: 0 5px 0 0;
}

.corner-accent:nth-child(3) {
    bottom: -5px;
    left: -5px;
    border-right: none;
    border-top: none;
    border-radius: 0 0 0 5px;
}

.corner-accent:nth-child(4) {
    bottom: -5px;
    right: -5px;
    border-left: none;
    border-top: none;
    border-radius: 0 0 5px 0;
}

.node-loading .corner-accent {
    width: 20px;
    height: 20px;
    border-color: rgba(0, 255, 136, 0.7);
}

.status-text {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 162, 255, 0.8);
    text-shadow: 0 0 5px rgba(0, 162, 255, 0.5);
    position: relative;
    transition: all 0.3s ease;
}

.node-loading .status-text {
    color: rgba(0, 255, 136, 0.8);
    text-shadow: 0 0 5px rgba(0, 255, 136, 0.5);
}

.activation-rings {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.activation-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    height: 40%;
    border: 1px solid rgba(0, 255, 136, 0);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    transition: all 0.3s ease;
}

.node-loading .activation-ring {
    animation: ring-expand 2s ease-out forwards;
    border-color: rgba(0, 255, 136, 0.7);
}

.node-loading .activation-ring:nth-child(1) {
    animation-delay: 0s;
}

.node-loading .activation-ring:nth-child(2) {
    animation-delay: 0.3s;
}

.node-loading .activation-ring:nth-child(3) {
    animation-delay: 0.6s;
}

@keyframes ring-expand {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
    }

    100% {
        transform: translate(-50%, -50%) scale(2.5);
        opacity: 0;
    }
}

.holo-particles {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.holo-particle {
    position: absolute;
    background-color: rgba(0, 162, 255, 0.7);
    border-radius: 50%;
    width: 3px;
    height: 3px;
    opacity: 0;
    filter: blur(1px);
    transition: all 0.3s ease;
}

.node-loading .holo-particle {
    background-color: rgba(0, 255, 136, 0.7);
    animation: particle-float 3s infinite ease-in-out;
}

.node-loading .holo-particle:nth-child(1) {
    top: 20%;
    left: 30%;
    animation-delay: 0.1s;
}

.node-loading .holo-particle:nth-child(2) {
    top: 70%;
    left: 20%;
    animation-delay: 0.7s;
}

.node-loading .holo-particle:nth-child(3) {
    top: 40%;
    left: 80%;
    animation-delay: 1.3s;
}

.node-loading .holo-particle:nth-child(4) {
    top: 60%;
    left: 60%;
    animation-delay: 1.9s;
}

.node-loading .holo-particle:nth-child(5) {
    top: 30%;
    left: 45%;
    animation-delay: 2.5s;
}

.node-loading .holo-particle:nth-child(6) {
    top: 60%;
    left: 40%;
    animation-delay: 3.1s;
}

@keyframes particle-float {
    0% {
        transform: translateY(0) scale(1);
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    80% {
        opacity: 1;
    }

    100% {
        transform: translateY(-20px) scale(0);
        opacity: 0;
    }
}

.cube-transform {
    position: absolute;
    width: 30%;
    height: 30%;
    transform-style: preserve-3d;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.cube-face {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 162, 255, 0.3);
    border: 1px solid rgba(0, 162, 255, 0.5);
    box-shadow: 0 0 5px rgba(0, 162, 255, 0.3);
    transition: all 0.3s ease;
}

.node-loading .cube-transform {
    opacity: 1;
    animation: cube-rotate 5s infinite linear;
}

.node-loading .cube-face {
    background-color: rgba(0, 255, 136, 0.3);
    border-color: rgba(0, 255, 136, 0.5);
    box-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
}

.node-loading .cube-face:nth-child(1) {
    transform: translateZ(15px);
}

.node-loading .cube-face:nth-child(2) {
    transform: rotateY(180deg) translateZ(15px);
}

.node-loading .cube-face:nth-child(3) {
    transform: rotateY(90deg) translateZ(15px);
}

.node-loading .cube-face:nth-child(4) {
    transform: rotateY(-90deg) translateZ(15px);
}

.node-loading .cube-face:nth-child(5) {
    transform: rotateX(90deg) translateZ(15px);
}

.node-loading .cube-face:nth-child(6) {
    transform: rotateX(-90deg) translateZ(15px);
}

@keyframes cube-rotate {
    0% {
        transform: rotateX(0) rotateY(0) rotateZ(0);
    }

    100% {
        transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
}

.holo-label {
    position: absolute;
    bottom: -60px;
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 162, 255, 0.8);
    letter-spacing: 1px;
    text-shadow: 0 0 5px rgba(0, 162, 255, 0.5);
    transition: all 0.3s ease;
}

.node-loading .holo-label {
    color: rgba(0, 255, 136, 0.8);
    text-shadow: 0 0 5px rgba(0, 255, 136, 0.5);
}

.data-chips {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    color: white;
}

.data-chip {
    position: absolute;
    padding: 5px 8px;
    background-color: rgba(0, 24, 55, 0.7);
    border: 1px solid rgba(0, 162, 255, 0.5);
    border-radius: 4px;
    font-size: 10px;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease;
}

.node-loading .data-chips .data-chip {
    animation: chip-appear 0.5s ease forwards;
    border-color: rgba(0, 255, 136, 0.5);
}

@keyframes chip-appear {
    0% {
        opacity: 0;
        transform: scale(0);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.data-chip:nth-child(1) {
    top: -60px;
    left: 50px;
    animation-delay: 0.5s;
}

.data-chip:nth-child(2) {
    top: 40px;
    left: -120px;
    animation-delay: 1.2s;
}

.data-chip:nth-child(3) {
    top: 120px;
    left: 60px;
    animation-delay: 1.8s;
}

.data-chip:nth-child(4) {
    top: 20px;
    left: 120px;
    animation-delay: 2.3s;
}
</style>