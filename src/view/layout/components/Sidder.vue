<template>
  <div class="sidder">
    <el-menu
      mode="vertical"
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>推荐</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/findmusic/fdstyle" route="/findmusic/fdstyle">发现音乐</el-menu-item>
          <el-menu-item index="/recommend/myselfFM" route="/recommend/myselfFM">私人FM</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>我的音乐</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="2-1">发现音乐</el-menu-item>
          <el-menu-item index="2-2" route="2-2">私人FM</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.sidder {
  background-color: aquamarine;
}
</style>