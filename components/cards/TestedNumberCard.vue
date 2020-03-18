<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-bar-chart-inspections'"
      :chart-data="contractsGraph"
      :date="Data.inspections_summary.date"
      comment=""
      :unit="$t('件.tested')"
      :url="'https://www.pref.okayama.jp/page/645925.html#kennaijoukyou'"
    />
    <!-- 件.tested = 検査数 -->
  </v-col>
</template>

<i18n>
{
  "ja": {
    "検査実施数": "検査実施数",
    "都内": "都内",
    "都内発生（疑い例・接触者調査）": "都内発生（疑い例・接触者調査）",
    "その他（チャーター便・クルーズ船）": "その他（チャーター便・クルーズ船）",
    "件": {
      "tested": "件"
    }
  },
  "en": {
    "検査実施数": "Number of tests conducted",
    "都内発生（疑い例・接触者調査）": "Emerged in Tokyo (Suspected cases or contactees)",
    "その他（チャーター便・クルーズ船）": "Others (Returnees or Cruise ship passengers)",
    "件": {
      "tested": "cases"
    }
  },
  "zh-cn": {
    "検査実施数": "送检件数",
    "都内発生（疑い例・接触者調査）": "东京都案例（疑似感染、接触者调查）",
    "その他（チャーター便・クルーズ船）": "其它（包机、游轮）",
    "件": {
      "tested": "件"
    }
  },
  "zh-tw": {
    "検査実施数": "送檢件數",
    "都内発生（疑い例・接触者調査）": "東京都案例（疑似感染、接觸者調查）",
    "その他（チャーター便・クルーズ船）": "其它（包機、遊輪）",
    "件": {
      "tested": "件"
    }
  },
  "ko": {
    "検査実施数": "검사실시수",
    "都内発生（疑い例・接触者調査）": "도쿄 지역사회 발생 경우（의심환자, 접촉자）",
    "その他（チャーター便・クルーズ船）": "기타（귀국자 또는 크루즈 승객 경우）",
    "件": {
      "tested": "건"
    }
  },
  "ja-basic": {
    "検査実施数": "けんさした かず",
    "都内発生（疑い例・接触者調査）": "とうきょうとで びょうき かもしれない ひと",
    "その他（チャーター便・クルーズ船）": "そのほか",
    "件": {
      "tested": "けん"
    }
  }
}
</i18n>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const contractsGraph = formatGraph(Data.inspections_summary.data)

    const data = {
      Data,
      contractsGraph
    }

    return data
  }
}
</script>
