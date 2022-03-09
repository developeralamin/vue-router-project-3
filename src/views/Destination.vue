<template>
<div> 
    <section class="destination">
         <h1> {{ destination.name }}</h1>
         <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
         </div>

    </section>
  
  <!-- // Top experience section  -->
  <!-- // Top experience section  -->
  
    <section class="experiences">
       <h2>Top experiences  {{ destination.name }}</h2>

       <div class="cards">
       
       <!-- <router-link
          v-for="experience in destination.experiences"
            :key="experience.slug"
            :to="{ name:'experience', params:{ experienceSlug: experience.slug }}"
         >  
        <ExperienceCardVue :experience="experience" />
              
         </router-link> -->
          <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{name: 'experience.show', params:{experienceSlug: experience.slug}}"
      >
        <ExperienceCardVue
          :experience="experience"
        />
      </router-link>

       </div>
        <router-view />

    </section>


</div>
</template>

<script>
import sourceData from '@/data.json'
import ExperienceCardVue  from '@/components/ExperienceCard.vue';

export default {
    name: 'VueSchoolProjectDestination',
    components:{
        ExperienceCardVue
    },
    props:{
         id:{type:String, required:true}
    },

    computed:{
        destination(){
                return sourceData.destinations.find(
                (destination) => destination.id === this.id
                );
            },
    }

};
</script>

<style>

</style>