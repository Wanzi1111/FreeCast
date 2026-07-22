<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const menuOpen = ref(false)
const searchQuery = ref('')
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <RouterLink to="/" class="header__logo">
        <span class="header__logo-icon">🎙️</span>
        <span class="header__logo-text">前端手记</span>
      </RouterLink>

      <button class="header__menu-btn" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="header__nav" :class="{ open: menuOpen }" @click="menuOpen = false">
        <RouterLink to="/" class="header__link" active-class="active" :exact="true">首页</RouterLink>
        <RouterLink to="/episodes" class="header__link" active-class="active">节目</RouterLink>
        <RouterLink to="/about" class="header__link" active-class="active">关于我</RouterLink>
      </nav>

      <div class="header__right">
        <div class="header__search">
          <svg class="header__search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="9" cy="9" r="6" />
            <path d="M13.5 13.5L17 17" stroke-linecap="round" />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索节目或关键词..."
            class="header__search-input"
          />
        </div>
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--color-border-light);
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.9);
}

[data-theme='dark'] .header {
  background: rgba(15, 23, 42, 0.9);
}

.header__inner {
  display: flex;
  align-items: center;
  height: 64px;
  gap: 32px;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text);
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
}

.header__logo:hover {
  color: var(--color-text);
}

.header__logo-icon {
  font-size: 22px;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.header__link {
  position: relative;
  padding: 6px 16px;
  color: var(--color-text-secondary);
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s;
  white-space: nowrap;
}

.header__link:hover {
  color: var(--color-text);
}

.header__link.active {
  color: var(--color-primary);
  font-weight: 600;
}

.header__link.active::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  border-radius: 2px;
  background: var(--color-primary);
}

.header__right {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
}

.header__search {
  display: flex;
  align-items: center;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-light);
  border-radius: 22px;
  padding: 0 14px;
  transition: border-color 0.2s;
}

.header__search:focus-within {
  border-color: var(--color-primary);
}

.header__search-icon {
  width: 16px;
  height: 16px;
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}

.header__search-input {
  border: none;
  background: none;
  padding: 8px 10px;
  font-size: 14px;
  color: var(--color-text);
  outline: none;
  width: 160px;
}

.header__search-input::placeholder {
  color: var(--color-text-tertiary);
}

.header__menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.header__menu-btn span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all 0.3s;
}

.header__menu-btn.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.header__menu-btn.open span:nth-child(2) {
  opacity: 0;
}

.header__menu-btn.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 900px) {
  .header__search {
    display: none;
  }
}

@media (max-width: 640px) {
  .header__menu-btn {
    display: flex;
  }

  .header__nav {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border-light);
    flex-direction: column;
    padding: 16px 20px;
    gap: 4px;
  }

  .header__nav.open {
    display: flex;
  }

  .header__link {
    width: 100%;
    padding: 10px 16px;
  }

  .header__link.active::after {
    display: none;
  }

  .header__right {
    gap: 8px;
  }
}
</style>
