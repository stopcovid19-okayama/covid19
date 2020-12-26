<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-mixed-chart
        :title="$t('新規陽性者数')"
        :title-id="'number-of-confirmed-cases'"
        :chart-id="'time-bar-chart-patients'"
        :chart-data="patientsGraph"
        :data-labels="labels"
        :date="date"
        :unit="$t('人')"
        :by-date="true"
        :url="'http://www.okayama-opendata.jp/opendata/ga130PreAction.action?resourceName=%E6%84%9F%E6%9F%93%E8%80%85%E6%95%B0&keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&title=%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%84%9F%E6%9F%93%E7%97%87%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%88%E5%B2%A1%E5%B1%B1%E7%9C%8C%EF%BC%89&isParam=1&resourceId=0c728c2e-a366-421d-95df-86b6b5ad15fd&licenseTitle=%E3%82%AF%E3%83%AA%E3%82%A8%E3%82%A4%E3%83%86%E3%82%A3%E3%83%96%E3%83%BB%E3%82%B3%E3%83%A2%E3%83%B3%E3%82%BA+%E8%A1%A8%E7%A4%BA&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761&checkFieldFormat=CSV'"
      />
    </client-only>
  </v-col>
</template>

<script>
import TimeBarMixedChart from '@/components/TimeBarMixedChart.vue'
import PatientsSummary from '@/data/patients_summary.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarMixedChart,
  },
  data() {
    const weeklyAverageTotal = PatientsSummary.data.map((d) => d['７日間平均'])
    // 感染者数グラフ
    const patientsGraph = [
      formatGraph(PatientsSummary.data),
      weeklyAverageTotal,
    ]
    const date = PatientsSummary.date

    const labels = [this.$t('新規陽性者数'), this.$t('７日間移動平均')]

    return {
      patientsGraph,
      date,
      labels,
    }
  },
}
</script>

<style lang="scss" scoped>
.Description-Link {
  text-decoration: none;
  @include button-text('sm');
}
.Description-ExternalLink {
  margin-bottom: 10px;
}
</style>
