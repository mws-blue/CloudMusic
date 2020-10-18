<template>
  <div @click="login">登录</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: function () {
    return {
      //  token:""
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
    }),
  },
  watch: {
    token: function () {
      console.log(this.token);
      this.$router.push({ path: "/" });
    },
  },
  methods: {
    login: function () {
      this.$store.commit("SET_TOKEN", "mws");
    },
  },
};
</script>

<style>
</style>