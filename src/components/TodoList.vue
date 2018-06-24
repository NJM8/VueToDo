<template>
  <div :key="todolistdata.listId">
    <h2>{{ todolistdata.listName }}</h2>
    <todo
      v-for="(todo, index) in todolistdata.todos"
      :key="index"
      :todo="todo"
      @delete-todo="deleteTodo({ listName: todolistdata.listName, todoName: todo.name })"/>
    <new-item
      v-if="showNewItem"
      :type="'todoItem'"
      :listname="todolistdata.listName"
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
