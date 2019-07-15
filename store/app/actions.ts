import { ActionTree } from 'vuex'
import { DeviceWidthState, DeviceWidth } from '~/store/app/types'

export default {
  updateOnlys({ commit }, payload: { isPc: boolean }) {
    commit('setOnlyPc', { isPc: payload.isPc })
    commit('setOnlySp', { isSp: !payload.isPc })
  }
} as ActionTree<DeviceWidthState, DeviceWidth>
