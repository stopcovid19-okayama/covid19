<template>
  <div class="About">
    <h2 class="About-Heading">
      {{ $t('当サイトについて') }}
    </h2>
    <TextCard>
      {{
        $t(
          '当サイトは岡山県内の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために作成されました。'
        )
      }}<br />
      {{
        $t(
          '運営・開発は以下の学生エンジニアによってボランティアで行われています。'
        )
      }}<br />
      <br />
      ・藤原出帆 (
      <a href="//twitter.com/fujiwaraizuho" target="_blank">
        {{ $t('@fujiwaraizuho') }}
      </a>
      )
      <br />
      ・ルサカ (
      <a href="//twitter.com/Luscaca_" target="_blank">
        {{ $t('@Luscaca_') }}
      </a>
      )
      <br /><br />
      複製・改変が許されたオープンソースライセンスで公開されている、
      <a href="//stopcovid19.metro.tokyo.lg.jp/" target="_blank">
        {{ $t('東京都公式新型コロナウイルス対策サイト') }}
      </a>
      の
      <a href="//github.com/tokyo-metropolitan-gov/covid19" target="_blank">
        {{ $t('仕組み') }}
      </a>
      を利用しています
      <br />
      <br />
      {{
        $t(
          '岡山県による公式情報と客観的な数値をわかりやすく伝えることで、岡山県にお住まいの方や、岡山県内に拠点を持つ企業の方、岡山県を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('ブラウザ環境について')">
      {{ $t('当サイトは以下の環境でご覧いただくことを推奨いたします。') }}<br />
      <ul class="About-Browser-List">
        <li>{{ $t('Microsoft Edge 最新版') }}</li>
        <li>{{ $t('Mozilla Firefox 最新版') }}</li>
        <li>{{ $t('Google Chrome 最新版（Windows 10以上）') }}</li>
        <li>{{ $t('Apple Safari (macOS, iOS) 最新版') }}</li>
        <li>{{ $t('Opera Software ASA Opera 最新版') }}</li>
      </ul>
      {{
        $t(
          '※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('当サイトへのリンクについて')">
      {{ $t('当サイトへのリンクは自由です。') }}
    </TextCard>
    <TextCard :title="$t('JavaScriptについて')">
      {{ $t('当サイトではJavaScriptを使用しております。') }}<br />
      {{
        $t(
          'JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。'
        )
      }}<br />
      {{
        $t(
          '当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('クッキー (Cookie) について')">
      {{ $t('当サイトの一部ではクッキーを使用しています。') }}<br />
      {{
        $t(
          'クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。'
        )
      }}<br />
      <br />
      {{
        $t(
          'ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。'
        )
      }}<br />
      <br />
      {{
        $t(
          'ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('Google Analyticsの利用について')">
      {{
        $t(
          '当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。'
        )
      }}<br />
      {{
        $t(
          'Google Analyticsは、当サイトが発行するクッキー (Cookie) を利用して、個人を特定する情報を含まずにWebサイトの利用データ（アクセス状況、トラフィック、閲覧環境など）を収集しております。クッキー (Cookie) の利用に関してはGoogleのプライバシーポリシーと規約に基づいております。'
        )
      }}<br />
      {{
        $t(
          '取得したデータは Webサイト利用状況の分析、サイト運営者へのレポートの作成、その他のサービスの提供に関わる目的に限り、これを使用します。'
        )
      }}<br />
      {{
        $t(
          'Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。'
        )
      }}<br />
      <ul>
        <li>
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Google Analytics利用規約') }}
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/privacy?hl=ja"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Googleのプライバシーポリシー') }}
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Google Analyticsに関する詳細情報') }}
          </a>
        </li>
      </ul>
    </TextCard>
    <TextCard :title="$t('免責事項')">
      {{
        $t(
          '当サイトに掲載されている情報の正確性については万全を期していますが、岡山県やサイト運営者は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。'
        )
      }}<br />
      <br />
      {{
        $t(
          'また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。'
        )
      }}<br />
      <br />
      {{
        $t(
          '当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('お問い合わせ先')">
      {{ $t('岡山県 新型コロナウイルス感染症 対策サイト 運営者代表') }}<br />
      {{ $t('メール') }}:
      <a href="mail:contact@fujishan.jp">contact@fujishan.jp</a>
    </TextCard>
  </div>
</template>

<i18n src="./about.i18n.json"></i18n>

<script lang="ts">
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  },
  head() {
    return {
      title: '当サイトについて'
    }
  }
}
</script>

<style lang="scss">
.About {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  & &-Browser-List {
    // セレクタ指定が&-Browser-List のみだと
    // .v-application ul の設定が勝ってしまい padding-left が24px となってしまうため
    // このようなセレクタ指定としています
    list-style: none;
    padding: 12px 0;
  }
}
</style>
