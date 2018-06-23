<template>
  <div>
    <h2>list title</h2>
    <p>{{ id }}</p>
    <button>add item</button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: function () {
        return ''
      }
    }
  }

}
</script>

<style>

</style>
