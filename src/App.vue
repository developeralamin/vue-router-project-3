<template>

  
  <NavigationVue/>
  <div class="container">
   <router-view/>
  </div>
  <Footer/>

  

</template>

<script>
import NavigationVue  from "./components/Navigation.vue";
import Footer  from "./components/Footer.vue";
export default {
    
    components:{
      NavigationVue,
      Footer
    }


};

</script>

<style>

</style>
