<template>
  <div
    id="app"
    class="app-bg flex flex-col">
    <div class="max-w-xs app-card">
      <h1>Vue To Do</h1>
    </div>
    <div class="flex-auto">
      <div class="max-w-lg app-card">
        <div class="flex items-stretch">
          <div
            id="routerlinks"
            class="p-2 border-r-2 border-vue-green">
            <h2>Todo Lists</h2>
            <ul>
              <li>list one</li>
              <li>list two</li>
              <li>list three</li>
            </ul>
            <button>Add List</button>
          </div>
          <div
            id="routerView"
            class="p-2 text-center flex-auto">
            <h2>list title</h2>
            <ul>
              <li>item one <span>Done</span> <span>Delete</span></li>
              <li>item two <span>Done</span> <span>Delete</span></li>
              <li>item three <span>Done</span> <span>Delete</span></li>
            </ul>
            <button>add item</button>
          </div>
        </div>
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
