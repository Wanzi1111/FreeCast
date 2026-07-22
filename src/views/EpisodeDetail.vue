<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePodcastStore } from '@/stores/podcast'

const route = useRoute()
const router = useRouter()
const podcastStore = usePodcastStore()

const episode = computed(() => {
  const id = Number(route.params.id)
  return podcastStore.getEpisodeById(id)
})
</script>

<template>
  <div class="detail-page">
    <div class="container" v-if="episode">
      <button class="back-btn" @click="router.back()">← 返回</button>

      <div class="detail">
        <div class="detail__cover">
          <img v-if="episode.coverUrl" :src="episode.coverUrl" :alt="episode.title" />
          <div v-else class="detail__cover-placeholder" :style="{ backgroundColor: episode.coverColor }">
            <span>{{ episode.coverLabel }}</span>
          </div>
        </div>

        <div class="detail__info">
          <span class="detail__category">{{ episode.category }}</span>
          <h1 class="detail__title">{{ episode.title }}</h1>
          <div class="detail__meta">
            <span>{{ episode.date }}</span>
            <span>{{ episode.duration }}</span>
          </div>
          <p class="detail__desc">{{ episode.description }}</p>
        </div>
      </div>

      <div class="show-notes" v-if="episode.showNotes">
        <h2 class="show-notes__title">节目笔记</h2>
        <div class="show-notes__content" v-html="renderMarkdown(episode.showNotes, episode.projectUrl)"></div>
      </div>
    </div>

    <div class="container" v-else>
      <div class="not-found">
        <p>未找到该节目</p>
        <RouterLink to="/episodes">返回节目列表</RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
function renderMarkdown(text: string, projectUrl?: string): string {
  let html = text
    .replace(/^## (.+)$/gm, '<h3>$1</h3>')
    .replace(/^- \*\*(.+?)\*\*：(.+)$/gm, '<li><strong>$1</strong>：$2</li>')
    .replace(/^- \*\*(.+?)\*\*(.+)$/gm, '<li><strong>$1</strong>$2</li>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '<br/>')

  if (projectUrl) {
    const linkHtml = `<a class="project-link" href="${projectUrl}" target="_blank" rel="noopener noreferrer">🔗 项目线上地址：${projectUrl}</a>`
    // Insert after the first <h3> section's content (after 项目背景 paragraph)
    const firstH3End = html.indexOf('<h3>', html.indexOf('<h3>') + 1)
    if (firstH3End !== -1) {
      html = html.slice(0, firstH3End) + linkHtml + html.slice(firstH3End)
    } else {
      html += linkHtml
    }
  }

  return html
}
</script>

<style scoped>
.detail-page {
  padding: 40px 0;
}

.back-btn {
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 24px;
  padding: 4px 0;
}

.back-btn:hover {
  color: var(--color-primary-light);
}

.detail {
  display: flex;
  gap: 40px;
  margin-bottom: 48px;
}

.detail__cover {
  flex-shrink: 0;
  width: 280px;
  height: 280px;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.detail__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail__cover-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  background-image:
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%);
}

.detail__cover-placeholder span {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 12px 28px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(2px);
}

.detail__info {
  flex: 1;
}

.detail__category {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
}

.detail__title {
  font-size: 28px;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 16px;
}

.detail__meta {
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 16px;
}

.detail__desc {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.show-notes {
  border-top: 1px solid var(--color-border-light);
  padding-top: 32px;
}

.show-notes__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}

.show-notes__content :deep(h3) {
  font-size: 16px;
  font-weight: 700;
  margin: 20px 0 12px;
  color: var(--color-text);
}

.show-notes__content :deep(ul) {
  padding-left: 20px;
  margin-bottom: 16px;
}

.show-notes__content :deep(li) {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 4px;
}

.show-notes__content :deep(strong) {
  color: var(--color-text);
}

.show-notes__content :deep(.project-link) {
  display: inline-block;
  margin-bottom: 16px;
  font-size: 14px;
  color: var(--color-primary);
  text-decoration: none;
  word-break: break-all;
}

.show-notes__content :deep(.project-link:hover) {
  text-decoration: underline;
}

.not-found {
  text-align: center;
  padding: 80px 20px;
  color: var(--color-text-secondary);
}

@media (max-width: 640px) {
  .detail {
    flex-direction: column;
    gap: 24px;
  }

  .detail__cover {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    max-width: 300px;
    margin: 0 auto;
  }

  .detail__title {
    font-size: 22px;
  }
}
</style>
