<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button class="theme-toggle" @click="toggleTheme" :title="theme === 'light' ? '切换暗黑模式' : '切换亮色模式'">
    <svg v-if="theme === 'light'" class="theme-toggle__svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
    <svg v-else class="theme-toggle__svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="10" cy="10" r="3.5" />
      <path d="M10 2v1.5M10 16.5V18M18 10h-1.5M3.5 10H2M15.66 4.34l-1.06 1.06M5.4 14.6l-1.06 1.06M15.66 15.66l-1.06-1.06M5.4 5.4L4.34 4.34" stroke-linecap="round" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  width: 40px;
  height: 40px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-light);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s;
  flex-shrink: 0;
}

.theme-toggle:hover {
  background: var(--color-bg-hover);
  border-color: var(--color-border);
}

.theme-toggle__svg {
  width: 18px;
  height: 18px;
  color: var(--color-text-secondary);
}
</style>
