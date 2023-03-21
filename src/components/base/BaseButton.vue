<template>
    <button>
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
button {
    background-color: var(--button-background-color);
    color: var(--color-primary);
    border: none;
    border-radius: 0.2rem;
    padding: 0.5rem;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: var(--button-hover-color);
    }
}
</style>