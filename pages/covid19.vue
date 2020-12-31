<template>
  <div>
    <div class="title">
      <covid-icon aria-hidden="true" />
      <page-header class="text">
        {{ $t('新型コロナウイルス感染症について') }}
      </page-header>
      <printer-button wrapper-class="printerButton" to="/print/covid19" />
    </div>
    <div class="container">
      <h3 class="conHeading">
        {{ $t('私たちにできる新型コロナウイルス感染予防') }}
      </h3>
      <div class="row DataBlock">
        <div class="DataCard col-lg-6">
          <div class="DataView v-card v-sheet theme--light priorityHigh">
            <div class="DataView-Inner">
              <h3 class="preventHeadingL">
                {{ $t('しっかり手を洗う') }}
              </h3>
              <p class="preventText">
                {{ $t('石けんを使い流水で20秒以上かけて洗いましょう') }}
              </p>
              <div class="preventImage">
                <prevent-icon-hand />
              </div>
            </div>
          </div>
        </div>
        <div class="DataCard col-lg-6">
          <div class="DataView v-card v-sheet theme--light priorityHigh">
            <div class="DataView-Inner">
              <h3 class="preventHeadingL">
                {{ $t('マスクを着用しよう') }}
              </h3>
              <p class="preventText">
                {{ $t('マスクの表面は触らないようにしましょう') }}
              </p>
              <div class="preventImage">
                <prevent-icon-mask />
              </div>
            </div>
          </div>
        </div>
        <div class="DataCard col-lg-4 col-md-6">
          <div class="DataView v-card v-sheet theme--light">
            <div class="DataView-Inner">
              <h3 class="preventHeadingL">{{ $t('距離をとる') }}</h3>
              <p class="preventText">
                {{ $t('お互いに手を伸ばして触れない距離を心がけましょう') }}
              </p>
              <div class="preventImage">
                <prevent-icon-socialdistance />
              </div>
            </div>
          </div>
        </div>
        <div class="DataCard col-lg-4 col-md-6">
          <div class="DataView v-card v-sheet theme--light">
            <div class="DataView-Inner">
              <h3 class="preventHeadingL">
                {{ $t('人の多い場所を避ける') }}
              </h3>
              <p class="preventText">
                {{ $t('他者との安全な距離を保ちましょう') }}
              </p>
              <div class="preventImage">
                <prevent-icon-crowded />
              </div>
            </div>
          </div>
        </div>
        <div class="DataCard col-lg-4 col-md-6">
          <div class="DataView v-card v-sheet theme--light">
            <div class="DataView-Inner">
              <h3 class="preventHeadingL">
                {{ $t('しっかり換気をする') }}
              </h3>
              <p class="preventText">
                {{ $t('ウイルスや菌は長時間空気中を浮遊します') }}
              </p>
              <div class="preventImage">
                <prevent-icon-ventilation />
              </div>
            </div>
          </div>
        </div>
        <div class="DataCard col-lg-4 col-md-6">
          <div class="DataView v-card v-sheet theme--light">
            <div class="DataView-Inner">
              <h3 class="preventHeading">
                {{ $t('風邪気味なら休む') }}
              </h3>
              <p class="preventText">
                {{ $t('風邪症状のある場合は外出を控えしっかり休みましょう') }}
              </p>
              <div class="preventImage">
                <prevent-icon-thermometer />
              </div>
            </div>
          </div>
        </div>
        <div class="DataCard col-lg-4 col-md-6">
          <div class="DataView v-card v-sheet theme--light">
            <div class="DataView-Inner">
              <h3 class="preventHeading">
                {{ $t('目鼻口を触らない') }}
              </h3>
              <p class="preventText">
                {{ $t('外出中は触らないように粘膜からの感染を防ぎましょう') }}
              </p>
              <div class="preventImage">
                <prevent-icon-virus />
              </div>
            </div>
          </div>
        </div>
        <div class="DataCard col-lg-4 col-md-6">
          <div class="DataView v-card v-sheet theme--light">
            <div class="DataView-Inner">
              <h3 class="preventHeading">
                {{ $t('咳の飛沫を飛ばさない') }}
              </h3>
              <p class="preventText">
                {{
                  $t(
                    '咳やくしゃみをするときは手ではなく肘の内側で口や鼻を抑えましょう'
                  )
                }}
              </p>
              <div class="preventImage">
                <prevent-icon-cough />
              </div>
            </div>
          </div>
        </div>
        <div class="DataCard col-lg-4 col-md-6">
          <div class="DataView v-card v-sheet theme--light">
            <div class="DataView-Inner">
              <h3 class="preventHeading">
                {{ $t('よく寝る') }}
              </h3>
              <p class="preventText">
                {{ $t('しっかり寝て体を休ませましょう') }}
              </p>
              <div class="preventImage">
                <prevent-icon-sleeping />
              </div>
            </div>
          </div>
        </div>
        <div class="DataCard col-lg-4 col-md-6">
          <div class="DataView v-card v-sheet theme--light">
            <div class="DataView-Inner">
              <h3 class="preventHeading">
                {{ $t('よく食べる') }}
              </h3>
              <p class="preventText">
                {{ $t('健康的な食事を心がけましょう') }}
              </p>
              <div class="preventImage">
                <prevent-icon-eat />
              </div>
            </div>
          </div>
        </div>
        <div class="DataCard col-lg-4 col-md-6">
          <div class="DataView v-card v-sheet theme--light">
            <div class="DataView-Inner">
              <h3 class="preventHeading">
                {{ $t('運動をする') }}
              </h3>
              <p class="preventText">
                {{ $t('適度な運動で健康的な体づくりを心がけましょう') }}
              </p>
              <div class="preventImage">
                <prevent-icon-play />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <static-card>
      <h3>{{ $t('新型コロナウイルス感染症のQ&A') }}</h3>
      <ul>
        <li>
          <app-link
            to="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00001.html"
            :icon-size="16"
          >
            {{
              $t('新型コロナウイルスに関するQ&A（一般の方向け）｜厚生労働省')
            }}
          </app-link>
        </li>
        <li>
          <app-link
            to="https://www3.nhk.or.jp/news/special/coronavirus/question-answer/"
            :icon-size="16"
          >
            {{ $t('特設サイト 新型コロナウイルス 疑問・不安Q＆A |NHK') }}
          </app-link>
        </li>
      </ul>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/AppLink.vue'
import PageHeader from '@/components/PageHeader.vue'
import PrinterButton from '@/components/PrinterButton.vue'
import StaticCard from '@/components/StaticCard.vue'
import CovidIcon from '@/static/covid-prevention.svg'
import preventIconCough from '@/static/covid19/prevent-icon-cough.svg'
import preventIconCrowded from '@/static/covid19/prevent-icon-crowded.svg'
import preventIconEat from '@/static/covid19/prevent-icon-eat.svg'
import preventIconHand from '@/static/covid19/prevent-icon-hand.svg'
import preventIconMask from '@/static/covid19/prevent-icon-mask.svg'
import preventIconPlay from '@/static/covid19/prevent-icon-play.svg'
import preventIconSleeping from '@/static/covid19/prevent-icon-sleeping.svg'
import preventIconSocialdistance from '@/static/covid19/prevent-icon-socialdistance.svg'
import preventIconThermometer from '@/static/covid19/prevent-icon-thermometer.svg'
import preventIconVentilation from '@/static/covid19/prevent-icon-ventilation.svg'
import preventIconVirus from '@/static/covid19/prevent-icon-virus.svg'

export default Vue.extend({
  components: {
    CovidIcon,
    PrinterButton,
    PageHeader,
    preventIconHand,
    preventIconMask,
    preventIconSocialdistance,
    preventIconEat,
    preventIconSleeping,
    preventIconCough,
    preventIconPlay,
    preventIconVirus,
    preventIconVentilation,
    preventIconThermometer,
    preventIconCrowded,
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
      title: this.$t('新型コロナウイルス感染症について') as string,
    }
  },
})
</script>

<style lang="scss" scoped>
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
.prevent {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin-right: -12px;
  margin-left: -12px;
}
.preventHeadingL {
  font-weight: bold;
  margin-bottom: 10px;
  @include font-size($fzHeadingL);
}
.preventHeading {
  font-weight: bold;
  margin-bottom: 10px;
  @include font-size($fzHeading);
}
.preventText {
  color: $green-1;
  margin-bottom: 20px;
}
.preventImage {
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
</style>
