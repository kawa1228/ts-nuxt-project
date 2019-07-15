<template>
  <div>
    <LoginSummary />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { User } from '~/store/users/types';

@Component({
  components: {
    LoginSummary: () => import('~/components/presentations/LoginSummary.vue')
  }
})
export default class activeUser extends Vue {
  @Getter('users/getActiveUser') users!: User[];
}
</script>
