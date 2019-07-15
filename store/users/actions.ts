import { ActionTree } from 'vuex'
import { UsersState, User } from '~/store/users/types'
import axios from 'axios'

export default {
  async fetchUsersByUserID({ commit }, userID: number) {
    const users: User[] = (
      await axios.get(
      `http://localhost:8080/user/${userID}`
    )).data
    commit('setUsersByUserID', { user: users })
  },
} as ActionTree<UsersState, User>