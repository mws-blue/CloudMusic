<template>
  <div class="folter">
    <folter-left></folter-left>
    <folter-middle></folter-middle>
    <folter-right></folter-right>
  </div>
</template>

<script>
import FolterLeft from "@/components/common/bootombar/FolterLeft"
import FolterMiddle from "@/components/common/bootombar/FolterMiddle"
import FolterRight from "@/components/common/bootombar/FolterRight"
export default {
   components:{
     FolterLeft,
     FolterMiddle,
     FolterRight
   }
}
</script>

<style scoped>
.folter {
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

</style>