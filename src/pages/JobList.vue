<template>
    <section class="c-JobList">

        <CardJob v-for="job in jobsStore.filteredJobs" :job="job" />
    </section>
</template>

<script setup>
import CardJob from '../components/CardJob.vue';
import { useJobsStore } from '../stores/jobs';

const jobsStore = useJobsStore();

</script>

<style lang="scss" scoped>
.c-JobList {
    width: 85vw;
    margin: 0 auto 2rem auto;
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
        max-width: 48vw;
    }
}

</style>