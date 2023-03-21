import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import data from '@/data.json' assert {type: 'json'}

export const useJobsStore = defineStore('jobs', () => {
  const jobs = ref(data)
  const filters = ref([])

  const addFilter = (filter) => {
    if (!filters.value.includes(filter)) {
      filters.value.push(filter)
    }
  }

  const removeFilter = (filter) => {
    filters.value = filters.value.filter((f) => f !== filter)
  }

  const filteredJobs = computed(() => {
    if (filters.value.length === 0) {
      return jobs.value
    }
    return jobs.value.filter((job) => {
      let tags = []
      tags.push(job.role)
      tags.push(job.level)
      if(job.languages) {
        tags = tags.concat(job.languages)
      }
      if (job.tools) {
        tags = tags.concat(job.tools)
      }
      return filters.value.every((filter) => tags.includes(filter))
    })
  })
  return { jobs, filters, addFilter, removeFilter, filteredJobs }
})
