<template>
  <div class="app-main">
    <el-container>
      <el-aside style="width:200px;">
        <sidder></sidder>
      </el-aside>
      <router-view class="content"></router-view>
    </el-container>
  </div>
</template>

<script>
import sidder from "./Sidder";
export default {
  components: {
    sidder,
  },
};
</script>

<style scoped>
.app-main {
  height: 560px;
  display: flex;
  background: #fff;
}
.content {
  width: 100%;
  padding: 0 100px;
}
</style>