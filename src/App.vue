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
          <div class="w-1/3 border-r-2 border-vue-green flex-no-shrink w-48 p-2 pr-8">
            <h2>Todo Lists</h2>
            <transition-group
              name="list-transitions"
              tag="div"
              class="flex flex-col my-2">
              <router-link
                :key="'welcome'"
                to="/welcome"
                class="router-link btn-card btn-blue-active-styling">Welcome</router-link>
              <router-link
                v-for="todoList in getTodoLists"
                :key="todoList.listName"
                :to="`/todoLists/${todoList.listId}`"
                class="router-link btn-card btn-blue-active-styling">{{ todoList.listName }}</router-link>
            </transition-group>
            <input
              v-model="newList"
              type="text"
              class="input w-full"
              placeholder="Press enter to submit"
              @keyup.enter="localAddNewItem({ 'type': 'listItem', value: newList })">
            <button
              class="btn-card btn-green-active-styling"
              @click="localAddNewItem({ 'type': 'listItem', value: newList })">Add List</button>
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
import { mapGetters, mapActions } from 'vuex'
import router from './router/index'

export default {
  name: 'App',
  components: {
    TodoList
  },
  data () {
    return {
      currentListId: null,
      newList: ''
    }
  },
  computed: {
    ...mapGetters([
      'getTodoLists'
    ]),
    // returns the list data for the list we have navigated to using currentListId
    getListData () {
      for (let i = 0; i < this.getTodoLists.length; i++) {
        if (this.getTodoLists[i].listId === this.currentListId) {
          return this.getTodoLists[i]
        }
      }
    }
  },
  watch: {
    // sets currentListId from router params, allows us to find the list data from the store and load it
    '$route' (to, from) {
      this.currentListId = Number(to.params.id)
    }
  },
  created () {
    router.replace('/welcome')
    this.checkForSavedTodoLists()
  },
  methods: {
    ...mapActions([
      'checkForSavedTodoLists',
      'addNewItem'
    ]),
    localAddNewItem (payload) {
      this.addNewItem(payload)
      this.newList = ''
    }
  }
}
</script>

<style>

</style>
