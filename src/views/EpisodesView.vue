<script setup lang="ts">
import { usePodcastStore } from '@/stores/podcast'
import EpisodeCard from '@/components/EpisodeCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'

const podcastStore = usePodcastStore()
</script>

<template>
  <div class="episodes-page">
    <div class="container">
      <header class="page-header">
        <h1 class="page-header__title">全部节目</h1>
        <p class="page-header__desc">探索我们的所有播客内容</p>
      </header>

      <div class="filters">
        <SearchBar />
        <CategoryFilter />
      </div>

      <div v-if="podcastStore.filteredEpisodes.length" class="episodes-grid">
        <EpisodeCard
          v-for="episode in podcastStore.filteredEpisodes"
          :key="episode.id"
          :episode="episode"
        />
      </div>

      <div v-else class="empty-state">
        <span class="empty-state__icon">🔍</span>
        <p class="empty-state__text">没有找到匹配的节目</p>
        <button class="empty-state__btn" @click="podcastStore.setSearch(''); podcastStore.setCategory('全部')">
          清除筛选
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.episodes-page {
  padding: 40px 0;
}

.page-header {
  margin-bottom: 32px;
}

.page-header__title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 8px;
}

.page-header__desc {
  color: var(--color-text-secondary);
  font-size: 16px;
}

.filters {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  align-items: center;
}

.episodes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-state__icon {
  font-size: 48px;
  display: block;
  margin-bottom: 16px;
}

.empty-state__text {
  font-size: 16px;
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}

.empty-state__btn {
  background: var(--color-primary);
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.empty-state__btn:hover {
  background: var(--color-primary-light);
}

@media (max-width: 900px) {
  .episodes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .episodes-grid {
    grid-template-columns: 1fr;
  }

  .filters {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
