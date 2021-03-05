<template>
  <div class="main">
    <navbar />
    <h1>This is homepage</h1>
    <Footer />
    <!-- <sidebar /> -->
  </div>
</template>

<script>
import footer from '@/components/footer.vue'
import navbar from '@/components/navbar.vue'
export default {
  name: 'home',
  components: {
    navbar: navbar,
    Footer: footer
  }
}
</script>

<style>

</style>
