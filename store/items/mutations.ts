import { MutationTree } from 'vuex'
import { ItemsState, Item } from '~/store/items/types'

export default {
  setItemsById(state, { item }) {
    state.itemsById = item
  },
} as MutationTree<ItemsState>