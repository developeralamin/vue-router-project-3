<template>
    <div>
         <div id="nav">
          <router-link  id="logo" to="/">Vue Travel App</router-link>
            <router-link 
         
         v-for="destination in destinations" 
         :key="destination.id" 
         :to="{ name: 'Destination' , params:{ id: destination.id , slug: destination.slug} } ">

           {{ destination.name }}
        
         </router-link>
        </div>
    </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
    name: 'VueSchoolProjectNavigation',

    data() {
        return {
             destinations:sourceData.destinations
        };
    },


};
</script>

<style>

#nav .router-link-active{
  color: rgb(255, 255, 255);
  border-bottom: 2px solid white
}

</style>