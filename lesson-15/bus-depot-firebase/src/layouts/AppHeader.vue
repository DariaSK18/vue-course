<template>
        <header>
        <div class="wrapper">
          <nav>
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink :to="{ name: 'drivers' }">Drivers</RouterLink> |
            <RouterLink :to="{ name: 'buses' }">Buses</RouterLink> |
            <RouterLink :to="{ name: 'assignment' }">Assignment</RouterLink> |
            <RouterLink :to="{ name: 'contacts' }">Conacts</RouterLink>
          </nav>
        </div>
      </header>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>

<style scoped>
.wrapper {
  text-align: center;
  padding: 10px;
}
</style>