<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('治療中患者数の変化状況')"
      :title-id="'changes-in-number-of-hospitalized-patients'"
      :chart-id="'time-bar-chart-changes-patients'"
      :chart-data="changesPatientsGraph"
      :date="currentPatients.date"
      :unit="$t('人')"
      :url="'http://www.okayama-opendata.jp/opendata/ga130Action.action?resourceName=%E6%82%A3%E8%80%85%E7%99%BA%E7%94%9F%E7%8A%B6%E6%B3%81&keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&title=%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%84%9F%E6%9F%93%E7%97%87%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%88%E5%B2%A1%E5%B1%B1%E7%9C%8C%EF%BC%89&isParam=1&action=clickLnkResourceNameList&resourceId=fa331257-8914-4a2e-b9c3-851d6ff77cb1&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761&checkFieldFormat=CSV'"
      :default-data-kind="'cumulative'"
    >
      <template v-slot:description>
        <ul class="ListStyleNone">
          <li>
            {{
              $t(
                '（注）治療中患者数とは、陽性患者数から退院者数と死亡者数を除いた人数を指す'
              )
            }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
  </v-col>
</template>

<script>
import TimeBarChart from '@/components/TimeBarChart.vue'
import currentPatients from '@/data/current_patients.json'
import formatGraph from '@/utils/formatGraph'
export default {
  components: {
    TimeBarChart,
  },
  data() {
    // 治療中患者数の変化状況グラフ
    const changesPatientsGraph = formatGraph(currentPatients.data)
    const data = {
      currentPatients,
      changesPatientsGraph,
    }
    return data
  },
}
</script>
