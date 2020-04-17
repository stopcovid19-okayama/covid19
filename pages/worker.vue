<template>
  <div class="Worker">
    <page-header class="mb-3">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </page-header>
    <static-card>
      <h3>
        <a
          href="https://www.pref.okayama.jp/page/331085.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('危機対策資金の取扱について') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染症の影響を受ける中小企業者の資金繰り支援として、信用保証制度の特例措置であるセーフティネット保証４号が発動されたので、危機対策資金の取扱いを開始します。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <a
          href="https://www.mhlw.go.jp/stf/newpage_10059.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('小学校休業等対応助成金の創設について') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '厚生労働省では、今般の新型コロナウイルス感染症に係る小学校等の臨時休業等により影響を受ける労働者を支援するため、労働者を有給で休ませる企業に対し助成する仕組みを設けることとしています。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <a
          href="http://acsa.jp/htm/news/2020022803.htm"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('ベビーシッター派遣事業の取扱いについて') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染症対策のため小学校等の臨時休業が行われること等を受け、ベビーシッター派遣事業の令和元年度の取扱いにつきまして、内閣府より通知がありましたのでお知らせをいたします。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <a
          href="https://www.mhlw.go.jp/stf/newpage_10037.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{
            $t('時間外労働等改善助成金の特例的なコースの申請受付開始について')
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '「新型コロナウイルス感染症対策のためのテレワークコース」「職場意識改善特例コース」について、申請の受付を開始しましたので、お知らせいたします。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <a
          href="https://jsite.mhlw.go.jp/okayama-roudoukyoku/hourei_seido_tetsuzuki/kakushu_joseikin/tetsuzuki/_120417_00004.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('雇用調整助成金の相談窓口について (岡山労働局)') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '県内の各公共職業安定所（ハローワーク）に新型コロナウイルス感染症の影響に伴う雇用調整助成金の相談窓口を開設しました。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <a
          href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00007.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('新型コロナウイルスに関するQ&A (企業の方向け)') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '労働者を休ませる場合の措置や、テレワークや時差出勤など感染防止に向けた柔軟な働き方などについてはこちらをご覧ください。'
          )
        }}
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'
/*
import ExternalLink from '@/components/ExternalLink.vue'
*/

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard /*,
    ExternalLink
    */
  },
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string
    }
  }
})
</script>
