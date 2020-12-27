<template>
  <component :is="cardComponent" />
</template>

<script>
/* eslint-disable simple-import-sort/sort -- ブラウザでの表示順に合わせて各 card の component を import する */
// ---- モニタリング項目
// 検査陽性者の状況
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
// 報告日別による陽性者数の推移
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
// モニタリング項目
import MonitoringItemsOverviewCard from '@/components/cards/MonitoringItemsOverviewCard.vue'
// モニタリング項目(1)新規陽性者数
import MonitoringConfirmedCasesNumberCard from '@/components/cards/MonitoringConfirmedCasesNumberCard.vue'
// モニタリング項目(2)#7119における発熱等相談件数
import ConsultationAboutFeverNumberCard from '@/components/cards/ConsultationAboutFeverNumberCard.vue'
// モニタリング項目(3)新規陽性者における接触歴等不明者数
import UntrackedRateCard from '@/components/cards/UntrackedRateCard.vue'
// モニタリング項目(4)検査の陽性率
import PositiveRateCard from '@/components/cards/PositiveRateCard.vue'
// モニタリング項目(5)救急医療の東京ルールの適用件数
import TokyoRulesApplicationNumberCard from '@/components/cards/TokyoRulesApplicationNumberCard.vue'
// モニタリング項目(6)入院患者数
import HospitalizedNumberCard from '@/components/cards/HospitalizedNumberCard.vue'
// モニタリング項目(7)重症患者数
import SevereCaseCard from '@/components/cards/SevereCaseCard.vue'
// ---- その他 参考指標
// 陽性者の属性
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
// import ConfirmedCasesByMunicipalitiesCard from '@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
// 新型コロナコールセンター相談件数
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
// 受診相談窓口における相談件数
import MonitoringConsultationDeskReportsNumberCard from '@/components/cards/MonitoringConsultationDeskReportsNumberCard.vue'
// 東京都発熱相談センターにおける相談件数
import TokyoFeverConsultationCenterReportsNumberCard from '@/components/cards/TokyoFeverConsultationCenterReportsNumberCard.vue'
// 都営地下鉄の利用者数の推移
import MetroCard from '@/components/cards/MetroCard.vue'
// 都庁来庁者数の推移
import AgencyCard from '@/components/cards/AgencyCard.vue'
// 治療中患者数の変化状況
import ChangesPatientsNumberCard from '@/components/cards/ChangesPatientsNumberCard.vue'
/* eslint-enable simple-import-sort/sort */

import { getLinksLanguageAlternative } from '@/utils/i18nUtils'

export default {
  components: {
    // ---- モニタリング項目
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    MonitoringItemsOverviewCard,
    MonitoringConfirmedCasesNumberCard,
    ConsultationAboutFeverNumberCard,
    UntrackedRateCard,
    PositiveRateCard,
    TokyoRulesApplicationNumberCard,
    HospitalizedNumberCard,
    SevereCaseCard,
    // ---- その他 参考指標
    ConfirmedCasesAttributesCard,
    /*
    ConfirmedCasesByMunicipalitiesCard,
    */
    TestedNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    MonitoringConsultationDeskReportsNumberCard,
    TokyoFeverConsultationCenterReportsNumberCard,
    MetroCard,
    AgencyCard,
    ChangesPatientsNumberCard,
  },
  data() {
    let title, updatedAt, cardComponent
    switch (this.$route.params.card) {
      // NOTE: 以下，ブラウザでの表示順に合わせて条件分岐を行う
      // ---- モニタリング項目
      // 検査陽性者の状況
      case 'details-of-confirmed-cases':
        cardComponent = 'confirmed-cases-details-card'
        break
      // 報告日別による陽性者数の推移
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card'
        break
      /*
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card'
        break
      */
      case 'attributes-of-confirmed-cases':
        cardComponent = 'confirmed-cases-attributes-card'
        break
      case 'number-of-tested':
        cardComponent = 'tested-number-card'
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        cardComponent = 'telephone-advisory-reports-number-card'
        break
      /*
      case 'predicted-number-of-toei-subway-passengers':
        cardComponent = 'metro-card'
        break
      // モニタリング項目(2)#7119における発熱等相談件数
      case 'number-of-reports-to-consultations-about-fever-in-7119':
        cardComponent = 'consultation-about-fever-number-card'
        break
      // モニタリング項目(3)新規陽性者における接触歴等不明者数
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card'
        break
      // モニタリング項目(4)検査の陽性率
      case 'positive-rate':
        cardComponent = 'positive-rate-card'
        break
      */
      case 'monitoring-number-of-confirmed-cases':
        cardComponent = 'monitoring-confirmed-cases-number-card'
        break
      /*
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card'
        break
      // モニタリング項目(7)重症患者数
      case 'positive-status-severe-case':
        cardComponent = 'severe-case-card'
        break
      // ---- その他 参考指標
      // 陽性者の属性
      case 'attributes-of-confirmed-cases':
        cardComponent = 'confirmed-cases-attributes-card'
        break
      // 陽性者数（区市町村別）
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card'
        break
      // 発症日別による陽性者数の推移
      case 'positive-number-by-developed-date':
        cardComponent = 'positive-number-by-developed-date-card'
        break
      */
      case 'monitoring-number-of-reports-to-covid19-consultation-desk':
        cardComponent = 'monitoring-consultation-desk-reports-number-card'
        break
      case 'changes-in-number-of-hospitalized-patients':
        cardComponent = 'changes-patients-number-card'
        break
      /*
      case 'monitoring-items-overview':
        cardComponent = 'monitoring-items-overview-card'
        break
      // 都営地下鉄の利用者数の推移
      case 'predicted-number-of-toei-subway-passengers':
        cardComponent = 'metro-card'
        break
      case 'shinjuku-visitors':
        title = this.$t('新宿区エリアの来訪者数の推移（参考値）')
        updatedAt = ShinjukuData.date
        break
      case 'chiyoda-visitors':
        title = this.$t('千代田区エリアの来訪者数の推移（参考値）')
        updatedAt = ChiyodaData.date
        break

      case 'number-of-medical-system-bed':
        title = this.$t('確保病床')
        updatedAt = MedicalSystem.date
        break
      case 'number-of-medical-system-ventilator':
        title = this.$t('人工呼吸器')
        updatedAt = MedicalSystem.date
        break
      case 'number-of-medical-system-ecmo':
        title = this.$t('ECMO')
        updatedAt = MedicalSystem.date
        break
      */
    }

    return {
      cardComponent,
      title,
      updatedAt,
    }
  },
  head() {
    const url = 'https://okayama.stopcovid19.jp'
    const timestamp = new Date().getTime()
    const ogpImage =
      this.$i18n.locale === 'ja'
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`
    const description = `${this.$t(
      '当サイトは岡山県の新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、有志が開設したものです。'
    )}`
    const defaultTitle = `${this.$t('岡山県')} ${this.$t(
      '新型コロナウイルス感染症'
    )}${this.$t('対策サイト')}`

    return {
      titleTemplate: (title) => `${this.title || title} | ${defaultTitle}`,
      link: [
        ...getLinksLanguageAlternative(
          `cards/${this.$route.params.card}`,
          this.$i18n.locales,
          this.$i18n.defaultLocale
        ),
      ],
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${url}${this.$route.path}/`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          template: (title) =>
            title !== ''
              ? `${this.title || title} | ${defaultTitle}`
              : `${defaultTitle}`,
          content: '',
        },
        {
          hid: 'description',
          name: 'description',
          template: (updatedAt) =>
            updatedAt !== ''
              ? `${this.updatedAt || updatedAt} | ${description}`
              : `${description}`,
          content: '',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          template: (updatedAt) =>
            updatedAt !== ''
              ? `${this.updatedAt || updatedAt} | ${description}`
              : `${description}`,
          content: '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogpImage,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogpImage,
        },
      ],
    }
  },
}
</script>
