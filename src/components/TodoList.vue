<template>
  <div :key="todolistdata.listId">
    <h2 class="mb-2">{{ todolistdata.listName }}</h2>
    <todo
      v-for="(todo, index) in todolistdata.todos"
      :key="index"
      :todo="todo"
      class="my-1"
      @delete-todo="deleteTodo({ listName: todolistdata.listName, todoName: todo.name })"/>
    <new-item
      v-if="showNewItem"
      :type="'todoItem'"
      :listname="todolistdata.listName"
      class="my-2"
      @item-added="showNewItem = false"/>
    <button @click="showNewItem = !showNewItem">Add To Do</button>
    <button @click="deleteList(todolistdata.listName)">Delete List</button>
  </div>
</template>

<script>
import Todo from './Todo'
import NewItem from './NewItem'
import { mapActions } from 'vuex'

export default {
  components: {
    Todo,
    NewItem
  },
  props: {
    todolistdata: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      showNewItem: false
    }
  },
  methods: {
    ...mapActions([
      'deleteList',
      'deleteTodo'
    ])
  }
}
</script>

<style>

</style>
