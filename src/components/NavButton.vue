<template>
    <button class="text-btn">
        <span class="holo-underline">{{ text }}</span>
    </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.text-btn {
    cursor: pointer;
    font-weight: 300;
}

.holo-underline {
    position: relative;
    padding-bottom: 2px;
}

.holo-underline:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,
            rgba(0, 180, 255, 0.7) 0%,
            rgba(0, 180, 255, 0.3) 100%);
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.text-btn:hover .holo-underline:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
</style>