<template>
<div>
  <h3><strong>Some User Details</strong></h3>
  <hr>
  <span><strong>Loaded ID:</strong>{{$route.params.id}}</span>
  <router-link
               tag="button"
               :to="{ name: 'editUser', params: {id :$route.params.id}}"
               class="btn btn-primary">EditUser</router-link>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>