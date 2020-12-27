<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-table
        :title="$t('陽性者の属性')"
        :title-id="'attributes-of-confirmed-cases'"
        :table-data="patientsTable"
        :date="date"
        :info="sumInfoOfPatients"
        :url="'http://www.okayama-opendata.jp/opendata/ga130Action.action?resourceName=%E6%84%9F%E6%9F%93%E8%80%85%E8%A9%B3%E7%B4%B0%E6%83%85%E5%A0%B1&keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&title=%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%84%9F%E6%9F%93%E7%97%87%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%88%E5%B2%A1%E5%B1%B1%E7%9C%8C%EF%BC%89&isParam=1&action=clickLnkResourceNameList&resourceId=c6503ebc-b2e9-414c-aae7-7374f4801e21&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761&checkFieldFormat=CSV'"
        :loaded="dataMargin >= 0"
        :error="$fetchState.error"
        :data-length="dataLength"
        @on-change-items-per-page="onChangeItemsPerPage"
        @on-change-page="onChangePage"
      >
        <template v-slot:tableBody="{ items, headers }">
          <tbody>
            <tr v-for="(item, i) in items" :key="i">
              <th scope="row" class="text-start DataTable-cell">
                {{ translateDate(item['公表日']) }}
              </th>
              <td
                v-for="(header, j) in headers.slice(1)"
                :key="j"
                :class="`text-${header.align || 'start'} DataTable-cell`"
              >
                <template v-if="header.type === 'date'">
                  {{ translateDate(item[header.value]) }}
                </template>
                <template v-else-if="header.type === 'age'">
                  {{ translateAge(item[header.value]) }}
                </template>
                <template v-else>
                  {{ translateWord(item[header.value]) }}
                </template>
              </td>
            </tr>
          </tbody>
        </template>
        <template v-slot:additionalDescription> ※死亡退院を含みます </template>
      </data-table>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import DataTable from '@/components/DataTable.vue'
import PatientSummary from '@/data/patients_summary.json'
import { getDayjsObject } from '@/utils/formatDate'
import formatGraph from '@/utils/formatGraph'
import { DataType, formatTable, TableDateType } from '@/utils/formatTable'

interface MetaData {
  endCursor: string
  updated: string
}
type Data = {
  dataLength: number
  sumInfoOfPatients: {
    lText: string
    sText: VueI18n.TranslateResult
    unit: VueI18n.TranslateResult
  }
  date: string
  page: number
  itemsPerPage: 15 | 30 | 50 | 100 | 200 | 300 | 500 | 1000
  endCursor: string
  patientsData: DataType[]
}
type Methods = {
  fetchOpenAPI: () => Promise<{ patientsData: DataType; metaData: MetaData }>
  fetchIfNoCache: () => void
  onChangeItemsPerPage: (itemsPerPage: Data['itemsPerPage']) => void
  onChangePage: (page: number) => void
  translateWord: (word: string) => string | VueI18n.TranslateResult
  translateDate: (date: string) => string | VueI18n.TranslateResult
  translateAge: (age: string) => VueI18n.TranslateResult
}
type Computed = {
  patientsTable: TableDateType
  dataMargin: number
}
type Props = {}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  components: { DataTable },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(PatientSummary.data)
    const lastData = patientsGraph[patientsGraph.length - 1]
    const lastDay = this.$d(
      getDayjsObject(lastData.label).toDate(),
      'dateWithoutYear'
    )
    const dataLength = lastData.cumulative
    const sumInfoOfPatients = {
      lText: dataLength.toLocaleString(),
      sText: this.$t('{date}の累計', { date: lastDay }),
      unit: this.$t('人'),
    }

    return {
      dataLength,
      sumInfoOfPatients,
      date: '',
      page: 1,
      itemsPerPage: 15,
      endCursor: '',
      patientsData: [],
    }
  },
  computed: {
    patientsTable() {
      const end = this.page * this.itemsPerPage
      const start = end - this.itemsPerPage
      const currentPageData = this.patientsData.slice(start, end)
      return formatTable(currentPageData)
    },
    dataMargin() {
      return this.patientsData.length - this.page * this.itemsPerPage
    },
  },
  async fetch() {
    const { patientsData, metaData } = await this.fetchOpenAPI()
    this.patientsData = this.patientsData.concat(patientsData)
    this.endCursor = metaData.endCursor
    this.date = metaData.updated
    this.fetchIfNoCache()
  },
  fetchOnServer: false, // i18nによる日付の変換ができないのでサーバーでは無効化
  methods: {
    async fetchOpenAPI() {
      const endpoint = 'https://covid19-scraping-api.vercel.app'
      const url =
        `${endpoint}/v1/Covid19Patient?limit=${this.itemsPerPage}` +
        (this.endCursor ? `&cursor=${encodeURIComponent(this.endCursor)}` : '')

      return await fetch(url)
        .then((response) => response.json())
        .then((data) => ({ patientsData: data[0], metaData: data[1] }))
        .catch((error) => {
          throw new Error(error.toString())
        })
    },
    fetchIfNoCache() {
      // メモリ上に次ページのデータがなければ先読みしてページネーション時の待ち時間を減らす
      if (this.dataMargin <= 0) setTimeout(() => this.$fetch(), 0)
    },
    onChangeItemsPerPage(itemsPerPage) {
      this.itemsPerPage = itemsPerPage
      this.endCursor = ''
      this.patientsData = []
      this.$fetch()
    },
    onChangePage(page) {
      this.page = page
      this.fetchIfNoCache()
    },
    translateDate(date) {
      const day = dayjs(date)
      if (!day.isValid()) return date
      return this.$d(day.toDate(), 'dateWithoutYear')
    },
    translateAge(_age) {
      const [age, dai] = _age.split(/(代)$/, 2)
      return dai ? this.$t('{age}代', { age }) : this.$t(_age)
    },
    translateWord(word) {
      // 文字列が `null` or 以下の記号だった場合は翻訳しない
      // 全角のハイフン, 半角のハイフン, 全角のダッシュ, 全角ハイフンマイナス
      const notTranslateWords = ['-', '‐', '―', '－', null]
      return notTranslateWords.includes(word) ? word : this.$t(word)
    },
  },
}
export default options
</script>

<style lang="scss" scoped>
.DataTable-cell {
  white-space: nowrap;
}
</style>
