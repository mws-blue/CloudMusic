<template>
  <div class="music-list">
      <title-header name="推荐歌单"></title-header>
      <music-list-item v-for="item in musicList" :item="item" :key="item.id"></music-list-item>
  </div>
</template>

<script>
import TitleHeader from "@/components/common/titleheader/TitleHeader"
import MusicListItem from "@/components/common/musiclistitem/MusicListItem"
import {musicList} from "@/api/findmusic/index"
export default {
   components:{
       TitleHeader,
       MusicListItem
   },
   data(){
       return {
          musicList:[]
       }
   },
   created(){
      this.getMusicList()
   },
   methods:{
       getMusicList(){
           musicList().then(res => {
               if(res.data.code == 200){
                   console.log(res.data)
                   this.musicList = res.data.result
               }
           }).catch(err => {
               console.log(err)
           })
       }
   }
}
</script>

<style scoped>
.music-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>