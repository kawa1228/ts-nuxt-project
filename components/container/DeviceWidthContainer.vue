<template>
  <div>
    <slot v-if="only.sp" />
    <!-- TODO: kawasumi PCviewのコンポーネントを作成 -->
    <div v-else>スマートフォンでご覧ください</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { DeviceWidth } from '~/store/app/types';

@Component
export default class ProductContainer extends Vue {
  @Getter('app/getOnlys') only!: DeviceWidth[];
}
</script>
