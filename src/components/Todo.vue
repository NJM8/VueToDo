<template>
  <div
    :class="todo.done ? 'completedTodo' : ''"
    class="btnCard w-1/3 mx-auto flex justify-between todoItem">
    <p>{{ todo.name }}</p>
    <font-awesome-icon
      :icon="statusIcon"
      class="cursor-pointer ml-auto mx-2"
      @click="$emit('change-todo-status', todo.name)"/>
    <font-awesome-icon
      :icon="crossIcon"
      class="cursor-pointer mx-2"
      @click.prevent="$emit('delete-todo', todo.name)"/>
  </div>
</template>

<script>
import { faTimes, faUndo, faCheck } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    todo: {
      type: Object,
      default: function () {
        return {}
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
  }
}
</script>

<style>

</style>
