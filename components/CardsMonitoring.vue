<template>
  <div>
    <card-row class="DataBlock">
      <!-- 検査陽性者の状況 -->
      <confirmed-cases-details-card />
      <!-- 新規患者に関する報告件数の推移 -->
      <confirmed-cases-number-card />
      <!-- 陽性患者の属性 -->
      <confirmed-cases-attributes-card />
      <!-- 新規陽性者数 -->
      <monitoring-confirmed-cases-number-card />
      <!-- 検査実施件数 -->
      <tested-number-card />
      <!-- 陽性率 -->
      <positive-rate-card />
      <!-- 新型コロナ受診相談窓口相談件数 -->
      <monitoring-consultation-desk-reports-number-card />
      <!-- 新型コロナコールセンター相談件数 -->
      <telephone-advisory-reports-number-card />
    </card-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CardRow from '@/components/cards/CardRow.vue'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import MonitoringConfirmedCasesNumberCard from '@/components/cards/MonitoringConfirmedCasesNumberCard.vue'
import PositiveRateCard from '@/components/cards/PositiveRateCard.vue'
// import SevereCaseCard from '@/components/cards/SevereCaseCard.vue'
// import UntrackedRateCard from '@/components/cards/UntrackedRateCard.vue'
// import HospitalizedNumberCard from '@/components/cards/HospitalizedNumberCard.vue'
// import MonitoringItemsOverviewCard from '@/components/cards/MonitoringItemsOverviewCard.vue'
// import ConsultationAboutFeverNumberCard from '@/components/cards/ConsultationAboutFeverNumberCard.vue'
// import TokyoRulesApplicationNumberCard from '@/components/cards/TokyoRulesApplicationNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import MonitoringConsultationDeskReportsNumberCard from '@/components/cards/MonitoringConsultationDeskReportsNumberCard.vue'

export default Vue.extend({
  components: {
    CardRow,
    MonitoringConfirmedCasesNumberCard,
    // UntrackedRateCard,
    // SevereCaseCard,
    PositiveRateCard,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    // HospitalizedNumberCard,
    // ConsultationAboutFeverNumberCard,
    // TokyoRulesApplicationNumberCard,
    // MonitoringItemsOverviewCard
    ConfirmedCasesAttributesCard,
    TestedNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    MonitoringConsultationDeskReportsNumberCard
  }
})
</script>

<style lang="scss" scoped>
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
.AttentionNote {
  margin: 10px 0;
  padding: 12px;
  background-color: $emergency;
  border-radius: 4px;
  color: $gray-2;
  @include font-size(12);

  p {
    margin: 0;
  }
}
</style>
