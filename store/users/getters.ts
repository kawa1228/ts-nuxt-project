import { GetterTree } from 'vuex'
import { UsersState, User } from '~/store/users/types'
import _filter from 'lodash/filter'

export default {
  getActiveUser: (state: UsersState) => {
    return _filter(state.activeUser, ((user: User) => user.user_id === 1));
  }
} as GetterTree<UsersState, User>