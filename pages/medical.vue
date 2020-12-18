<template>
  <div class="Medical">
    <div class="Header mb-3">
      <page-header :icon="headerItem.icon">
        {{ headerItem.title }}
      </page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }} </span>
        <time :datetime="updatedAt">{{ MedicalSystem.date }}</time>
      </div>
      <div
        v-show="!['ja', 'ja-basic'].includes($i18n.locale)"
        class="Annotation"
      >
        <span>{{ $t('注釈') }} </span>
      </div>
    </div>
    <whats-new class="mb-4" :items="newsItems" />
    <static-info
      class="mb-4"
      :url="localePath('/flow')"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <v-row class="DataBlock">
      <medical-system-bed-number-card />
      <medical-system-stay-care-facility-number-card />
      <medical-system-ventilator-number-card />
      <medical-system-ecmo-number-card />
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import MedicalSystemBedNumberCard from '@/components/cards/MedicalSystemBedNumberCard.vue'
import MedicalSystemStayCareFacilityNumberCard from '@/components/cards/MedicalSystemStayCareFacilityNumberCard.vue'
import MedicalSystemVentilatorNumberCard from '@/components/cards/MedicalSystemVentilatorNumberCard.vue'
import MedicalSystemEcmoNumberCard from '@/components/cards/MedicalSystemEcmoNumberCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import MedicalSystem from '@/data/medical_system.json'
import News from '@/data/news.json'

import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  components: {
    PageHeader,
    WhatsNew,
    StaticInfo,
    MedicalSystemBedNumberCard,
    MedicalSystemStayCareFacilityNumberCard,
    MedicalSystemVentilatorNumberCard,
    MedicalSystemEcmoNumberCard
  },
  data() {
    const data = {
      MedicalSystem,
      headerItem: {
        icon: 'mdi-hospital',
        title: this.$t('医療体制整備状況')
      },
      newsItems: News.newsItems
    }
    return data
  },
  computed: {
    updatedAt() {
      return convertDatetimeToISO8601Format(this.$data.MedicalSystem.date)
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('医療体制整備状況') as string
    }
  }
})
</script>

<style lang="scss" scoped>
.Medical {
  .Header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @include lessThan($small) {
      flex-direction: column;
      align-items: baseline;
    }
  }

  .UpdatedAt {
    @include font-size(14);

    color: $gray-3;
    margin-bottom: 0.2rem;
  }

  .Annotation {
    @include font-size(12);

    color: $gray-3;
    @include largerThan($small) {
      margin: 0 0 0 auto;
    }
  }

  .DataBlock {
    margin: 20px -8px;

    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }

      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
