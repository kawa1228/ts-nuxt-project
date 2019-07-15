import Vue from 'vue'
import { MutationTree } from 'vuex'
import { DeviceWidth } from '~/store/app/types'

export default {
  setOnlyPc(state: { only: object }, payload: { isPc: boolean }) {
    Vue.set(state.only, 'pc', payload.isPc)
  },
  setOnlySp(state: { only: object }, payload: { isSp: boolean }) {
    Vue.set(state.only, 'sp', payload.isSp)
  }
} as MutationTree<DeviceWidth>
