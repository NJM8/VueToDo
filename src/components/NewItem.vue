<template>
  <div>
    <input
      v-model="newItem"
      type="text">
    <button @click="localAddNewItem({ 'type': type, value: newItem, listName: listname })">Add</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    type: {
      type: String,
      default: function () {
        return ''
      }
    },
    listname: {
      type: String,
      default: function () {
        return ''
      }
    }
  },
  data () {
    return {
      newItem: ''
    }
  },
  methods: {
    ...mapActions([
      'addNewItem'
    ]),
    localAddNewItem (payload) {
      this.addNewItem(payload)
      this.$emit('item-added')
    }
  }
}
</script>

<style>

</style>
