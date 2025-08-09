<template>
  <div class="container">
    <div class="box">
      <input type="text" placeholder="Login" v-model="user.name" />
      <input type="password" placeholder="Password" v-model="user.password" />
    </div>
    <div class="buttons">
      <button @click="login">Log In</button>
      <button @click="onCancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        name: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions(["setUserName"]),
    onCancel() {
      this.$router.push({
        name: "home",
      });
    },
    login() {
      this.setUserName(this.user.name);
      if (this.$route.query.redirect)
        this.$router.push({ path: this.$route.query.redirect });
      else this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}
.box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
}
.buttons {
  display: flex;
  gap: 10px;
}
</style>
