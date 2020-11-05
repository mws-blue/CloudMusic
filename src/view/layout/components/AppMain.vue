<template>
  <div class="app-main">
    <el-container>
      <el-aside style="width:220px;">
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
  background:#F8F7F7;
}
.content {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
<style>
/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 255, 0.1);
  border-radius: 3px;
}
</style>