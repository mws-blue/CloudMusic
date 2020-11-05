<template>
  <div class="comment">
    <div>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="140"
        show-word-limit
        resize="none"
      >
      </el-input>
      <div class="submit-comment">
        <el-button class="bnt-comment" type="small" round>评论</el-button>
      </div>
    </div>
    <div class="show-comment">
      <h3>最新评论</h3>
      <div class="comment-box" v-for="(item,index) in comments" :key="index">
        <div class="user-avator">
          <el-image class="avator" :src="item.user.avatarUrl"></el-image>
        </div>
        <div class="info-box">
          <div>
            <span class="nickname">{{item.user.nickname}}：</span>
            <span>{{item.content}}</span>
          </div>
          <div class="foot-print">
            <div>{{formatter.formatDateTime(item.time)}}</div>
            <div class="action-icon">
               <span class="jubao">举报</span>
               <i class="el-icon-thumb zan"></i>
               <i class="el-icon-news share"></i>
               <i class="el-icon-chat-line-round pinlun"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatter from "@/utils/formatter"
export default {
  name: "comment",
  props: {
    comments:{
        type:Array,
        default(){
            return []
        }
    }
  },
  data() {
    return {
      formatter,
      textarea: ""
    };
  },
  mounted(){
    
  },
  methods:{
      
  }
};
</script>

<style scoped>
.submit-comment {
  padding-top: 10px;
}
.submit-comment {
  height: 32px;
}
.bnt-comment {
  float: right;
}
.comment-box {
  display: flex;
}
.info-box {
  flex-grow: 1;
}
.nickname {
  color: #507DAF;
}
.user-avator {
  width: 70px;
}
.avator{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.foot-print {
  display: flex;
  justify-content: space-between;
  color: #666666;
  padding-top: 6px;
}
.action-icon i {
  display: inline-block;
  padding: 0 6px;
  position: relative;
}
.action-icon .zan::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 12px    ;
    background:#666666;
    right: 0;
}
.action-icon .share::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 12px    ;
    background:#666666;
    right: 0;
}
.jubao {
    display: none;
}
.comment-box:hover .jubao{
   display: inline-block;
}
.comment-box{
  border-bottom: 1px solid #EAE7E7;
  padding: 10px 0;
}
</style>