<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施件数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-bar-chart-inspections'"
      :chart-data="patientsGraph"
      :date="InspectionsSummary.date"
      :unit="$t('件.tested')"
      :url="
        'http://www.okayama-opendata.jp/opendata/ga120PreAction.action?keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761'
      "
    >
      <!-- 件.tested = 検査数 -->
    </time-bar-chart>
  </v-col>
</template>

<script>
import InspectionsSummary from '@/data/inspections_summary.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 検査実施日別状況
    const patientsGraph = formatGraph(InspectionsSummary.data)

    const data = {
      InspectionsSummary,
      patientsGraph
    }
    return data
  }
}
</script>
