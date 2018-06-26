<template>
  <div :key="todolistdata.listId">
    <h2 class="mb-2">{{ todolistdata.listName }}</h2>
    <transition-group
      name="list-transitions"
      tag="div"
      class="flex flex-col">
      <todo
        v-for="todo in sortedTodos"
        :key="todo.name"
        :todo="todo"
        @delete-todo="deleteTodo({ listName: todolistdata.listName, todoName: todo.name })"
        @change-todo-status="changeTodoStatus({ listName: todolistdata.listName, todoName: todo.name })"/>
    </transition-group>
    <input
      v-model="newTodo"
      type="text"
      class="input w-1/2 mx-auto"
      placeholder="Press enter to submit"
      @keyup.enter="localAddNewItem({ 'type': 'todoItem', value: newTodo, listName: todolistdata.listName })">
    <div>
      <button
        class="btn-card btn-green-active-styling"
        @click="localAddNewItem({ 'type': 'todoItem', value: newTodo, listName: todolistdata.listName })">Add To Do</button>
      <button
        class="btn-card btn-red-active-styling"
        @click="deleteList(todolistdata.listName)">Delete List</button>
    </div>
  </div>
</template>

<script>
import Todo from './Todo'
import { mapActions } from 'vuex'

export default {
  components: {
    Todo
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
      newTodo: ''
    }
  },
  computed: {
    sortedTodos () {
      return this.todolistdata.todos.slice().sort((a, b) => a.done > b.done)
    }
  },
  methods: {
    ...mapActions([
      'deleteList',
      'deleteTodo',
      'changeTodoStatus',
      'addNewItem'
    ]),
    localAddNewItem (payload) {
      this.addNewItem(payload)
      this.newTodo = ''
    }
  }
}
</script>

<style>

</style>
