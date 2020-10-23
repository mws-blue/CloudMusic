<template>
  <div class="show-detail">
    <div class="detail-header">
      <div class="header-left">
        <el-image :src="playlist.coverImgUrl" style="" fit="cover"></el-image>
      </div>
      <div class="header-right">
        <div class="title-box">
          <div class="title-left">
            <span class="list-tag">歌单</span>
            <span class="title">{{ playlist.name }}</span>
          </div>
          <div class="title-right">
            <div class="songs-num">
              <span>歌曲数</span>
              <span>{{playlist.trackCount}}</span>
            </div>
            <div class="play-num">
              <span>播放数</span>
              <span>{{formatter.playCount(playlist.playCount)}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { musicDetail } from "@/api/findmusic";
import formatter from "@/utils/formatter"
export default {
  name: "showdetail",
  data() {
    return {
      formatter,
      playlist: [],
    };
  },
  created() {
    console.log(this.$route, "----");
    this.musicdetail();
  },
  methods: {
    musicdetail() {
      musicDetail(this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            console.log(res);
            this.playlist = res.data.playlist;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.detail-header {
  display: flex;
  padding: 20px;
}
.header-left {
  width: 18%;
  padding-right: 20px;
}
.header-right {
  width: 100%;
}
.list-tag {
  padding: 0 5px;
  color: red;
  border: 1px solid red;
  vertical-align: middle;
}
.title-box {
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 23px;
  vertical-align: middle;
  padding-left: 5px;
  color: #333333;
}
.title-right {
  color: #999999;
  display: flex;
}
.title-right span {
  display: block;
  text-align: right;
}
.songs-num {
  padding:0 5px;
  border-right: 1px solid #E1E1E2;
}
.play-num {
  padding:0 5px;
}
</style>