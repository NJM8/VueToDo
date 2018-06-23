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
            class="p-2 border-r-2 border-vue-green flex-no-shrink">
            <h2>Todo Lists</h2>
            <div class="flex flex-col my-2">
              <router-link
                to="/home"
                class="routerLink">Home</router-link>
              <router-link
                v-for="todoList in getTodoLists"
                :key="todoList.listId"
                :to="`/todoLists/${todoList.listId}`"
                class="routerLink">{{ todoList.listName }}</router-link>
            </div>
            <button>Add List</button>
          </div>
          <div
            class="p-2 text-center flex-auto">
            <transition
              name="slide"
              mode="out-in">
              <router-view :todolistdata="getListData"/>
            </transition>
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
import TodoList from './components/TodoList'
import { mapGetters } from 'vuex'
import router from './router/index'

export default {
  name: 'App',
  components: {
    TodoList
  },
  data () {
    return {
      currentListId: null
    }
  },
  computed: {
    ...mapGetters([
      'getTodoLists'
    ]),
    getListData () {
      for (let i = 0; i < this.getTodoLists.length; i++) {
        if (this.getTodoLists[i].listId === this.currentListId) {
          return this.getTodoLists[i]
        }
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.currentListId = Number(to.params.id)
    }
  },
  created () {
    router.replace('/home')
  }
}
</script>

<style>

</style>
