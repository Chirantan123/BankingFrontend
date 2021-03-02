<template>
  <div id="app">
    <Base />
    <router-view />
  </div>
</template>
<script>
import base from '@/components/base.vue'
export default {
  name: 'app',
  components: {
    Base: base
  }
}
</script>
<style lang="scss">
</style>
