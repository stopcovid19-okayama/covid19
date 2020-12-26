<template>
  <data-view
    class="SimpleNumberCard"
    :title="title"
    :title-id="titleId"
    :date="date"
  >
    <p class="SimpleNumberDataContainer">
      <span class="SimpleNumber" v-text="number.toLocaleString()" />
      <span class="SimpleNumberUnit">{{ unit }}</span>
    </p>
    <slot />
  </data-view>
</template>

<i18n>{}</i18n>

<style lang="scss" scoped>
.SimpleNumberCard {
  >>> .DataView-Title {
    width: 100%;
  }
  .SimpleNumberDataContainer {
    text-align: center;
  }
  .SimpleNumber {
    font-size: 64px;
  }
  .SimpleNumberUnit {
    margin-left: 5px;
    font-size: 32px;
  }
}
</style>

<script>
import DataView from '@/components/DataView.vue'
export default {
  components: { DataView },
  props: {
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    number: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      default: '',
    },
  },
}
</script>
