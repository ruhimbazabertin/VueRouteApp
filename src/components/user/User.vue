<template>
  <div>
      <h3><strong>The user Page!</strong></h3>
      <hr>
      <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        navigateToHome(){
            return this.$router.push({name:"home"});
        }
    }
}
</script>

<style>

</style>