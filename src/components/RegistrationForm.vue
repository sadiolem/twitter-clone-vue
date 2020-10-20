<template>
  <form action="">
    <div class="auth-form__title">Создайте учетную запись</div>
    <div class="group-control">
      <input id="user-name" class="auth-form__input" type="text">
      <label for="user-name" class="auth-form__label">Имя</label>
    </div>
    <div class="group-control">
      <input id="user-email" class="auth-form__input" type="email">
      <label for="user-email" class="auth-form__label">Адрес электронной почты</label>
    </div>
    <div class="group-control">
      <input id="user-password" class="auth-form__input" type="password">
      <label for="user-password" class="auth-form__label">Пароль</label>
    </div>
  </form>
</template>

<script>
  export default {
    name: "RegistrationForm.vue"
  }
</script>

<style scoped>

</style>