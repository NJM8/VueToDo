<template>
  <div :key="todolistdata.listId">
    <h2>{{ todolistdata.listName }}</h2>
    <todo
      v-for="(todo, index) in todolistdata.todos"
      :key="index"
      :todo="todo"/>
    <new-item
      v-if="showNewItem"
      :type="'todoItem'"
      @item-added="showNewItem = false"/>
    <button @click="showNewItem = !showNewItem">Add To Do</button>
  </div>
</template>

<script>
import Todo from './Todo'
import NewItem from './NewItem'

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
  }
}
</script>

<style>

</style>
