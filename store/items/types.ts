export interface Item {
  id: number,
  number: number,
  name: string,
  product_id: number,
  pc_id: number,
  image: string,
  status: number,
  created_at: string,
  updated_at: string
}

export interface ItemsState {
  all: Item[]
  itemsById: Item[]
}