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
      <h3>{{ $t('教育費に不安がある') }}</h3>
      <p>
        {{
          $t(
            '家計が急変した場合に、奨学金の緊急採用や授業料の減免措置(対象: 県立高校生)、教育給付金の支給を行っています。'
          )
        }}
        <br />
        {{ $t('詳細は、') }}
        <app-link
          to="https://www.pref.okayama.jp/page/664377.html#kyoikuhi"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t('岡山県のHP') }}
        </app-link>
        {{ $t('をご確認ください') }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('学習に不安がある') }}</h3>
      <p>
        {{
          $t(
            '岡山県や文部科学省ではお子様の学びを支援するためのコンテンツポータルサイトを開設しています。'
          )
        }}
        <br />
        {{ $t('詳細は、') }}
        <app-link
          to="https://www.pref.okayama.jp/page/664377.html#gakusyuu"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t('岡山県のHP') }}
        </app-link>
        {{ $t('をご確認ください') }}
      </p>
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

import AppLink from '@/components/AppLink.vue'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('お子様をお持ちの皆様へ') as string,
    }
  },
})
</script>
