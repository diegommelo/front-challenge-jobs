<template>
    <section class="c-FilterList-List" v-if="filters.length > 0">
        <ul>
            <li v-for="filter in filters" :key="filter">
                <span class="c-FilterList-Text">{{ filter }}</span>
                <button class="c-FilterList-Remove" @click="jobsStore.removeFilter(filter)">X</button>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useJobsStore } from '../stores/jobs';

const jobsStore = useJobsStore();
const filters = computed(() => {
    return jobsStore.filters;
});
</script>

<style lang="scss" scoped>
.c-FilterList-List {
    width: 85vw;
    display: flex;
    border-radius: 0.2rem;
    background-color: var(--color-white);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);    
}
.c-FilterList-List ul {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 1rem;
    margin: 0;
    gap: 0.5rem;

    > li .c-FilterList-Text {
        padding: 0.5rem;
        color: var(--color-primary);
        background-color: var(--button-background-color);
        border-radius: 0.2rem;
        font-weight: 700;
    }
}
.c-FilterList-Remove {
        font-weight: 700;
        background-color: var(--color-primary);
        color: var(--color-white);
        cursor: pointer;
        padding: 0.5rem;
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        border: none;
        &:hover {
            background-color: var(--color-dark);
        }
    }
</style>