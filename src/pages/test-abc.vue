<template>
  <div class="p-4 bg-yellow-400">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('Hello, Vue 3!')
</script>
