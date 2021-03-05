<template>
  <div class="sidebar"></div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style scoped>
.sidebar {
    position: fixed;
  width: 50px;
  bottom: 70px;
  top: 70px;
  left: 0px;
  background-color: white;
  z-index: 2;
}
</style>
