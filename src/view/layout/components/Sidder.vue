<template>
  <div class="sidder">
    <el-menu
      mode="vertical"
      :router="true"
      :default-active="$route.path"
      background-color="#EFEFF2"
      class="el-menu-vertical-demo"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>推荐</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :class="activePath=='findmusic'?'findmusic':''" index="/recommend/findmusic/fdstyle" route="/recommend/findmusic/fdstyle">发现音乐</el-menu-item>
          <el-menu-item index="/recommend/myselfFM" route="/recommend/myselfFM">私人FM</el-menu-item>
          <el-menu-item index="1-3">LOOK直播</el-menu-item>
          <el-menu-item index="1-3">视频</el-menu-item>
          <el-menu-item index="1-3">朋友</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>我的音乐</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="2-1">本地音乐</el-menu-item>
          <el-menu-item index="2-2" route="2-2">下载管理</el-menu-item>
          <el-menu-item index="2-3">我的音乐云盘</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title">
          <span>我的音乐</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1" route="2-1">本地音乐</el-menu-item>
          <el-menu-item index="3-2" route="2-2">下载管理</el-menu-item>
          <el-menu-item index="3-3">我的音乐云盘</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
     return {
       path:"",
       activePath:""
     }
  },
  watch:{
    $route:function(){
      this.path = this.$route.path;

      if(this.path.indexOf("findmusic") != -1){
        this.activePath = 'findmusic'
      }else{
        this.activePath = this.path
      }
    }
  },
  methods: {
    
  },
};
</script>

<style scoped>
.sidder {
  height: 100%;
  background-color: #EFEFF2;
}
.findmusic {
  background: #ecf5ff;
  color: #40B8FF;
}
</style>