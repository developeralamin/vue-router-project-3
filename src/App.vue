<template>

  
  <NavigationVue/>
  <div class="container">
  
  <router-view v-slot="{Component}">

      <transition name="slide-fade">
         <component :is="Component" :key="$route.path"></component>
      </transition>
  
  </router-view>

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

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}


.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}





</style>
