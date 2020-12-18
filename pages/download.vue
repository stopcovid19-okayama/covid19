<template>
  <div>
    <div :class="$style.title">
      <download-icon aria-hidden="true" />
      <page-header :class="$style.text">
        {{ $t('感染症予防フライヤーをご利用される皆様へ') }}
      </page-header>
    </div>
    <div :class="$style.container">
      <div class="row DataBlock">
        <div class="DataCard col-lg-6">
          <div :class="$style.flyerImage" class="mb-4">
            <img src="/download/flyer.jpg" />
          </div>
          <h3 :class="$style.licenseHeadingL">
            {{ $t('ライセンスについて') }}
          </h3>
          <p class="text-center">
            {{$t('このフライヤーの著作権は放棄しており、どなたでもご自由に利用することが可能です。')}}
            <a
              rel="license"
              href="https://creativecommons.org/publicdomain/zero/1.0/deed.ja"
            >
              <img
                src="https://licensebuttons.net/p/zero/1.0/88x31.png"
                style="border-style: none"
                alt="CC0"
              />
            </a>
          </p>
        </div>
        <div class="DataCard col-lg-6">
          <div :class="$style.downloadGroup">
            <h4 :class="$style.downloadText">
              {{ $t('ai データでダウンロードの方はこちら') }}
            </h4>
            <div class="DownloadButtonWrapper" :class="wrapperClass">
              <a
                :href="localePath('/download/flyer.ai')"
                class="DownloadButton"
              >
                <div class="DownloadButton-DownloadIcon">
                  <download-icon />
                </div>
                <span class="DownloadButton-Text">
                  {{ $t('ダウンロード') }}
                </span>
              </a>
            </div>
          </div>
          <div :class="$style.downloadGroup">
            <h4 :class="$style.downloadText">
              {{ $t('pdf データでダウンロードの方はこちら') }}
            </h4>
            <div class="DownloadButtonWrapper" :class="wrapperClass">
              <a
                :href="localePath('/download/flyer.pdf')"
                class="DownloadButton"
              >
                <div class="DownloadButton-DownloadIcon">
                  <download-icon />
                </div>
                <span class="DownloadButton-Text">
                  {{ $t('ダウンロード') }}
                </span>
              </a>
            </div>
          </div>
          <div :class="$style.downloadGroup">
            <h4 :class="$style.downloadText">
              {{ $t('大規模な掲載や配布（50枚～）をご希望の方はこちら') }}
            </h4>
            <div class="DownloadButtonWrapper" :class="wrapperClass">
              <a
                href="https://www.google.co.jp/"
                class="DownloadButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="DownloadButton-DownloadIcon">
                  <apply-icon />
                </div>
                <span class="DownloadButton-Text">
                  {{ $t('申し込みフォーム') }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <static-card>
      <h3 :class="$style.HeadingL" class="pb-4">
        {{ $t('エビデンスについて') }}
      </h3>
      <div>
        <p>
          {{
            $t(
              '新型コロナウイルス感染症予防フライヤーの作成にあたり、下記の専門家の方々にご協力をいただき情報に問題がないことを確認致しました。'
            )
          }}
        </p>
        <p>{{ $t('安心して配布・掲載頂けます。') }}</p>
        <ul>
          <li>
            {{
              $t(
                '岡山大学大学院医歯薬学総合研究科 疫学・衛生学分野 頼藤貴志先生'
              )
            }}
          </li>
        </ul>
      </div>
    </static-card>
    <!-- 公開タイミングの都合上一旦非表示
    <static-card>
      <h3 :class="$style.HeadingL" class="pb-4">
        {{ $t('協力団体様') }}
      </h3>
      <div class="row DataBlock">
        <div class="col-lg-4">
          <h4 :class="$style.cooperatorHeading">
            {{ $t('団体名/組織名') }}
          </h4>
          <span>{{ $t('掲載場所') }}</span>
          <p>{{ $t('その他コメント、URLなど') }}</p>
        </div>
        <div class="col-lg-4">
          <h4 :class="$style.cooperatorHeading">
            {{ $t('団体名/組織名') }}
          </h4>
          <span>{{ $t('掲載場所') }}</span>
          <p>{{ $t('その他コメント、URLなど') }}</p>
        </div>
        <div class="col-lg-4">
          <h4 :class="$style.cooperatorHeading">
            {{ $t('団体名/組織名') }}
          </h4>
          <span>{{ $t('掲載場所') }}</span>
          <p>{{ $t('その他コメント、URLなど') }}</p>
        </div>
      </div>
      <div :class="$style.container">
        <h4 class="pb-4">
          {{ $t('配布、掲載等してくださった団体様へ') }}
        </h4>
        <p class="pb-4">
          {{ $t('下記フォームより団体名等を入力していただき～～') }}
        </p>
        <div class="DownloadButtonWrapper" :class="wrapperClass">
          <a
            href="https://www.google.co.jp/"
            class="DownloadButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="DownloadButton-DownloadIcon">
              <apply-icon />
            </div>
            <span class="DownloadButton-Text">
              {{ $t('掲載フォーム') }}
            </span>
          </a>
        </div>
      </div>
    </static-card>
    -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import DownloadIcon from '@/static/download.svg'
import ApplyIcon from '@/static/apply.svg'

import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'
import AppLink from '@/components/AppLink.vue'

export default Vue.extend({
  components: {
    DownloadIcon,
    ApplyIcon,
    PageHeader,
    StaticCard,
    AppLink,
  },
  data() {
    const data = {}
    return data
  },
  computed: {},
  head(): MetaInfo {
    return {
      title: this.$t(
        '新型コロナウイルス感染症予防フライヤーのダウンロード'
      ) as string,
    }
  },
})
</script>

<style lang="scss" module>
/* stylelint-disable no-descending-specificity */

$fzSmall: 14;
$fzRegular: 16;
$fzMedium: 18;
$fzLarge: 20;
$fzHuge: 22;
$fzHeading: 20;
$fzHeadingL: 26;

$padding: 20;
$margin: 20;

.title {
  display: flex;
  align-items: center;
  margin-bottom: $margin * 1px;
  > svg {
    width: 30px;
    height: 30px;
    > path:not(:first-of-type) {
      fill: $gray-2;
    }
  }
  .text {
    margin-left: 8px;
  }
  .printerButton {
    margin: 0 0 0 auto;
  }
}
.container {
  background-color: $white;
  box-shadow: $shadow;
  border: 0.5px solid $gray-4 !important;
  border-radius: 4px;
  padding: $padding * 1px;
  line-height: 1.35;
  color: $gray-2;
  margin-bottom: 20px;
  page-break-after: always;
  @include font-size($fzRegular);

  ul {
    padding-left: 0; // override Vuetify style
  }
}
.conHeading {
  @include font-size($fzHeading);
}
.conHeadingQa {
  margin-bottom: 12px;
  @include font-size($fzHeading);
}
.download {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin-right: -12px;
  margin-left: -12px;
}
.flyerImage {
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
}
.licenseHeadingL {
  font-weight: bold;
  margin-bottom: 10px;
  color: $green-1;
  text-align: center;
  @include font-size($fzHeadingL);
}
.HeadingL {
  font-weight: bold;
  margin-bottom: 10px;
  color: $green-1 !important;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  @include font-size($fzHeadingL);
}
.licenseHeading {
  font-weight: bold;
  margin-bottom: 10px;
  @include font-size($fzHeading);
}
.cooperatorHeading {
  margin-bottom: 10px;
  border-bottom: 1px solid $green-1;
  @include font-size($fzHeading);
}
.downloadGroup {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.downloadText {
  margin-bottom: 20px;
}
.downloadImage {
  height: 160px;
  width: auto;
  overflow: hidden;
  box-sizing: border-box;

  svg {
    height: 160px;
    width: 100%;
  }
}
.qaHeading {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  @include font-size($fzHeading);
}
@media (max-width: 960px) {
  .priorityHigh {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
@media print {
  .priorityHigh {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>

<style lang="scss" scope>
@media print {
  .col-lg-6 {
    width: 50% !important;
  }
  .col-lg-8 {
    width: 66.6666666667% !important;
  }
  .col-lg-4 {
    width: 33.3333333333% !important;
  }
}
.v-expansion-panel-content {
  display: block;
}
.v-expansion-panel-header {
  font-size: 2rem;
}
.DownloadButtonWrapper a {
  text-decoration: none !important;
  color: $green-1 !important;
}
.DownloadButton {
  @include button-text('md');

  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;

  &:hover {
    color: $white !important;
    fill: $white !important;
  }

  &-DownloadIcon {
    margin: 6px;
    transform: scale(0.9);

    svg {
      width: auto;
    }
  }
}
</style>
