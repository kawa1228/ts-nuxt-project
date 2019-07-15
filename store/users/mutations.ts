import { MutationTree } from 'vuex'
import { UsersState, User } from '~/store/users/types'

export default {
  setUsersByUserID(state, { user }) {
    state.activeUser = user
  },
} as MutationTree<UsersState>