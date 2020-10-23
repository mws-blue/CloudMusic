<template>
  <div class="con-fdstyle">
    <swaper></swaper>
    <music-list></music-list>
  </div>
</template>

<script>
import swaper from "@/components/fdstyle/swaper/Swaper"
import musicList from "@/components/fdstyle/musiclist/MusicList"
export default {
   components:{
     swaper,
     musicList
   }
}
</script>

<style scoped>
.con-fdstyle {
  padding: 0 100px;
   /* height: 510px;
   overflow: auto; */
}
</style>