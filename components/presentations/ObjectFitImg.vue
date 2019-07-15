<docs>
## 画像の外接リサイズ

- 初期実装者　kawasumi
</docs>

<template>
  <div :style="style" class="object-fit-img">
    <span v-if="alt" class="object-fit-img__alt">{{ alt }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface ObjectFitStyle {
  width: string,
  height: string,
  'background-image': string,
  [key: string]: string | null
}

@Component
export default class GlobalNavigation extends Vue {
  @Prop({required: true}) readonly src!: String
  @Prop({required: true}) readonly alt!: String
  @Prop({default: null}) readonly width!: Number
  @Prop({default: null}) readonly height!: Number

  get style(): ObjectFitStyle {
    const style:ObjectFitStyle = {
      width: '',
      height: '',
      'background-image': ''
    }

    if (this.width) {
      style['width'] = `${this.width}px`
    }
    if (this.height) {
      style['height'] = `${this.height}px`
    }
    style['background-image'] = `url${this.src}`

    return style
  }
}
</script>

<style lang="scss" scoped>
.object-fit-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &__alt {
  // クローラーが認識可能な不可視要素
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  border: 0 !important;
  white-space: nowrap !important;
  }
}
</style>
