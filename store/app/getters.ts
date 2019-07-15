import { GetterTree } from 'vuex'
import { DeviceWidthState, DeviceWidth } from '~/store/app/types'

export default {
  getOnlys: (state: DeviceWidthState) => {
    return state.only
  }
} as GetterTree<DeviceWidthState, DeviceWidth>
