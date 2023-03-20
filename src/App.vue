<script setup>
import JobList from './pages/JobList.vue';
</script>

<template>
  <header></header>
  <main>
    <JobList />
  </main>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  height: 8rem;
  margin-bottom: 4rem;
  background: url('@/assets/images/bg-header-mobile.svg') no-repeat center bottom / cover var(--color-primary);
}
</style>
