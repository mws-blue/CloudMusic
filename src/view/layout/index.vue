<template>
  <div class="container">
    <Navbar></Navbar>
    <app-main></app-main>
    <bootom-bar></bootom-bar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AppMain from "./components/AppMain";
import BootomBar from "./components/BootomBar";
export default {
  components: {
    Navbar,
    AppMain,
    BootomBar,
  },
};
</script>

<style scoped>
.container {
  height: 680px;
  position: absolute;
  top: 40px;
  left: 60px;
  right: 60px;
}
</style>