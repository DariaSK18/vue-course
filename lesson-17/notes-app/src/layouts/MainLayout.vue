<template>
  <div class="wrapper">
    <header class="header">
      <nav>
        <router-link :to="{ name: 'home' }">{{ t('menu.home') }} </router-link>
        <router-link :to="{ name: 'friends' }">{{ t('menu.friends') }}</router-link>
        <router-link :to="{ name: 'gifts' }">{{ t('menu.gifts') }}</router-link>
        <router-link :to="{ name: 'notes' }">{{ t('menu.notes') }}</router-link>
      </nav>
      <div>
        <label>
          {{ $t('menu.language') }}
          <select name="lang" v-model="locale">
            <option v-for="locale in availableLocales" :key="locale" :value="locale">
              {{ locale }}
            </option>
          </select>
        </label>
      </div>
    </header>
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { computed, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()
const { t, locale, messages } = useI18n()
const availableLocales = computed(() => Object.keys(messages.value))
watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale)
})
onMounted(() => {
  locale.value = localStorage.getItem('locale') || 'en'
  if (localStorage.getItem('locale') !== locale.value) localStorage.setItem('locale', locale.value)

  window.addEventListener('storage', function () {
    if (locale.value !== localStorage.getItem('locale')) {
      locale.value = localStorage.getItem('locale')
      router.go()
    }
  })
})
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.header {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  nav {
    display: flex;
    gap: 20px;
  }
}
</style>
