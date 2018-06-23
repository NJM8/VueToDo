<template>
  <div>
    <p>{{ todo.name }} <span>completed: {{ todo.done }}</span> </p>
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
