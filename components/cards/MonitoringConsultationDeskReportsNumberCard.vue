<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-mixed-chart
        :title="$t('帰国者・接触者相談センター相談件数')"
        title-id="monitoring-number-of-reports-to-covid19-consultation-desk"
        chart-id="monitoring-consultation-desk-report-chart"
        :chart-data="querentsGraph"
        :date="date"
        :data-labels="labels"
        :unit="$t('件.reports')"
        url="http://www.okayama-opendata.jp/opendata/ga130Action.action?resourceName=%E5%B8%B0%E5%9B%BD%E8%80%85%E3%83%BB%E6%8E%A5%E8%A7%A6%E8%80%85%E7%9B%B8%E8%AB%87%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E7%9B%B8%E8%AB%87%E4%BB%B6%E6%95%B0&keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&title=%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%84%9F%E6%9F%93%E7%97%87%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%88%E5%B2%A1%E5%B1%B1%E7%9C%8C%EF%BC%89&isParam=1&action=clickLnkResourceNameList&resourceId=f38ae73f-73c1-4f34-8174-1b188c77c713&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761&checkFieldFormat=CSV"
      />
    </client-only>
  </v-col>
</template>

<script>
import TimeBarMixedChart from '@/components/TimeBarMixedChart.vue'
import Querents from '@/data/querents.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarMixedChart,
  },
  data() {
    const weeklyAverageTotal = Querents.data.map((d) => d['７日間平均'])

    // 受診相談窓口への相談件数グラフ
    const querentsGraph = [formatGraph(Querents.data), weeklyAverageTotal]
    const date = Querents.date

    const labels = [this.$t('相談件数'), this.$t('７日間移動平均')]

    return {
      querentsGraph,
      date,
      labels,
    }
  },
}
</script>
