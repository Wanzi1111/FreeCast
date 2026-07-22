import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { episodes as allEpisodes } from '@/data/episodes'
import type { Category } from '@/types'

export const usePodcastStore = defineStore('podcast', () => {
  const searchQuery = ref('')
  const selectedCategory = ref<Category>('全部')

  const filteredEpisodes = computed(() => {
    let result = allEpisodes

    if (selectedCategory.value !== '全部') {
      result = result.filter((ep) => ep.category === selectedCategory.value)
    }

    if (searchQuery.value.trim()) {
      const q = searchQuery.value.trim().toLowerCase()
      result = result.filter(
        (ep) =>
          ep.title.toLowerCase().includes(q) ||
          ep.description.toLowerCase().includes(q),
      )
    }

    return [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  })

  const latestEpisodes = computed(() =>
    [...allEpisodes].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3),
  )

  function getEpisodeById(id: number) {
    return allEpisodes.find((ep) => ep.id === id)
  }

  function setSearch(query: string) {
    searchQuery.value = query
  }

  function setCategory(category: Category) {
    selectedCategory.value = category
  }

  return {
    searchQuery,
    selectedCategory,
    filteredEpisodes,
    latestEpisodes,
    getEpisodeById,
    setSearch,
    setCategory,
  }
})
