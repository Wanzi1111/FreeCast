<script setup lang="ts">
import { usePodcastStore } from '@/stores/podcast'
import { CATEGORIES } from '@/types'

const podcastStore = usePodcastStore()
</script>

<template>
  <div class="category-filter">
    <button
      v-for="cat in CATEGORIES"
      :key="cat"
      class="category-filter__btn"
      :class="{ active: podcastStore.selectedCategory === cat }"
      @click="podcastStore.setCategory(cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>

<style scoped>
.category-filter {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.category-filter__btn {
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-secondary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.category-filter__btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.category-filter__btn.active {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}
</style>
