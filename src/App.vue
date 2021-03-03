<template>
  <div id="app">
    <navbar />

      <router-view />
      <Footer />
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import footer from '@/components/footer.vue'
export default {
  name: 'app',
  components: {
    navbar: navbar,
    Footer: footer
  }
}
</script>

<style lang="scss">
body {
  background-image:url('https://image.freepik.com/free-photo/macro-shot-financial-concept_53876-14671.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
