<template>
  <div>
    <h2>Chrole</h2>
    <form>
      <p>
        <input type="text" placeholder="メールアドレスを入力" name="email" />
      </p>
      <p>
        <input type="text" placeholder="パスワードを入力" name="password" />
      </p>
      <nuxt-link to="/login/forgot">パスワードをお忘れの方</nuxt-link>
      <div>
        <button type="submit">ログイン</button>
      </div>
      <div>
        <button type="submit">Twitterでログイン</button>
      </div>
      <nuxt-link to="/login/begginer">はじめての方はこちら</nuxt-link>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ProductDetail extends Vue {}
</script>
