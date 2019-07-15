import { DeviceWidth } from '~/store/app/types'

export default (): DeviceWidth => ({
  breakpoint: 768,
  only: {
    pc: false,
    sp: true
  },
})
