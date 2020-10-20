<template>
  <form action="">
    <div class="auth-form__title">Войти в Твиттер</div>
    <div class="group-control">
      <input id="user-email" class="auth-form__input" type="email">
      <label for="user-email" class="auth-form__label">Адрес электронной почты</label>
    </div>
    <div class="group-control">
      <input id="user-password" class="auth-form__input" type="password">
      <label for="user-password" class="auth-form__label">Пароль</label>
    </div>
    <button class="btn btn--submit">Войти</button>
  </form>
</template>

<script>
  export default {
    name: 'AuthForm.vue'
  }
</script>

<style lang="less">
</style>