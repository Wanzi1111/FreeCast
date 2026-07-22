<script setup lang="ts">
import { usePodcastStore } from '@/stores/podcast'
import EpisodeCard from '@/components/EpisodeCard.vue'

const podcastStore = usePodcastStore()
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__content">
          <span class="hero__badge">🎙️ 欢迎来到前端手记</span>
          <h1 class="hero__title">前端手记</h1>
          <p class="hero__subtitle">
            嗨，我是肖洁，一个深耕 Vue 生态的前端工程师。<br />
            这里记录我在教师研修网、美术宝、你好现在等公司的项目实战与成长心得。
          </p>
          <div class="hero__actions">
            <RouterLink to="/episodes" class="btn btn--primary">浏览全部节目</RouterLink>
            <RouterLink to="/about" class="btn btn--outline">了解更多关于我</RouterLink>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero__art">
            <div class="hero__art-bg"></div>
            <svg class="hero__code-icon" viewBox="0 0 120 120" fill="none">
              <path d="M45 35L20 60L45 85" stroke="#10b981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M75 35L100 60L75 85" stroke="#10b981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="68" y1="25" x2="52" y2="95" stroke="#34d399" stroke-width="3.5" stroke-linecap="round"/>
            </svg>
            <div class="hero__leaf hero__leaf--1">
              <svg viewBox="0 0 40 60" fill="none"><path d="M20 58C20 58 2 40 2 24C2 10 12 2 20 2C28 2 38 10 38 24C38 40 20 58 20 58Z" fill="#10b981" opacity="0.2"/><path d="M20 56V6" stroke="#10b981" stroke-width="1" opacity="0.3"/></svg>
            </div>
            <div class="hero__leaf hero__leaf--2">
              <svg viewBox="0 0 40 60" fill="none"><path d="M20 58C20 58 2 40 2 24C2 10 12 2 20 2C28 2 38 10 38 24C38 40 20 58 20 58Z" fill="#10b981" opacity="0.15"/><path d="M20 56V6" stroke="#10b981" stroke-width="1" opacity="0.25"/></svg>
            </div>
            <div class="hero__leaf hero__leaf--3">
              <svg viewBox="0 0 30 50" fill="none"><path d="M15 48C15 48 1 33 1 20C1 8 9 1 15 1C21 1 29 8 29 20C29 33 15 48 15 48Z" fill="#34d399" opacity="0.25"/><path d="M15 46V4" stroke="#34d399" stroke-width="1" opacity="0.3"/></svg>
            </div>
            <div class="hero__leaf hero__leaf--4">
              <svg viewBox="0 0 30 50" fill="none"><path d="M15 48C15 48 1 33 1 20C1 8 9 1 15 1C21 1 29 8 29 20C29 33 15 48 15 48Z" fill="#10b981" opacity="0.18"/><path d="M15 46V4" stroke="#10b981" stroke-width="1" opacity="0.25"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="container"><div class="divider"></div></div>

    <!-- Latest Episodes -->
    <section class="section">
      <div class="container">
        <div class="section__header">
          <div>
            <span class="section__label">最新节目</span>
            <h2 class="section__title">最近更新</h2>
          </div>
          <RouterLink to="/episodes" class="section__more">查看全部节目 <span class="section__more-arrow">→</span></RouterLink>
        </div>
        <div class="episodes-grid">
          <EpisodeCard
            v-for="episode in podcastStore.latestEpisodes"
            :key="episode.id"
            :episode="episode"
          />
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="container"><div class="divider"></div></div>

    <!-- Stats -->
    <section class="section stats-section">
      <div class="container">
        <div class="stats">
          <div class="stat">
            <span class="stat__number">12+</span>
            <span class="stat__label">个项目</span>
          </div>
          <div class="stat">
            <span class="stat__number">3</span>
            <span class="stat__label">家公司</span>
          </div>
          <div class="stat">
            <span class="stat__number">7</span>
            <span class="stat__label">年经验</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ===== Hero ===== */
.hero {
  padding: 60px 0 50px;
}

.hero__inner {
  display: flex;
  align-items: center;
  gap: 60px;
}

.hero__content {
  flex: 1;
  min-width: 0;
}

.hero__badge {
  display: inline-block;
  background: var(--color-primary-bg);
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 20px;
}

.hero__title {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subtitle {
  font-size: 16px;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 28px;
  max-width: 480px;
}

.hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 28px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  text-decoration: none;
}

.btn--primary {
  background: var(--color-primary);
  color: #fff;
}

.btn--primary:hover {
  background: var(--color-primary-light);
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
}

.btn--outline {
  background: transparent;
  color: var(--color-text);
  border: 1.5px solid var(--color-border);
}

.btn--outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* Hero Visual */
.hero__visual {
  flex-shrink: 0;
  width: 380px;
  height: 340px;
  position: relative;
}

.hero__art {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__art-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.06) 0%, rgba(52, 211, 153, 0.12) 100%);
  border-radius: 24px;
}

.hero__code-icon {
  width: 140px;
  height: 140px;
  position: relative;
  z-index: 2;
}

.hero__leaf {
  position: absolute;
  z-index: 1;
}

.hero__leaf--1 {
  right: 10px;
  top: 20px;
  width: 50px;
  transform: rotate(-30deg);
}

.hero__leaf--2 {
  right: -5px;
  top: 80px;
  width: 60px;
  transform: rotate(-15deg);
}

.hero__leaf--3 {
  right: 30px;
  bottom: 30px;
  width: 40px;
  transform: rotate(20deg);
}

.hero__leaf--4 {
  right: -10px;
  bottom: 80px;
  width: 45px;
  transform: rotate(40deg);
}

/* ===== Divider ===== */
.divider {
  height: 1px;
  background: var(--color-border-light);
}

/* ===== Section ===== */
.section {
  padding: 48px 0;
}

.section__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 28px;
}

.section__label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.section__title {
  font-size: 26px;
  font-weight: 800;
}

.section__more {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}

.section__more:hover {
  color: var(--color-primary-light);
}

.section__more-arrow {
  transition: transform 0.2s;
}

.section__more:hover .section__more-arrow {
  transform: translateX(3px);
}

/* ===== Episodes Grid ===== */
.episodes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* ===== Stats ===== */
.stats-section {
  padding: 50px 0 60px;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 80px;
}

.stat {
  text-align: center;
}

.stat__number {
  display: block;
  font-size: 36px;
  font-weight: 800;
  color: var(--color-primary);
}

.stat__label {
  font-size: 14px;
  color: var(--color-text-secondary);
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .hero__visual {
    width: 280px;
    height: 260px;
  }

  .episodes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 40px 0 30px;
  }

  .hero__inner {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }

  .hero__title {
    font-size: 36px;
  }

  .hero__subtitle {
    max-width: none;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__visual {
    width: 240px;
    height: 220px;
  }

  .episodes-grid {
    grid-template-columns: 1fr;
  }

  .stats {
    gap: 40px;
  }

  .section__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
