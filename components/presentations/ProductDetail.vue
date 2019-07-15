<template>
  <div>
    <ProductSummary />
    <p>{{ product.name }}</p>
    <img :src="product.image" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Product } from '~/store/products/types';

@Component({
  components: {
    ProductSummary: () =>
      import('~/components/presentations/ProductSummary.vue')
  }
})
export default class ProductDetail extends Vue {
  @Prop({ required: true }) readonly product!: Product;
}
</script>
