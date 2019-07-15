<docs>
## グロナビ付きレイアウト

- 初期実装者 kawasumi
</docs>

<template>
  <DeviceWidthContainer>
    <GlobalNavigation />
    <nuxt />
  </DeviceWidthContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    DeviceWidthContainer: () =>
      import('~/components/container/DeviceWidthContainer.vue'),
    GlobalNavigation: () =>
      import('~/components/presentations/GlobalNavigation.vue')
  }
})
export default class Globalnav extends Vue {}
</script>

<style lang="scss" scoped />
