<template>
  <div class="DownloadButtonWrapper" :class="wrapperClass">
    <a :href="url" class="DownloadButton">
      <div class="DownloadButton-DownloadIcon">
        <download-white-icon v-if="hover" aria-hidden="true" />
        <download-icon v-else aria-hidden="true" />
      </div>
      <span class="DownloadButton-Text">
        {{ $t('ダウンロード') }}
      </span>
    </a>
  </div>
</template>

<script>
import DownloadIcon from '@/static/download-pink.svg'
import DownloadWhiteIcon from '@/static/download-white.svg'

export default {
  components: {
    DownloadIcon,
    DownloadWhiteIcon
  },
  props: {
    wrapperClass: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hover: this.hover
    }
  },
  methods: {
    mouseover() {
      this.hover = true
    },
    mouseleave() {
      this.hover = false
    }
  }
}
</script>

<style lang="scss" scoped>
.DownloadButtonWrapper a {
  text-decoration: none;
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
  }

  &-Text {
    @include lessThan($small) {
      position: absolute !important;
      height: 1px !important;
      width: 1px !important;
      padding: 0 !important;
      border: 0 !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      clip: rect(1px, 1px, 1px, 1px) !important;
      clip-path: inset(50%) !important;
    }
  }

  &-DownloadIcon {
    margin-top: 8px;
    margin-right: 8px;
    width: 25px;

    @include largerThan($small) {
      padding-right: 7px;
    }

    svg {
      width: auto;
    }
  }
}
</style>
