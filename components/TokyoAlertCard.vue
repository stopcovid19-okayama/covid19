<template>
  <div class="TokyoAlert">
    <div class="TokyoAlert-heading">
      <h3 class="TokyoAlert-title">
        {{ $t('医療非常事態宣言') }}
      </h3>
      <div class="TokyoAlert-link">
        <active-tokyo-alert />
      </div>
    </div>
    <div class="TokyoAlert-description">
      <p v-if="['ja', 'ja-basic'].includes($i18n.locale)">
        {{ tokyoAlert.description['@ja'] }}
      </p>
      <p v-else>{{ tokyoAlert.description['@en'] }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ActiveTokyoAlert from '@/components/ActiveTokyoAlert.vue'
import tokyoAlert from '@/data/tokyo_alert.json'

export default Vue.extend({
  components: {
    ActiveTokyoAlert,
  },
  data() {
    return {
      tokyoAlert,
    }
  },
})
</script>

<style lang="scss">
.TokyoAlert {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .TokyoAlert-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .TokyoAlert-title {
      display: flex;
      align-items: center;
      padding: 12px;
      color: $gray-2;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }

    .TokyoAlert-link {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
      padding-left: 12px;

      @include lessThan($medium) {
        justify-content: flex-start;
      }
    }
  }

  .TokyoAlert-description {
    padding: 12px;

    @include font-size(14);
  }
}
</style>
