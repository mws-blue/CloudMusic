<template>
  <el-carousel :interval="4000" type="card" height="180px">
    <el-carousel-item v-for="item in banners" :key="item.imageUrl">
        <el-image class="item-banner" :src="item.imageUrl" fit="cover"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getSwaper } from "@/api/findmusic";
export default {
  data() {
    return {
      banners: [],
    };
  },
  created() {
    this.getSwaper();
  },
  methods: {
    getSwaper() {
      getSwaper()
        .then((res) => {
          if (res.data.code == 200) {
            console.log(res);
            this.banners = res.data.banners;
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.item-banner {
    height: 100%;
}
</style>