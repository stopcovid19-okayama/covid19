<template>
  <div class="Parent">
    <page-header class="mb-3">
      {{ $t('新型コロナウイルス感染症対応についてのお願い') }}
    </page-header>
    <static-card>
      <h3>{{ $t('感染予防・健康管理') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。'
            )
          }}
        </li>
        <li>
          {{ $t('手洗い、咳エチケット等により、感染予防に努めてください。') }}
        </li>
        <li>
          {{
            $t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('感染症を疑う場合の対応') }}</h3>
      <ul>
        <li>{{ $t('各保健所にご相談ください') }}</li>
        <li>
          {{ $t('各保健所の電話番号について') }}
          <br />
          <external-link
            url="https://www.pref.okayama.jp/page/644784.html"
            :icon-size="16"
            >{{ $t('「新型コロナウイルス感染症にかかる相談窓口について」') }}
          </external-link>
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('その他') }}</h3>
      <p>{{ $t('詳細は、各学校からのお知らせ等をご確認ください。') }}</p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import ExternalLink from '@/components/ExternalLink.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    ExternalLink
  },
  head(): MetaInfo {
    return {
      title: this.$t('お子様をお持ちの皆様へ') as string
    }
  }
})
</script>
