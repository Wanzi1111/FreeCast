<script setup lang="ts">
import { ref, watch } from 'vue'
import { usePodcastStore } from '@/stores/podcast'

const podcastStore = usePodcastStore()
const input = ref(podcastStore.searchQuery)

let timer: ReturnType<typeof setTimeout>

watch(input, (val) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    podcastStore.setSearch(val)
  }, 300)
})
</script>

<template>
  <div class="search-bar">
    <span class="search-bar__icon">🔍</span>
    <input
      v-model="input"
      class="search-bar__input"
      type="text"
      placeholder="搜索节目标题或描述..."
    />
    <button v-if="input" class="search-bar__clear" @click="input = ''">✕</button>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-sm);
  padding: 0 14px;
  flex: 1;
  max-width: 400px;
  transition: border-color 0.2s;
}

.search-bar:focus-within {
  border-color: var(--color-primary);
}

.search-bar__icon {
  font-size: 14px;
  margin-right: 8px;
  opacity: 0.6;
}

.search-bar__input {
  flex: 1;
  border: none;
  background: none;
  padding: 10px 0;
  font-size: 14px;
  color: var(--color-text);
  outline: none;
}

.search-bar__input::placeholder {
  color: var(--color-text-tertiary);
}

.search-bar__clear {
  background: none;
  border: none;
  color: var(--color-text-tertiary);
  cursor: pointer;
  font-size: 14px;
  padding: 4px;
  line-height: 1;
}

.search-bar__clear:hover {
  color: var(--color-text);
}
</style>
