import { GetterTree } from 'vuex'
import { ProductsState, Product } from '@/store/products/types'
import _filter from 'lodash/filter'

export default {
  getProductsByProductID: (state: ProductsState) => {
    return _filter(state.productsByProductID, ((product: Product) => product.product_id === 1));
  }
} as GetterTree<ProductsState, Product>
