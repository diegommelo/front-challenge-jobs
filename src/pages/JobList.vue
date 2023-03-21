<template>
    <section class="c-JobList">
        <CardJob isFeatured isNew />
        <CardJob />
    </section>
</template>

<script setup>
import CardJob from '../components/CardJob.vue';
</script>

<style lang="scss" scoped>
.c-JobList {
    width: 85vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}
@media screen and (min-width: 768px) {
    .c-JobList {
        max-width: 70vw;
    }
}
@media screen and (min-width: 1024px) {
    .c-JobList {
        max-width: 45vw;
    }
}

</style>