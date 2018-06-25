<template>
  <div
    id="app"
    class="flex flex-col h-100 min-h-screen">
    <div class="max-w-xs app-card">
      <h1>Vue To Do</h1>
    </div>
    <div class="flex-auto">
      <div class="max-w-lg app-card">
        <div class="flex items-stretch">
          <div class="p-2 border-r-2 border-vue-green flex-no-shrink w-48">
            <h2>Todo Lists</h2>
            <transition-group
              name="list-transitions"
              tag="div"
              class="flex flex-col my-2">
              <router-link
                :key="'home'"
                to="/home"
                class="router-link btn-card btn-blue-active-styling">Home</router-link>
              <router-link
                v-for="todoList in getTodoLists"
                :key="todoList.listName"
                :to="`/todoLists/${todoList.listId}`"
                class="router-link btn-card btn-blue-active-styling">{{ todoList.listName }}</router-link>
            </transition-group>
            <new-item
              v-if="showNewItem"
              :type="'listItem'"
              @item-added="showNewItem = false"/>
            <button
              class="btn-card btn-green-active-styling"
              @click="showNewItem = !showNewItem">Add List</button>
          </div>
          <div
            class="p-2 text-center flex-auto">
            <transition
              name="slide"
              mode="out-in">
              <router-view
                :todolistdata="getListData"
                :key="$route.fullPath"/>
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
import NewItem from './components/NewItem'
import { mapGetters, mapActions } from 'vuex'
import router from './router/index'

export default {
  name: 'App',
  components: {
    TodoList,
    NewItem
  },
  data () {
    return {
      currentListId: null,
      showNewItem: false
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
    this.checkForSavedTodoLists()
  },
  methods: {
    ...mapActions([
      'checkForSavedTodoLists'
    ])
  }
}
</script>

<style>

</style>
