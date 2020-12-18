<template>
  <v-col cols="12" md="6" class="DataCard">
    <monitoring-consultation-desk-report-chart
      :title="$t('受診相談窓口への相談件数')"
      title-id="monitoring-number-of-reports-to-covid19-consultation-desk"
      chart-id="monitoring-consultation-desk-report-chart"
      :chart-data="chartData"
      :date="date"
      :labels="labels"
      :data-labels="dataLabels"
      :unit="$t('件.reports')"
      url="http://www.okayama-opendata.jp/opendata/ga120PreAction.action?keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761"
    >
      <template v-slot:additionalDescription>
        <!--
        {{
          $t(
            '※曜日などによる数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去７日間の移動平均値を折れ線グラフで示す'
          )
        }}
        <span>{{ $t('（注）') }}</span>
        <ul>
          <li>
            {{
              $t(
                '曜日などによる数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去７日間の移動平均値を折れ線グラフで示す（例えば、5月7日の移動平均値は、5月1日から5月7日までの実績値を平均したもの）'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '新型コロナ受診相談窓口 （帰国者・接触者電話相談センター）を開設した2月7日から作成'
              )
            }}
          </li>
        </ul>
        -->
      </template>
    </monitoring-consultation-desk-report-chart>
  </v-col>
</template>

<script>
import MonitoringConsultationDeskReportChart from '@/components/MonitoringConsultationDeskReportChart.vue'
import Data from '@/data/querents.json'

export default {
  components: {
    MonitoringConsultationDeskReportChart
  },
  data() {
    const [
      consulationReportsCount,
      sevendayMoveAverages,
      labels
    ] = Data.data.reduce(
      (res, data) => {
        res[0].push(data['小計'])
        res[1].push(data['７日間平均'])
        res[2].push(data['日付'])
        return res
      },
      [[], [], []]
    )
    const chartData = [consulationReportsCount, sevendayMoveAverages]
    const dataLabels = [this.$t('相談件数'), this.$t('７日間移動平均')]
    const date = Data.date

    return {
      chartData,
      date,
      labels,
      dataLabels
    }
  }
}
</script>
