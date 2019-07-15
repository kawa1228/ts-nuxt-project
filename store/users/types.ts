export interface User {
  id: number
  name: string
  user_id: number
  created_at: string
  updated_at: string
}

export interface UsersState {
  all: User[]
  activeUser: User[]
}