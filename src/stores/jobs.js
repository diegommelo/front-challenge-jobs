import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import data from '@/data.json' assert {type: 'json'}

export const useJobsStore = defineStore('counter', () => {
  const jobs = ref(data)

  return { jobs }
})
