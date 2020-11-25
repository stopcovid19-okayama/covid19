<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('検査陽性者の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="updatedAt"
    >
      <template v-slot:description>
        <ul class="ListStyleNone">
          <li>
            <b>
              {{
                $t(
                  '※検査実施件数と陽性者数以外のデータは、毎週木曜日に更新しています'
                )
              }}
            </b>
          </li>
          <li>
            {{
              $t(
                '※退院等の把握には一定の期間を要しており、確認次第数値を更新しています'
              )
            }}
          </li>
        </ul>
      </template>
      <confirmed-cases-details-table
        :aria-label="$t('検査陽性者の状況')"
        v-bind="confirmedCases"
      />
    </data-view>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import MainSummary from '@/data/main_summary.json'
// import Patients from '@/data/patients.json'
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import DataView from '@/components/DataView.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'

export default {
  components: {
    DataView,
    ConfirmedCasesDetailsTable
  },
  data() {
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(MainSummary)

    const updatedAt = dayjs(MainSummary.last_update).format('YYYY/MM/DD HH:mm')

    return {
      Data,
      confirmedCases,
      updatedAt
    }
  }
}
</script>
