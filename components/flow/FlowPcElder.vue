<template>
  <div :class="$style.FlowComponent">
    <div :class="[$style.SubtleBox, $style.Box1]">
      <div :class="$style.RowItems">
        <div :class="$style.RowItemsHeader">
          <ul :class="$style.RowItemsHeaderList">
            <li :class="$style.RowItemsHeaderListItem">
              <img
                :class="$style.RowItemsHeaderListItemIcon"
                src="/flow/directions_walk-24px.svg"
                aria-hidden="true"
                alt=" "
              />
              {{ $t('ご高齢な方') }}
            </li>
            <li :class="$style.RowItemsHeaderListItem">
              <img
                :class="$style.RowItemsHeaderListItemIcon"
                src="/flow/accessible-24px.svg"
                aria-hidden="true"
                alt=" "
              />
              {{ $t('基礎疾患のある方') }}
            </li>
            <li :class="$style.RowItemsHeaderListItem">
              <img
                :class="$style.RowItemsHeaderListItemIcon"
                src="/flow/pregnant_woman-24px.svg"
                aria-hidden="true"
                alt=" "
              />
              {{ $t('妊娠中の方') }}
            </li>
          </ul>
        </div>
      </div>
      <div :class="$style.RowItems">
        <div :class="$style.CheckBox">
          <img
            :class="$style.CheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('風邪症状') }}
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.FlowComponent {
  color: $gray-2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.Tel {
  @include largerThan($medium) {
    font-size: larger;
  }
}
.TelLink {
  display: flex;
  align-items: center;
  font-weight: bold;
  &:link,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
    @media screen {
      outline: 1px dotted $gray-3;
    }
  }
  &Icon {
    display: inline-block;
    margin-right: 5px;
    width: 26px;
    height: 26px;
  }
}
.CheckBox {
  position: relative;
  border: 2px solid $green-1;
  border-radius: 4px;
  margin-left: -120px;
  padding: 10px;
  max-width: 200px;
  text-align: center;
  font-weight: bold;
  font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
  @include largerThan($large) {
    font-size: 20px;
  }
  &Icon {
    position: absolute;
    left: -8px;
    top: -8px;
    width: 24px;
    height: 24px;
  }
  &::before {
    position: absolute;
    left: -4px;
    top: -4px;
    width: 20px;
    height: 20px;
    background-color: white;
    content: '';
  }
}
.SubtleBox {
  @include card-container();

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5em;
}
.Box1 {
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  flex-direction: row;
}
.RowItems {
  flex-grow: 1;
  text-align: center;
  margin: 0 4px;
  @include largerThan($large) {
    margin: 0 2em;
  }
}
.RowItemsHeader {
  &List {
    margin: 16px 0;
    text-align: left;
    list-style: none;
    &Item {
      display: flex;
      align-items: center;
      &Icon {
        display: inline-block;
        width: 30px;
        height: 30px;
      }
    }
    &Item + &Item {
      margin-top: 14px;
    }
  }
}
.FlowArrow {
  position: absolute;
  margin: 0 -20px;
  z-index: 1;
}
.LargerText {
  font-size: larger;
  font-weight: bold;
  @media print {
    width: 65%;
  }
}
.Center {
  text-align: center;
}
.SmallerText {
  font-size: smaller;
}
</style>
