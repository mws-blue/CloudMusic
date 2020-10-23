<template>
  <div class="musiclistitem" @click="gotoDetail(item.id)">
    <el-card class="e-card" :body-style="{ padding: '0px',width:'100%' }" shadow="hover">
      <img
        :src="item.picUrl"
        class="image"
      />
      <div class="play-count">
          <i class="el-icon-headset"></i>
          <span>{{formatter.playCount(item.playCount)}}</span>
      </div>
      <div class="copy-writer">
          <span>{{item.copywriter}}</span>
      </div>
      <div class="btm">
          <i class="el-icon-video-play"></i>
      </div>
    </el-card>
    <div class="music-name">
        <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
import formatter from "@/utils/formatter"
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data(){
      return {
          formatter
      }
  },
  methods:{
      gotoDetail(id){
          console.log(id,"id---")
          this.$router.push({path:"/playlist/detail"+id})
      }
  }
};
</script>

<style scoped>
.musiclistitem {
  width: 18%;
  display: inline-block;
  padding: 10px 0;
  cursor: pointer;
}
.e-card {
    position: relative;
}
.image {
  width: 100%;
  height: 100%;
  display: block;
}
.play-count {
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
}
.copy-writer {
    width: 100%;
    position: absolute;
    top: 0;
    color: #fff;
    background: rgba(0, 0, 0, .4);
    padding: 4px;
    transform: translateY(-100%);
    transition: transform 0.4s;
}
.musiclistitem:hover .copy-writer{
    transform: translateY(0);
}
.musiclistitem:hover .play-count {
    display: none;
}
.btm {
    position: absolute;
    right: 6px;
    bottom: 2px;
    font-size: 26px;
    color: red;
    transform: translateX(120%);
    transition: transform 0.4s;
}
.musiclistitem:hover .btm {
    transform: translateX(0);
}
.music-name>span {
    display: inline-block;
    padding-top: 4px;
}
</style>