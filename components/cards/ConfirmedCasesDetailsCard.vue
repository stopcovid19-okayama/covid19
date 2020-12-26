<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-view
        :title="$t('検査陽性者の状況')"
        :title-id="'details-of-confirmed-cases'"
        :date="date"
      >
        <template v-slot:description>
          <b
            >※検査実施人数と陽性者数以外のデータは、毎週木曜日に更新しています</b
          >
          <br />
          ※退院等の把握には一定の期間を要しており、確認次第数値を更新しています
        </template>
        <confirmed-cases-details-table
          :aria-label="$t('検査陽性者の状況')"
          v-bind="confirmedCases"
        />
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'
import DataView from '@/components/DataView.vue'
import MainSummary from '@/data/main_summary.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'

export default {
  components: {
    DataView,
    ConfirmedCasesDetailsTable,
  },
  data() {
    const mainSummary = MainSummary
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(mainSummary)

    const date = dayjs(mainSummary.children[0].date).format('YYYY/MM/DD HH:mm')

    return {
      confirmedCases,
      date,
    }
  },
}
</script>

<style lang="scss" module>
.button {
  margin: 20px 0 0;
  color: $green-1 !important;
  &:hover {
    color: $white !important;
  }

  @include button-text('sm');
}
</style>
