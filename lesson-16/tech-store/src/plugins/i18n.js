import { createI18n } from 'vue-i18n'
import localesEN from '@/locales/en.json'
import localesRU from '@/locales/ru.json'

const i18n = createI18n({
  locale: import.meta.env.VITE_I18N_LOCALE || 'en',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    en: localesEN,
    ru: localesRU,
  },
})

export default i18n
