<template>
  <div class="home">Home</div>
  <div v-if="!getUserName">
    <router-link
      :to="{
        name: 'login',
      }"
      class="login-text"
      >Log In</router-link
    >
    <span> to get full access to use the platform!</span>
  </div>
  <div v-else>Welcome to our platform!</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapGetters(["getUserName"]),
  },
};
</script>
