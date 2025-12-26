<template>
  <label
    class="toggle toggle-lg text-base-content [&_svg]:size-5 bg-gray-50 has-checked:bg-gray-700"
  >
    <input
      type="checkbox"
      class=""
      true-value="dark"
      false-value="light"
      v-model="theme"
      @click="handleToggleClick"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    ><g fill="none"><path
      d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
    /><path
      fill="currentColor"
      d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094l-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-8 3a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083l.707.707a1 1 0 0 1-1.32 1.497l-.094-.083l-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
    /></g></svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    ><path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"
    /></svg>
  </label>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 1. 定义获取主题的逻辑
// const theme = (() => {
//   if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
//     return localStorage.getItem('theme')
//   }
//   // 默认明亮主题，也可以根据系统偏好：window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
//   return 'light'
// })()
const getTheme = () => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as string
  }
  return 'light'
}
const theme = ref(getTheme())

if (theme.value === 'light') {
  document.documentElement.classList.remove('dark')
} else {
  document.documentElement.classList.add('dark')
}

const handleToggleClick = () => {
  const element = document.documentElement
  element.classList.toggle('dark')

  const isDark = element.classList.contains('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
}

onMounted(() => {
  // 2. 立即应用主题（防止闪烁）

  // 3. 将主题保存回 localStorage (兼容 Astro 页面切换)
  // window.localStorage.setItem('theme', theme.value)

  // 4. 绑定按钮事件

  // document.getElementById('themeToggle').addEventListener('click', handleToggleClick)
})
</script>
