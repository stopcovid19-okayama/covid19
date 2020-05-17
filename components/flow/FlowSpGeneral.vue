<template>
  <div :class="$style.container">
    <h4 :class="$style.heading">
      <span :class="[$style.icon, $style.top]" aria-hidden="true">
        <human-icon />
      </span>
      <span :class="$style.fzMedium">{{ $t('一般の方') }}</span>
    </h4>
    <ul :class="[$style.rectContainer, $style.double]">
      <li :class="$style.symptom">
        {{ $t('息苦しさ') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('強いだるさ') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('息苦しさ') }}
        {{ $t('高熱など') }}
      </li>
    </ul>
    <p :class="$style.duration">
      {{ $t('いずれかがある場合') }}
    </p>
    <a
      v-scroll-to="{
        el: '#consult',
        onDone: onDoneScroll
      }"
      href="#consult"
      :class="[$style.button, $style.clickable]"
    >
      <span :class="$style.text">{{ $t('新型コロナ受診相談窓口へ') }}</span>
      <arrow-forward-icon :class="$style.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { onDoneScroll } from '@/utils/vueScrollTo'
import HumanIcon from '@/static/flow/responsive/accessibility.svg'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
export default {
  components: { HumanIcon, ArrowForwardIcon },
  methods: { onDoneScroll }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';
</style>
