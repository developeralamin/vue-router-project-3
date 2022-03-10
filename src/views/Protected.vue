<template>
    <div>
        <h1>Grettings {{ username }}</h1>

        <button @click="logout">logout</button>

    </div>
</template>

<script>
export default {
    name: 'VueSchoolProjectProtected',

    data() {
        return {
            username:window.user
        };
    },

    mounted() {
        
    },

    methods: {
        logout(){
            window.user = null
            this.$router.push({name:'Home'})
        }
    },
};
</script>

<style lang="scss" scoped>

</style>