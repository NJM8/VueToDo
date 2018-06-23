<template>
  <div>
    <h2>{{ todolistdata.listName }}</h2>
    <todo
      v-for="(todo, index) in todolistdata.todos"
      :key="index"
      :todo="todo"/>
    <button>add item</button>
  </div>
</template>

<script>
import Todo from './Todo'

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
  }
}
</script>

<style>

</style>
