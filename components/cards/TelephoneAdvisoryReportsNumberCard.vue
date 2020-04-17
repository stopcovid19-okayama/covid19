<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('新型コロナコールセンター相談件数')"
      :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
      :chart-id="'time-bar-chart-contacts'"
      :chart-data="contactsGraph"
      :date="Contacts.date"
      :unit="$t('件.reports')"
      :url="
        'http://www.okayama-opendata.jp/opendata/ga120PreAction.action?keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761'
      "
    />
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<script>
import Contacts from '@/data/contacts.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 相談件数
    const contactsGraph = formatGraph(Contacts.data)

    const data = {
      Contacts,
      contactsGraph
    }
    return data
  }
}
</script>
