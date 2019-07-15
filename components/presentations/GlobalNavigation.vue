<docs>
## グローバルナビ

- 初期実装者　kawasumi
</docs>

<template>
  <div class="global-navigation">
    <p class="global-navigation__title">colore</p>
    <div class="global-navigation__icon">
      <UserIcon class="global-navigation__icon__user" />
      <ThreeLinesIcon class="global-navigation__icon__lines" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ThreeLinesIcon from '~/assets/svg/icons/ThreeLinesIcon.svg';
import UserIcon from '~/assets/svg/icons/UserIcon.svg';

@Component({
  components: {
    ThreeLinesIcon,
    UserIcon
  }
})
export default class GlobalNavigation extends Vue {}
</script>

<style lang="scss" scoped>
.global-navigation {
  display: flex;
  justify-content: space-between;
  background-color: $color-bg-default;
  height: 50px;

  &__title {
    font-size: 24px;
    margin: 14px 10px;
  }

  &__icon {
    margin: 8px;

    &__user {
      padding: 4px;
      height: 34px;
      width: 34px;
    }

    &__lines {
      margin: 0 4px;
      padding: 4px;
      height: 34px;
      width: 34px;
    }
  }
}
</style>
