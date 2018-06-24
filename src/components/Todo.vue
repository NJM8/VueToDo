<template>
  <div>
    <p>{{ todo.name }} <span>completed: {{ todo.done }} </span>
    <button @click="$emit('delete-todo', todo.name)">delete</button></p>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style>

</style>
