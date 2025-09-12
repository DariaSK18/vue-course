<template>
  <div class="wrapper">
    <header class="header">
      <nav>
        <router-link :to="{ name: 'home' }">Home </router-link>
        <router-link :to="{ name: 'friends' }">Friends</router-link>
        <router-link :to="{ name: 'gifts' }">Gifts</router-link>
        <router-link :to="{ name: 'notes' }">Notes</router-link>
      </nav>
    </header>
    <main class="main">
        <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" scoped></style>
