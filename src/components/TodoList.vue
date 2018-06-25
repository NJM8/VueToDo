<template>
  <div :key="todolistdata.listId">
    <h2 class="mb-2">{{ todolistdata.listName }}</h2>
    <transition-group
      name="listTransitions"
      tag="div"
      class="flex flex-col">
      <todo
        v-for="(todo, index) in sortedTodos"
        :key="todo.name"
        :todo="todo"
        @delete-todo="deleteTodo({ listName: todolistdata.listName, todoName: todo.name })"
        @change-todo-status="changeTodoStatus({ listName: todolistdata.listName, todoName: todo.name })"/>
    </transition-group>
    <new-item
      v-if="showNewItem"
      :type="'todoItem'"
      :listname="todolistdata.listName"
      class="my-2"
      @item-added="showNewItem = false"/>
    <button
      class="btnCard btnActiveStyling mt-2"
      @click="showNewItem = !showNewItem">Add To Do</button>
    <button
      class="btnCard btnActiveStyling mt-2"
      @click="deleteList(todolistdata.listName)">Delete List</button>
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
  computed: {
    sortedTodos () {
      return this.todolistdata.todos.slice().sort((a, b) => a.done > b.done)
    }
  },
  methods: {
    ...mapActions([
      'deleteList',
      'deleteTodo',
      'changeTodoStatus'
    ])
  }
}
</script>

<style>

</style>
