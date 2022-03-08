<template>
    <div>

         <div class="card">
            <img :src="`/images/${experience.image}`" :alt="experience.name">
            <span class="card_text"> 
              <p>{{ experience.name }}</p>
            </span>
          
         </div>
    </div>
</template>

<script>
export default {
    name: 'VueSchoolProjectExperiencecard',
    props:{
        experience:{type:Object , required:true}
    }
};
</script>

<style>

</style>