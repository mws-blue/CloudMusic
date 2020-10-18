<template>
  <div class="navbar">
    <router-link to="admin">菜单1</router-link>
    <router-link to="center">菜单2</router-link>
  </div>
</template>

<script>
export default {
   methods:{
    //  goto:function(){
    //    this.$router.push({path:"admin"})
    //  }
   }
}
</script>

<style scoped>
.navbar{
  height: 60px;
  background-color: #C62F2F;
}
</style>