<template>
  <div class="block">
    <nav v-if="isMenuVisible">
      <router-link to="/">Home</router-link> |
      <router-link
        :to="{
          name: 'lessons',
        }"
        >Lessons</router-link
      >
      |
      <router-link
        :to="{
          name: 'teachers',
        }"
        >Teachers</router-link
      >
      |
      <router-link to="/about">About</router-link>
    </nav>
    <div v-if="isMenuVisible" class="login">
      <router-link
        v-if="!getUserName"
        :to="{
          name: 'login',
        }"
        class="login-text"
        >Log In</router-link
      >
      <div v-else>
        {{ getUserName }}
        <router-link
          :to="{ name: 'home' }"
          class="login-text"
          @click="this.logOff"
          >Log Off</router-link
        >
      </div>
    </div>
  </div>
  <router-view />
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  // data() {
  //   return {
  //     userName: window.userName,
  //   };
  // },
  computed: {
    ...mapGetters(["getUserName"]),
    isMenuVisible() {
      if (this.$route.meta?.hideMenu) return false;
      else return true;
    },
  },
  methods: {
    ...mapActions(["logOff"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.block {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
}
.login {
  border: 2px solid black;
  padding: 10px;
  border-radius: 10px;
}
.login-text {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 700;
}
</style>
