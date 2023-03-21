<script setup>
import FilterList from './components/FilterList.vue';
import JobList from './pages/JobList.vue';
</script>

<template>
  <header></header>
  <section class="c-FilterList-Wrapper">
    <FilterList />
  </section>
  <main>
    <JobList />
  </main>
</template>

<style lang="scss" scoped>
.c-FilterList-Wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -2rem;
  margin-bottom: 3rem;
  min-height: 5vh;
}
header {
  line-height: 1.5;
  height: 8rem;
  background: url('@/assets/images/bg-header-mobile.svg') no-repeat center bottom / cover var(--color-primary);
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

@media screen and (min-width: 1024px) {
  header {
    background: url('@/assets/images/bg-header-desktop.svg') no-repeat center bottom / cover var(--color-primary);
  }

}
</style>
