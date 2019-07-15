import { ActionTree } from 'vuex'
import { ProductsState, Product } from '@/store/products/types'
import axios from 'axios'

export default {
  async fetchProductsByProductID({ commit }, productID: number) {
    const products: Product[] = (
      await axios.get(
      `http://localhost:8080/products/${productID}`
    )).data
    commit('setProductsByProductID', { product: products })
  },
} as ActionTree<ProductsState, Product>