<template>
    <div class="main">
        <navbar />
        <Footer />
    </div>
</template>

<script>
import navbar from 'src/components/navbar.vue'
import footer from 'src/components/footbar.vue'
export default {
  components: {
    navbar: navbar,
    Footer: footer
  }
}
</script>

<style>

</style>
