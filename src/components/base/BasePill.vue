<template>
    <div class="c-Pill" :class="type">
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'light',
        validator: (value) => {
            return ['light', 'dark'].includes(value)
        }
    },
})
</script>

<style lang="scss" scoped>
.c-Pill {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 0.3rem 0.7rem 0.2rem 0.7rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    > span {
        display: inline-block;
        vertical-align: bottom;
    }
    &.light {
        background-color: var(--color-primary);
        color: var(--color-white);
    }

    &.dark {
        background-color: var(--color-dark);
        color: var(--color-white);
    }
}
</style>