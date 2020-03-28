<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施件数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-bar-chart-inspections'"
      :chart-data="patientsGraph"
      :date="Data.inspections_summary.date"
      :unit="$t('件.tested')"
    >
      <!-- 件.tested = 検査数 -->
    </time-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 検査実施日別状況
    const patientsGraph = formatGraph(Data.inspections_summary.data)

    const data = {
      Data,
      patientsGraph
    }
    return data
  }
}
</script>
