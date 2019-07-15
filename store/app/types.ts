export interface DeviceWidth {
  breakpoint: number,
  only: { pc: boolean, sp: boolean }
}

export interface DeviceWidthState {
  all:  DeviceWidth[],
  only: DeviceWidth[]
}
