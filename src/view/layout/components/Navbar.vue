<template>
  <div class="navbar">
    <div class="nav-left">
      <img :src="logo" />
      <span>网易云音乐</span>
    </div>
    <div class="nav-middle">
      <div class="route-button">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangqian"></use>
        </svg>
      </div>
      <div class="route-button route-button2">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiangqian1"></use>
        </svg>
      </div>
      <div class="nav-search">
        <input type="text" placeholder="搜索音乐，视频，歌词，电台" />
        <svg class="icon svg-search" aria-hidden="true">
          <use xlink:href="#icon-search"></use>
        </svg>
      </div>
    </div>
    <div class="nav-right">
      <div class="user-login" v-if="cookie && cookie != 'undefined'">
        <img class="user-avator" :src="userInfo.profile.avatarUrl" alt="" />
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <span class="user-name">{{ userInfo.profile.nickname }}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus"
              >个人信息设置</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-check" command="loginOut"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="user-box" v-else>
        <svg class="icon svg-avator" aria-hidden="true">
          <use xlink:href="#icon-yonghu"></use>
        </svg>
        <el-button
          class="not-login"
          type="text"
          @click="dialogFormVisible = true"
          >未登录</el-button
        >
        <el-dialog title="登录" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="手机号" :label-width="formLabelWidth">
              <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input
                type="password"
                v-model="form.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="login">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div class="ohter-options">
         <span>开通VIP</span>
         <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pifu"></use>
        </svg>
        <i class="el-icon-message"></i>
        <i class="el-icon-setting"></i>
        <i class="el-icon-copy-document"></i>
        <i class="el-icon-minus"></i>
        <i class="el-icon-full-screen"></i>
        <i class="el-icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/admin";
export default {
  name: "Navbar",
  data: function () {
    return {
      logo: require("@/assets/img/logo.png"),
      dialogFormVisible: false,
      form: {
        phone: "",
        password: "",
      },
      formLabelWidth: "120px",
    };
  },
  mounted() {
    console.log(this.cookie, "----");
    console.log(this.userInfo, "++++");
  },
  computed: {
    cookie() {
      return this.$store.state.user.cookie
        ? this.$store.state.user.cookie
        : window.localStorage.getItem("cookie");
    },
    userInfo() {
      return this.$store.state.user.userInfo
        ? this.$store.state.user.userInfo
        : JSON.parse(window.localStorage.getItem("userInfo"));
    },
  },
  methods: {
    login() {
      this.dialogFormVisible = false;

      login(this.form)
        .then((res) => {
          if (res.data.code === 200) {
            console.log(res);
            this.$message("登录成功");
            this.$store.dispatch("setCookie", res.data.cookie);
            this.$store.dispatch("setUserInfo", res.data);
          } else {
            this.$message(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loginOut() {
      this.$store.dispatch("setCookie", "");
      this.$store.dispatch("setUserInfo", "");
    },
    handleCommand(command) {
      if (command === "loginOut") {
        this.loginOut();
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 60px;
  background-color: #c62f2f;
  display: flex;
  align-items: center;
  color: #c0c0bd;
  padding: 0 20px;
}
.nav-left {
  display: flex;
  align-items: center;
  color: #fff;
  padding-right: 60px;
}
.nav-left > span {
  font-size: 16px;
}
.nav-middle {
  display: flex;
}
.route-button {
  width: 20px;
  height: 20px;
  border: 1px solid #a72727;
  text-align: center;
  line-height: 20px;
}
.route-button:first-child {
  border-radius: 4px 0 0 4px;
}
.route-button2 {
  border-left: 0;
  border-radius: 0 4px 4px 0;
}
.nav-search {
  margin-left: 10px;
  background-color: #a72727;
  border-radius: 10px;
  padding: 0 6px;
  display: flex;
  align-items: center;
}
.nav-search > input {
  background: none;
  outline: none;
  border: none;
  font-size: 12px;
  width: 180px;
  color: #c67171;
}
.svg-search {
  fill: #c67171;
}
.svg-search:hover {
  fill: #ffff;
}
.nav-right {
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
}
.svg-avator {
  font-size: 28px;
  vertical-align: middle;
}
.el-button {
  color: #c0c0bd;
  font-size: 12px;
}
.not-login {
  vertical-align: middle;
}
.user-avator {
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  vertical-align: middle;
}
.el-dropdown-link {
  cursor: pointer;
  vertical-align: middle;
}
.user-name {
  width: 100px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 2px;
}
.el-dropdown {
  color: #c0c0bd;
  font-size: 12px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  font-size: 12px;
  margin-bottom: 20px;
}
.el-dropdown-menu__item {
  font-size: 12px;
}
.ohter-options {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
}
.ohter-options i,svg {
  font-size: 16px;
}
</style>