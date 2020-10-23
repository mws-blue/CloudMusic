<template>
  <div class="title-header">
       <div class="name">{{name}}</div>
       <div class="more"><a>{{more}}<i class="el-icon-arrow-right"></i></a></div>
  </div>
</template>

<script>
export default {
    name:"TitleHeader",
   props:{
       name:{
           type:String,
           default:"名字"
       },
       more:{
           type:String,
           default:"更多"
       },
       path:{
           type:String,
           default:""
       }
   }
}
</script>

<style scoped>
.title-header{
    width: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E1E1E2;
    padding-bottom: 4px;
    margin-bottom: 4px;
}
.name {
    font-size: 18px;
}
.more>a {
    font-size: 12px;
    color: #000;
}
</style>