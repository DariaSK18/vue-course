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
        <div class="user" v-if="getUser">
          <span>{{ getUser.displayName }}</span>
          <img :src="getUser.photoURL" alt="photo" />
          <button @click="onLogout">{{ $t('menu.logout') }}</button>
        </div>
        <button v-else @click="onLogin">{{ $t('menu.login') }}</button>
        <!-- <router-link :to="{ name: 'login' }">{{ $t('menu.login') }}</router-link> -->
      </div>
    </header>
    <main class="main">
      <slot></slot>
    </main>
    <footer class="footer">{{ $t('footer.text') }}</footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MainLayout',
  computed: {
    ...mapGetters('auth', ['getUser']),
    availableLocales() {
      return Object.keys(this.$i18n.messages)
    },
  },
  methods: {
    ...mapActions('auth', ['loginWithGoogle', 'logout']),
    onLogout() {
      this.logout()
      this.$router.push({
        name: 'login',
      })
    },
    async onLogin() {
      try {
        await this.loginWithGoogle()
        this.$router.push({
          name: 'home',
        })
      } catch (error) {
        console.error(error.messages)
      }
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
  margin: 0 auto;
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
    align-items: center;
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
      align-items: center;
      .user{
        display: flex;
        gap: 10px;
        align-items: center;
        img {
          border-radius: 50%;
          width: 40px;
        }
      }
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
