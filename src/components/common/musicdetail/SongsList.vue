<template>
  <div class="songs-list">
    <el-table :data="tracks" :size="size" style="width: 100%">
      <el-table-column type="index" width="80"> </el-table-column>
      <el-table-column label="操作" width="120">
        <i class="el-icon-star-off"></i>
        <i class="el-icon-download"></i>
      </el-table-column>
      <el-table-column prop="name" label="音乐标题">
      </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手"> </el-table-column>
      <el-table-column prop="al.name" label="专辑"> </el-table-column>
      <el-table-column prop="dt" label="时长"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tracks: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      size: "small",
    };
  },
  methods: {
    rowClass() {
      return "song-table";
    },
  },
};
</script>

<style scoped>
.el-table__header th,
.el-table__header tr {
  background-color: red;
}
.el-table__body td,
.el-table__body th {
  background-color: red;
}
.cell i {
  cursor: pointer;
  font-size: 16px;
  margin-right:4px;
}
</style>