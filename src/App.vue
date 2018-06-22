<template>
  <div
    id="app"
    class="app-bg flex flex-col">
    <div class="max-w-xs app-card">
      <h1>Vue To Do</h1>
    </div>
    <div class="flex-auto">
      <div class="max-w-lg app-card">
        <p>Router</p>
      </div>
    </div>
    <div class="max-w-sm app-card">
      <a
        href="http://www.natethedev.com"
        target="_blank"
        rel="noopener"
        class="no-underline text-black hover:font-bold">Created by Nate Mallison</a>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/main.css'

export default {
  name: 'App'
}
</script>

<style>

</style>
