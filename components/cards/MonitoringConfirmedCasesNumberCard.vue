<template>
  <v-col cols="12" md="6" class="DataCard">
    <monitoring-confirmed-cases-chart
      title-id="monitoring-number-of-confirmed-cases"
      :info-titles="[$t('新規陽性者数')]"
      chart-id="monitoring-confirmed-cases-chart"
      :chart-data="chartData"
      :get-formatter="getFormatter"
      :date="date"
      :labels="labels"
      :data-labels="dataLabels"
      :table-labels="tableLabels"
      :unit="$t('人')"
      url="http://www.okayama-opendata.jp/opendata/ga120PreAction.action?keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761"
    >
      <template v-slot:additionalDescription>
        <ul class="ListStyleNone">
          <li>
            {{ $t('※チャーター機帰国者、クルーズ船乗客等は含まれていない') }}
          </li>
          <li>
            {{ $t('※曜日などによる数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去７日間の移動平均値を折れ線グラフで示す') }}
          </li>
        </ul>
      </template>
    </monitoring-confirmed-cases-chart>
  </v-col>
</template>

<script>
import MonitoringConfirmedCasesChart from '@/components/MonitoringConfirmedCasesChart.vue'
import Data from '@/data/daily_positive_detail.json' // TODO: change
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction
} from '@/utils/monitoringStatusValueFormatters'

export default {
  components: {
    MonitoringConfirmedCasesChart
  },
  data() {
    const [patientsCount, sevenDayMoveAverages, labels] = Data.data.reduce(
      (res, data) => {
        res[0].push(data.count)
        res[1].push(data.weekly_average_count)
        res[2].push(data.diagnosed_date)
        return res
      },
      [[], [], []]
    )
    const chartData = [patientsCount, sevenDayMoveAverages]
    const dataLabels = [this.$t('陽性者数'), this.$t('７日間移動平均')]
    const tableLabels = [this.$t('陽性者数'), this.$t('７日間移動平均')]
    const date = Data.date

    const getFormatter = columnIndex => {
      // モニタリング指標(1)新規陽性者数の7日間移動平均は小数点第1位まで表示する。
      if (columnIndex === 1) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }

    return {
      chartData,
      date,
      labels,
      dataLabels,
      tableLabels,
      getFormatter
    }
  }
}
</script>
