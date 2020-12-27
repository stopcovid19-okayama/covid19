<template>
  <div class="About">
    <page-header class="mb-3">
      {{ $t('当サイトについて') }}
    </page-header>
    <static-card>
      {{
        $t(
          '当サイトは岡山県内の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために作成されました。'
        )
      }}<br />
      {{ $t('運用・開発は有志によるボランティアで行われています。')
      }}<br /><br />
      <app-link
        to="https://github.com/stopcovid19-okayama/covid19/blob/development/CONTRIBUTORS.md"
      >
        {{ $t('貢献者一覧') }}
      </app-link>
      <br /><br />
      当サイトは、
      <app-link to="https://stopcovid19.metro.tokyo.lg.jp/">
        {{ $t('東京都公式新型コロナウイルス対策サイト') }}
      </app-link>
      の
      <app-link to="https://github.com/tokyo-metropolitan-gov/covid19">
        {{ $t('仕組み') }}
      </app-link>
      を利用しています
      <br />
      <br />
      {{
        $t(
          '岡山県から公開されたエビデンスのある情報と客観的な数値をわかりやすく伝えることで、岡山県にお住まいの方や、岡山県内に拠点を持つ企業の方、岡山県を訪れる方が現状を把握して適切な対策を取れるようにすることを目的としています。'
        )
      }}
    </static-card>
    <StaticCard>
      <h3>{{ $t('データについて') }}</h3>
      <p>
        {{ $t('当サイトは、1日に最大6回、データを更新しています。') }}<br />
        {{
          $t(
            '岡山県のデータが更新され次第の反映となりますので予めご了承ください。'
          )
        }}<br />
        {{
          $t('迅速かつ正確でわかりやすく伝えるためにご協力をお願いいたします。')
        }}
      </p>
      <br />
      <i18n
        path="当サイトで公表しているデータは、{catalogWebsite}より誰でも自由にダウンロードが可能です。"
      >
        <template v-slot:catalogWebsite>
          <app-link to="http://www.okayama-opendata.jp">
            {{ $t('岡山県オープンデータカタログサイト') }}
          </app-link>
        </template>
      </i18n>
    </StaticCard>
    <StaticCard>
      <h3>{{ $t('協力団体・企業について') }}</h3>
      <p>
        {{
          $t(
            '当サイトにおいて、様々な観点からご協力を頂いてる団体・企業を紹介させていただきます。(順不同)'
          )
        }}
      </p>
      <ul>
        <li>
          {{ $t('岡山大学大学院医歯薬学総合研究科 疫学・衛生学分野の先生方') }}
          :
          <app-link to="http://www.unit-gp.jp/eisei/wp/">
            {{ $t('サイト') }}
          </app-link>
        </li>
        <li>
          {{ $t('さくらインターネット株式会社様') }}
          :
          <app-link
            to="https://www.sakura.ad.jp/information/pressreleases/2020/03/23/1968203129/"
          >
            {{ $t('サイト') }}
          </app-link>
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>{{ $t('ブラウザ環境について') }}</h3>
      <p>
        {{ $t('当サイトは以下の環境でご覧いただくことを推奨いたします。') }}
      </p>
      <ul>
        <li>{{ $t('Microsoft Edge 最新版') }}</li>
        <li>{{ $t('Mozilla Firefox 最新版') }}</li>
        <li>
          {{ $t('Google Chrome 最新版（Windows 10以上, Android 8.0以上）') }}
        </li>
        <li>{{ $t('Safari 最新版（macOS, iOS）') }}</li>
        <li>{{ $t('Opera 最新版') }}</li>
      </ul>
      <p class="StaticCard-Note">
        <span>{{ $t('※') }}</span>
        <span>
          {{
            $t(
              '※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。'
            )
          }}
        </span>
      </p>
    </StaticCard>
    <static-card>
      <h3>{{ $t('当サイトへのリンクについて') }}</h3>
      <p>{{ $t('当サイトへのリンクは自由です。') }}</p>
    </static-card>
    <static-card>
      <h3>{{ $t('JavaScriptについて') }}</h3>
      <p>
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
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('クッキー (Cookie) について') }}</h3>
      <p>
        {{ $t('当サイトの一部ではクッキーを使用しています。') }}<br />
        {{
          $t(
            'クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。'
          )
        }}<br />
      </p>
      <p>
        {{
          $t(
            'ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('Google Analyticsの利用について') }}</h3>
      <p>
        {{
          $t(
            '当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'Google Analyticsでは、当サイトが発行するクッキー (Cookie) 等を利用して、Webサイトの利用データ（アクセス状況、トラフィック、閲覧環境、IPアドレスなど）を収集しております。クッキーの利用に関してはGoogleのプライバシーポリシーと規約に基づいております。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '取得したデータはWebサイト利用状況を分析しサービスの改善につなげるため、またはサイト運営者へのレポートを作成するため、その他のサービスの提供に関わる目的に限り、これを使用します。（サイト運営者へのレポートでは、クッキーはブラウザ単位で本サイトのユーザー数をカウントするため、IPアドレスはGoogle Analyticsの分析機能を通じてアクセス元の地域分布（国、州・都道府県、都市）を把握するために利用されています。）'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。'
          )
        }}
      </p>
      <ul>
        <li>
          <app-link
            :to="
              $t(
                'https://marketingplatform.google.com/about/analytics/terms/jp/'
              )
            "
          >
            {{ $t('Google Analytics利用規約') }}
          </app-link>
        </li>
        <li>
          <app-link :to="$t('https://policies.google.com/privacy?hl=ja')">
            {{ $t('Googleのプライバシーポリシー') }}
          </app-link>
        </li>
        <li>
          <app-link
            :to="
              $t('https://support.google.com/analytics/answer/6004245?hl=ja')
            "
          >
            {{ $t('Google Analyticsに関する詳細情報') }}
          </app-link>
        </li>
      </ul>
      <i18n
        tag="p"
        path="Google Analyticsによる情報送信を回避する場合は、Google がサポートする{addon}をご利用ください。"
      >
        <template v-slot:addon>
          <app-link :to="$t('https://tools.google.com/dlpage/gaoptout?hl=ja')">
            {{ $t('測定を無効にするブラウザ アドオン') }}
          </app-link>
        </template>
      </i18n>
    </static-card>
    <static-card>
      <h3>{{ $t('免責事項') }}</h3>
      <p>
        {{
          $t(
            '当サイトに掲載されている情報の正確性については万全を期していますが、岡山県やサイト運営者は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('ソースコードについて') }}</h3>
      <p>
        {{
          $t(
            '当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。'
          )
        }}
        <i18n path="詳しくは、{githubRepo}をご確認ください。">
          <template v-slot:githubRepo>
            <app-link to="https://github.com/stopcovid19-okayama/covid19">
              {{ $t('GitHub リポジトリ') }}
            </app-link>
          </template>
        </i18n>
      </p>
    </static-card>
    <StaticCard>
      <h3>{{ $t('ディスカッションについて') }}</h3>
      <p>
        {{ $t('Slackでディスカッションを行っています。') }}<br />
        <i18n
          path="サイトの制作・運用にご協力いただける方であれば誰でも参加可能です。{slack} からご参加ください。"
        >
          <template v-slot:slack>
            <app-link
              to="https://join.slack.com/t/okayama-stopcovid19/shared_invite/zt-d86r1ajq-ba1w0w71DGcX_fed6lufog"
            >
              {{ $t('ここ') }}
            </app-link>
          </template>
        </i18n>
      </p>
    </StaticCard>
    <StaticCard>
      <h3>{{ $t('お問い合わせ先') }}</h3>
      <i18n path="メール: {mail}">
        <a href="mailto:stopcovid19.okayama@gmail.com" place="mail">
          {{ $t('stopcovid19.okayama@gmail.com') }}
        </a>
      </i18n>
    </StaticCard>
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
      title: this.$t('当サイトについて') as string,
    }
  },
})
</script>
