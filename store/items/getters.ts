import { GetterTree } from 'vuex'
import { ItemsState, Item } from '@/store/items/types'
import _filter from 'lodash/filter'

export default {
  getItemsByItemID: (state: ItemsState) => {
    return _filter(state.itemsById, ((item: Item) => item.product_id === 1));
  }
} as GetterTree<ItemsState, Item>
