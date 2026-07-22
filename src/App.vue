<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import { useTheme } from './composables/useTheme'

useTheme()
</script>

<template>
  <AppHeader />
  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
.main-content {
  flex: 1;
  padding-bottom: 20px;
}
</style>
