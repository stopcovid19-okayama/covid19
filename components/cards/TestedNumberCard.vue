<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-mixed-chart
        :title="$t('検査実施人数')"
        :title-id="'number-of-tested'"
        :chart-id="'time-bar-chart-inspections'"
        :chart-data="inspectionsGraph"
        :date="date"
        :unit="$t('人')"
        :data-labels="labels"
        :url="'http://www.okayama-opendata.jp/opendata/ga130Action.action?resourceName=%EF%BC%B0%EF%BC%A3%EF%BC%B2%E6%A4%9C%E6%9F%BB%E5%AE%9F%E6%96%BD%E4%BA%BA%E6%95%B0&keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&title=%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%84%9F%E6%9F%93%E7%97%87%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%88%E5%B2%A1%E5%B1%B1%E7%9C%8C%EF%BC%89&isParam=1&action=clickLnkResourceNameList&resourceId=60ecd874-0f71-4d9f-9a8a-936fad9c99bc&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761&checkFieldFormat=CSV'"
      >
        <template v-slot:description>
          <b>{{ $t('※岡山県環境保健センターの実施分のみ計上しています') }}</b>
          <br />
          {{ $t('※同一の対象者について複数の検体を検査する場合があります') }}
        </template>
      </time-bar-mixed-chart>
    </client-only>
  </v-col>
</template>

<script>
import TimeBarMixedChart from '@/components/TimeBarMixedChart.vue'
import InspectionsSummary from '@/data/inspections_summary.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarMixedChart,
  },
  data() {
    const weeklyAverageTotal = InspectionsSummary.data.map(
      (d) => d['７日間平均']
    )
    // 検査実施人数グラフ
    const inspectionsGraph = [
      formatGraph(InspectionsSummary.data),
      weeklyAverageTotal,
    ]
    const date = InspectionsSummary.date

    const labels = [this.$t('検査実施人数'), this.$t('７日間移動平均')]

    return {
      inspectionsGraph,
      date,
      labels,
    }
  },
}
</script>
