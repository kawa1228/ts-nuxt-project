<template>
  <div>
    <slot :products="products" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { Product } from '~/store/products/types';

@Component
export default class ProductContainer extends Vue {
  @Getter('products/getProductsByProductID') products!: Product[];
}
</script>
