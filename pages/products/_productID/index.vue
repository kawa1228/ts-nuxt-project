<docs>
## productページ

- 初期実装者　hirosawa
</docs>

<template>
  <DeviceWidthContainer v-slot="{ only }">
    <ProductContainer v-slot="{ products }">
      <ProductDetail
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </ProductContainer>
  </DeviceWidthContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  layout: 'globalnav',
  components: {
    DeviceWidthContainer: () =>
      import('~/components/container/DeviceWidthContainer.vue'),
    ProductContainer: () =>
      import('~/components/container/ProductContainer.vue'),
    ProductDetail: () => import('~/components/presentations/ProductDetail.vue')
  },
  async fetch({ store, params }) {
    await store.dispatch('products/fetchProductsByProductID', params.productID);
  }
})
export default class Home extends Vue {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-products: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
