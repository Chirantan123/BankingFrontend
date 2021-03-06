<template>
  <div class="main">
    <navbar />
    <h1><b>Welcome to QUINPAY BANK</b></h1>
    <img src="@/assets/mylogo.jpg">
    <!-- <sidebar /> -->
    <Footer />
  </div>
</template>

<script>
import footer from '@/components/footer.vue'
import navbar from '@/components/navbar.vue'
// import sidebar from '@/components/sidebar.vue'
export default {
  name: 'home',
  components: {
    navbar: navbar,
    Footer: footer
    // sidebar: sidebar
  }
}
</script>

<style>
h1{
  align-content: center;
color: black;
height: 150px;
}
img {
  margin-top:40px;
  height: 150px;
  float:right;
}
</style>
