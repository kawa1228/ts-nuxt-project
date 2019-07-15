import { ActionTree } from 'vuex'
import { ItemsState, Item } from '@/store/items/types'
import axios from 'axios'

export default {
  async fetchItemsById({ commit }, id: number) {
    const items: Item[] = (
      await axios.get(
      `http://localhost:8080/item?item_id=${id}`
    )).data
    console.log(items);
    commit('setItemsById', { item: items })
  },
} as ActionTree<ItemsState, Item>