<template>
  <div class="container">
    <h2>{{ t('home.title') }}</h2>
    <p>
      {{ t('home.text') }}
    </p>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
 h2{
    text-align: center;
    margin-bottom: 20px;
  }
</style>
