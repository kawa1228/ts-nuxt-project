import { MutationTree } from 'vuex'
import { ProductsState, Product } from '~/store/products/types'

export default {
  setProductsByProductID(state, { product }) {
    state.productsByProductID = product
  },
} as MutationTree<ProductsState>