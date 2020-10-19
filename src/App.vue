<template>
  <div id="app" v-cloak>
     <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
[v-cloak] {
  display: none;
}
*{
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #fff;
}
#app {
  font-size: 12px;
  position: relative;
  height: 100vh;
  background-image: linear-gradient(rgba(255,0,5,0.1),rgba(0,0,255,0.4));
}
</style>
