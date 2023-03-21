<template>
    <section class="c-JobList">
        <CardJob v-for="job in jobsStore.filteredJobs" :job="job" />
    </section>
</template>

<script setup>
import CardJob from '../components/JobCard.vue';
import { useJobsStore } from '../stores/jobs';

const jobsStore = useJobsStore();

</script>

<style lang="scss" scoped>
.c-JobList {
    width: 85vw;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}


</style>