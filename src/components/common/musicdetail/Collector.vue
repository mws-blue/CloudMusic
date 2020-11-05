<template>
  <div class="collector-box">
      <div class="collector-item" v-for="(item,index) in subscribers" :key="index">
          <div>
              <el-image class="avator" :src="item.avatarUrl"></el-image>
          </div>
          <div class="nick-box">
              <span>{{item.nickname}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
   props:{
       subscribers:{
           type:Array,
           default(){
               return []
           }
       }
   }
}
</script>

<style scoped>
.collector-item {
    display: inline-block;
    padding: 20px;
}
.avator{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.nick-box {
    text-align: center;
    padding-top: 8px;
}
</style>