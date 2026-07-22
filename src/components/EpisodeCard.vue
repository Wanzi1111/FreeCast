<script setup lang="ts">
import type { Episode } from '@/types'

defineProps<{ episode: Episode }>()
</script>

<template>
  <article class="card" @click="$router.push(`/episodes/${episode.id}`)">
    <div class="card__cover">
      <img v-if="episode.coverUrl" :src="episode.coverUrl" :alt="episode.title" loading="lazy" />
      <div v-else class="card__cover-placeholder" :style="{ backgroundColor: episode.coverColor }">
        <span>{{ episode.coverLabel }}</span>
      </div>
    </div>
    <div class="card__body">
      <span class="card__category">{{ episode.category }}</span>
      <h3 class="card__title">{{ episode.title }}</h3>
      <p class="card__desc">{{ episode.description }}</p>
      <div class="card__meta">
        <span>{{ episode.date }}</span>
        <span>{{ episode.duration }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card__cover {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.card__cover img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: var(--color-bg-secondary);
  padding: 16px;
  transition: transform 0.3s;
}

.card__cover-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%);
}

.card__cover-placeholder span {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 8px 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(2px);
}

.card:hover .card__cover img,
.card:hover .card__cover-placeholder {
  transform: scale(1.05);
}

.card__body {
  padding: 16px 18px;
}

.card__category {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 3px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.card__title {
  font-size: 15px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 6px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card__desc {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 14px;
}

.card__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--color-text-tertiary);
  padding-top: 12px;
  border-top: 1px solid var(--color-border-light);
}

</style>
