<template>
  <div class="container">
    <header class="header">
      <nav>
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'products' }">Products</router-link> |
        <router-link :to="{ name: 'providers' }">Providers</router-link> |
        <router-link :to="{ name: 'contacts' }">Contacts</router-link> |
        <router-link
          :to="{
            name: 'rules',
          }"
          >Store Rules</router-link
        >
      </nav>
    </header>
    <main class="main">
      <slot></slot>
    </main>
    <footer class="footer">
      <slot name="left-footer">
        <div class="footer_block">
          <p>Store Rating : 54449</p>
        </div>
      </slot>
      <slot name="right-footer">
        <div class="footer_block">
          <p>Owner : Baba Galya</p>
        </div>
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header {
  border-bottom: 2px solid black;
}
.main {
  flex-grow: 1;
  padding: 20px;
}
.footer {
  flex-shrink: 0;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  padding: 10px;
  border-top: 2px solid black;
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
</style>
