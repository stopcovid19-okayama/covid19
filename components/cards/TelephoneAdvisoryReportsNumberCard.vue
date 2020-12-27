<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-mixed-chart
        :title="$t('新型コロナコールセンター相談件数')"
        title-id="telephone-advisory-reports-number"
        chart-id="telephone-advisory-reports-number"
        :chart-data="contactsGraph"
        :date="date"
        :data-labels="labels"
        :unit="$t('件.reports')"
        :url="'http://www.okayama-opendata.jp/opendata/ga130Action.action?resourceName=%E4%B8%80%E8%88%AC%E9%9B%BB%E8%A9%B1%E7%9B%B8%E8%AB%87%E4%BB%B6%E6%95%B0&keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&title=%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%84%9F%E6%9F%93%E7%97%87%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%88%E5%B2%A1%E5%B1%B1%E7%9C%8C%EF%BC%89&isParam=1&action=clickLnkResourceNameList&resourceId=b2dd8386-6cf5-4ece-a3e6-7d5c1a389d9f&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761&checkFieldFormat=CSV'"
      />
    </client-only>
  </v-col>
</template>

<script>
import TimeBarMixedChart from '@/components/TimeBarMixedChart.vue'
import Contacts from '@/data/contacts.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarMixedChart,
  },
  data() {
    const weeklyAverageTotal = Contacts.data.map((d) => d['７日間平均'])

    // 新型コロナコールセンター相談件数グラフ
    const contactsGraph = [formatGraph(Contacts.data), weeklyAverageTotal]
    const date = Contacts.date

    const labels = [this.$t('相談件数'), this.$t('７日間移動平均')]

    return {
      contactsGraph,
      date,
      labels,
    }
  },
}
</script>
