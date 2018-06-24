<template>
  <div>
    <p>{{ todo.name }} <span>completed: {{ todo.done }} </span>
      <font-awesome-icon
        :icon="crossIcon"
        class="cursor-pointer"
        @click.prevent="$emit('delete-todo', todo.name)"/>
    </p>
  </div>
</template>

<script>
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
    }
  }
}
</script>

<style>

</style>
