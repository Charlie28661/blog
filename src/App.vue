<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Route from "./components/Route.vue";
    
</script>

<template>
  <body>
      <Navbar></Navbar>
      <Route></Route>
      <RouterView></RouterView>
      <Footer></Footer>
  </body>
</template>

<style scoped>

</style>