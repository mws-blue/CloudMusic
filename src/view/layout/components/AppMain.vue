<template>
  <div class="app-main">
     <sidder class="sidder"></sidder>
     <router-view class="content"></router-view>
  </div>
</template>

<script>
import sidder from "./Sidder"
export default {
   components:{
     sidder
   }
}
</script>

<style scoped>
.app-main {
  height: 560px;
  display: flex;
  background: #fff;
}
.sidder {
  width: 20%;
}
.content{
  width: 80%;
}
</style>