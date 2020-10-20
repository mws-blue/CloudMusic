<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in tabs"
        :label="item.label"
        :name="item.name"
        :key="item.name"
        ></el-tab-pane
      >
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "/findmusic/fdstyle",
      tabs: [
        { label: "个性推荐", name: "/findmusic/fdstyle" },
        { label: "歌单", name: "/findmusic/fdstyle2" },
        { label: "主播电台", name: "/findmusic/fdstyle3" },
        { label: "排行榜", name: "/findmusic/fdstyle4" },
        { label: "歌手", name: "/findmusic/fdstyle5" },
        { label: "最新音乐", name: "/findmusic/fdstyle6" },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.$router.replace(tab.name)
    },
  },
};
</script>

<style>
</style>