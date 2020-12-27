<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/sort -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

// 検査陽性者の状況
const ConfirmedCasesDetailsCard = () =>
  import('@/components/cards/ConfirmedCasesDetailsCard.vue')
// 検査陽性者の状況
const ChangesPatientsNumberCard = () =>
  import('@/components/cards/ChangesPatientsNumberCard.vue')
// 新規陽性者数
const ConfirmedCasesNumberCard = () =>
  import('@/components/cards/ConfirmedCasesNumberCard.vue')
// 陽性患者の属性
const ConfirmedCasesAttributesCard = () =>
  import('@/components/cards/ConfirmedCasesAttributesCard.vue')
// 検査実施人数
const TestedNumberCard = () => import('@/components/cards/TestedNumberCard.vue')
// 帰国者・接触者相談センター相談件数
const MonitoringConsultationDeskReportsNumberCard = () =>
  import('@/components/cards/MonitoringConsultationDeskReportsNumberCard.vue')
// 新型コロナ受診相談窓口相談件数
const TelephoneAdvisoryReportsNumberCard = () =>
  import('@/components/cards/TelephoneAdvisoryReportsNumberCard.vue')

export default Vue.extend({
  data() {
    return {
      rows: [
        [ConfirmedCasesDetailsCard, ConfirmedCasesNumberCard],
        [ConfirmedCasesAttributesCard, TestedNumberCard],
        [
          MonitoringConsultationDeskReportsNumberCard,
          TelephoneAdvisoryReportsNumberCard,
        ],
      ],
    }
  },
})
</script>
