<template>
    <div>
       <div class="home">
         <h2>All Destinations</h2>
         <div class="destinations">
         
         <router-link 

         v-for="destination in destinations" 
         :key="destination.id" 
         :to="{ name: 'Destination' , params:{ id: destination.id, slug: destination.slug} } ">

            <h2>{{ destination.name }}</h2>
            <img :src="`/images/${destination.image}`" :alt="destination.name">
         </router-link>
       </div>


         </div>
    </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
    name: 'VueSchoolProjectHome',

    data() {
        return {
             destinations:sourceData.destinations
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>