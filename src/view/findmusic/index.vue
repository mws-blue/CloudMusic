<template>
  <div>
    <el-tabs class="fd-tabs" v-model="activeName" @tab-click="handleClick">
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
      activeName: this.$route.path,
      tabs: [
        { label: "个性推荐", name: "/recommend/findmusic/fdstyle" },
        { label: "歌单", name: "/recommend/findmusic/fdsongs" },
        { label: "主播电台", name: "/recommend/findmusic/fdanchor" },
        { label: "排行榜", name: "/recommend/findmusic/fdleaderboard" },
        { label: "歌手", name: "/recommend/findmusic/fdsinger" },
        { label: "最新音乐", name: "/recommend/findmusic/fdnewmusic" },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.$router.push(tab.name)
    },
  },
};
</script>

<style scoped>
.fd-tabs {
    width: 472px;
    margin: 0 auto;
}
</style>