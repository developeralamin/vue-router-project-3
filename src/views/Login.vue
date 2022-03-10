<template>
    <div class="login">
          <form class="form" @submit.prevent="login">
             <h1>Login</h1>
              <label for="username">UserName</label>
              <input type="text" v-model="username"  name="username" class="input">

               <label for="password">Password</label>
              <input type="text" v-model="password"  name="password" class="input">
              <button class="btn">Login</button>
          </form>
    </div>
</template>

<script>
export default {
    name: 'VueSchoolProjectLogin',

    data() {
        return {
            username:'',
            password:'',
        };
    },

    mounted() {
        
    },

    methods: {
        login(){
            window.user = this.username
            this.$router.push({name:'Protected',query:{logout:null}})
        }
    },
};
</script>

<style lang="scss" scoped>

</style>