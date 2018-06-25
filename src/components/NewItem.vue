<template>
  <div>
    <input
      ref="input"
      v-model="newItem"
      type="text"
      class="input"
      placeholder="Press enter to submit"
      @keyup.enter="localAddNewItem({ 'type': type, value: newItem, listName: listname })">
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
  created () {
    this.$nextTick(() => this.$refs.input.focus())
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
