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
              <span>{{ playlist.trackCount }}</span>
            </div>
            <div class="play-num">
              <span>播放数</span>
              <span>{{ formatter.playCount(playlist.playCount) }}</span>
            </div>
          </div>
        </div>
        <div class="author-box">
          <el-image
            class="avator-img"
            :src="creator.avatarUrl"
            fit="cover"
          ></el-image>
          <span class="nickname">{{ creator.nickname }}</span>
          <span>{{ formatter.formatDate(playlist.createTime) }}创建</span>
        </div>
        <div class="user-action">
          <div class="action-item single-style">
            <i class="el-icon-video-play"></i>
            <span>播放全部</span>
            <i class="el-icon-plus"></i>
          </div>
          <div class="action-item">
            <i class="el-icon-folder-add"></i>
            <span>收藏({{ playlist.subscribedCount }})</span>
          </div>
          <div class="action-item">
            <i class="el-icon-news"></i>
            <span>分享({{ playlist.shareCount }})</span>
          </div>
          <div class="action-item">
            <i class="el-icon-download"></i>
            <span>下载全部</span>
          </div>
        </div>
        <div class="descrip-box">
          <div class="tag">
            <span>标签:</span>
            <a href="#">{{ formatter.formatTags(tags) }}</a>
          </div>
          <div>
            <span>简介:</span>
            <span style="padding-left: 4px">{{ playlist.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="歌曲列表" name="songslist">
          <songs-list :tracks="tracks"></songs-list>
        </el-tab-pane>
        <el-tab-pane :label="commentCount" name="comment">
          <Comment :comments="comments"></Comment>
        </el-tab-pane>
        <el-tab-pane label="收藏者" name="collector">
          <Collector :subscribers="subscribers"></Collector>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { musicDetail,songsComment,getCollector } from "@/api/findmusic";
import formatter from "@/utils/formatter";
import SongsList from "./SongsList"
import Comment from "./Comment"
import Collector from "./Collector"
export default {
  name: "showdetail",
  components:{
    SongsList,
    Comment,
    Collector
  },
  data() {
    return {
      formatter,
      playlist: "",
      creator: "",
      tags: "",
      tracks:[],
      songsId:"",
      activeName: 'songslist',
      comments:[],
      subscribers:[]
    };
  },
  computed:{
   commentCount(){
     return `评论(${this.playlist.commentCount})`
   }
  },
  created() {
    console.log(this.$route, "----");
    this.musicdetail();
  },
  watch:{
     songsId(){
          let data = {id:this.songsId,limit:20};

          songsComment(data).then(res => {
              console.log(res)
              if(res.data.code == 200) {
                  this.comments = res.data.comments
              }
          }).catch(err => {
              console.log(err)
          })
     }
  }, 
  methods: {
    musicdetail() {
      musicDetail(this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            console.log(res);
            this.playlist = res.data.playlist;
            this.creator = res.data.playlist.creator;
            this.tags = res.data.playlist.tags;
            this.tracks = res.data.playlist.tracks
            this.songsId = res.data.playlist.id
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCollector(){
       getCollector({id:this.songsId,limit:40}).then(res => {
         console.log(res)
         if(res.data.code == 200){
            this.subscribers = res.data.subscribers
         }
       }).catch(err => {
         console.log(err)
       })
    },
    handleClick(tab, event) {
        console.log(tab, event);
        if(tab.name == 'collector'){
            this.getCollector()
        }
      }
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
  padding: 0 5px;
  border-right: 1px solid #e1e1e2;
}
.play-num {
  padding: 0 5px;
}
.author-box {
  display: flex;
  align-items: center;
  padding: 6px 0;
}
.avator-img {
  width: 30px;
  height: 30px;
  border-radius: 50px;
}
.author-box span {
  padding: 0 4px;
}
.nickname {
  font-size: 14px;
}
.user-action {
  padding: 10px 0;
}
.action-item {
  display: inline-block;
  border-radius: 6px;
  margin-right: 10px;
  background-color: #fff;
}
.single-style {
  color: #fff;
  background-color: #c62f2f;
}
.action-item i {
  padding: 6px 8px;
}
.action-item span {
  padding: 6px 8px 6px 0;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}
.descrip-box {
  padding: 10px 0;
}
.tag > a {
  padding-left: 4px;
  color: #0c73c2;
}
.detail-content {
  padding: 0 20px;
}
</style>