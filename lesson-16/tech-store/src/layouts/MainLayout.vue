<template>
  <div class="container">
    <header class="header">
      <nav class="navigation">
        <router-link :to="{ name: 'home' }">{{ $t('menu.home') }}</router-link>
        <router-link :to="{ name: 'products' }">{{ $t('menu.products') }}</router-link>
        <router-link :to="{ name: 'contacts' }">{{ $t('menu.contacts') }}</router-link>
      </nav>
      <div class="profile">
        <label>
          {{ $t('menu.language') }}
          <select name="lang" v-model="$i18n.locale">
            <option v-for="locale in availableLocales" :key="locale" :value="locale">
              {{ locale }}
            </option>
          </select>
        </label>
        <router-link :to="{ name: 'login' }">{{ $t('menu.login') }}</router-link>
      </div>
    </header>
    <main class="main">
      <slot></slot>
    </main>
    <footer class="footer">{{ $t('footer.text') }}</footer>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  computed: {
    availableLocales() {
      return Object.keys(this.$i18n.messages)
    },
  },
  watch: {
    '$i18n.locale'(newLocale) {
      localStorage.setItem('locale', newLocale)
    },
  },
  created() {
    this.$i18n.locale = localStorage.getItem('locale') || 'en'
    if (localStorage.getItem('locale') !== this.$i18n.locale)
      localStorage.setItem('locale', this.$i18n.locale)
    const self = this
    window.addEventListener('storage', function () {
      if (self.$i18n.locale !== localStorage.getItem('locale')) {
        self.$i18n.locale = localStorage.getItem('locale')
        self.$router.go()
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .header {
    border-bottom: 1px solid grey;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .navigation {
      display: flex;
      gap: 30px;
    }
    a {
      font-weight: 700;
      text-decoration: none;
      color: darkslategrey;
    }
    .profile {
        display: flex;
        gap: 20px;
    }
  }
  .main {
    flex-grow: 1;
    padding: 10px 0;
  }
  .footer {
    border-top: 1px solid grey;
    padding: 10px;
    text-align: center;
    flex-grow: 0;
  }
}
</style>
