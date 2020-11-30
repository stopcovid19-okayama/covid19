<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施件数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-bar-chart-inspections'"
      :chart-data="patientsGraph"
      :date="InspectionsSummary.date"
      :unit="$t('件.tested')"
      url="http://www.okayama-opendata.jp/opendata/ga120PreAction.action?keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761"
    >
      <template v-slot:description>
        <b>{{ $t('※岡山県環境保健センターの実施分のみ計上しています') }}</b>
        <br />
        {{ $t('※同一の対象者について複数の検体を検査する場合があります') }}
      </template>
      <!-- 件.tested = 検査数 -->
      <template v-slot:additionalDescription>
        <!--
        {{ $t('※同一の対象者について複数の検体を検査する場合がある') }}
        <span>{{ $t('（注）') }}</span>
        <ul>
          <li>
            {{
              $t(
                '検体採取日を基準とする。ただし、一部検査結果判明日に基づくものを含む'
              )
            }}
          </li>
          <li>
            {{ $t('同一の対象者について複数の検体を検査する場合がある') }}
          </li>
          <li>
            {{ $t('5月13日以降は、PCR検査に加え、抗原検査の件数を含む') }}
          </li>
          <li>
            {{
              $t(
                '速報値として公開するものであり、後日確定データとして修正される場合がある'
              )
            }}
          </li>
        </ul>
        -->
      </template>
    </time-bar-chart>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import InspectionsSummary from '@/data/inspections_summary.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'
// import Data from '@/data/data.json'
// import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'
dayjs.extend(duration)

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 検査実施日別状況
    const patientsGraph = formatGraph(InspectionsSummary.data)

    return {
      patientsGraph,
      InspectionsSummary
    }
  }
}
</script>
