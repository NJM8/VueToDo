<template>
  <div
    :class="todo.done ? 'completed-todo' : ''"
    class="todo-card w-1/2 mx-auto flex justify-between todo-transition">
    <p>{{ todo.name }}</p>
    <font-awesome-icon
      :icon="statusIcon"
      class="cursor-pointer ml-auto mx-2"
      @click="changeTodoStatus({ listName: listname, todoName: todo.name })"/>
    <font-awesome-icon
      :icon="crossIcon"
      class="cursor-pointer mx-2"
      @click="deleteTodo({ listName: listname, todoName: todo.name })"/>
  </div>
</template>

<script>
import { faTimes, faUndo, faCheck } from '@fortawesome/free-solid-svg-icons'
import { mapActions } from 'vuex'

export default {
  props: {
    todo: {
      type: Object,
      default: function () {
        return {}
      }
    },
    listname: {
      type: String,
      default: function () {
        return ''
      }
    }
  },
  computed: {
    crossIcon () {
      return faTimes
    },
    statusIcon () {
      return this.todo.done ? faUndo : faCheck
    }
  },
  methods: {
    ...mapActions([
      'deleteTodo',
      'changeTodoStatus'
    ])
  }
}
</script>

<style>

</style>
