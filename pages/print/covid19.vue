<template>
  <flow />
</template>

<script>
import Flow from '@/pages/covid19.vue'
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'
export default {
  components: {
    Flow,
  },
  layout: 'print',
  head() {
    return {
      title: this.$t('新型コロナウイルス感染症について'),
      link: [
        ...getLinksLanguageAlternative(
          'print/covid19',
          this.$i18n.locales,
          this.$i18n.defaultLocale
        ),
      ],
    }
  },
}
</script>
