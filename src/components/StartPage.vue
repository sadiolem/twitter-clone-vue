<template>
  <div class="start-page">
    <div class="start-page__left-block">
      <ul class="features-list">
        <li class="features-list__item">
          <img src="../assets/svg/search.svg">
          Читайте о том, что вам интересно.
        </li>
        <li class="features-list__item">
          <img src="../assets/svg/people_outline.svg">
          Узнайте, о чем говорят в мире.
        </li>
        <li class="features-list__item">
          <img src="../assets/svg/chat_outline.svg">
          Присоединяйтесь к общению.
        </li>
      </ul>
    </div>
    <div class="start-page__right-block">
      <h1>Twitter Clone</h1>
      <button @click="openRegistrationModal" class="btn btn-registration">Зарегистрироваться</button>
      <button @click="openLoginModal" class="btn btn-login">Войти</button>
      <AuthModal ref="authModal" :content="content"/>
    </div>
  </div>
</template>

<script>
  import AuthModal from "@/components/AuthModal";

  export default {
    name: 'StartPage',
    components: {
      AuthModal
    },
    data() {
      return {
        content: '',
      }
    },
    methods: {
      openRegistrationModal() {
        this.content = 'registration';
        this.$refs.authModal.toggleModalVisibility();
      },
      openLoginModal() {
        this.content = 'login';
        this.$refs.authModal.toggleModalVisibility();
      }
    }
  }
</script>

<style lang="less">
  .start-page {
    display: flex;
    height: 100%;

    &__left-block,
    &__right-block {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
    }

    &__left-block {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      background-color: @main-color;
    }

    .features-list {
      margin: 0;
      padding: 0;
      list-style: none;

      &__item {
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        &:last-child {
          margin-bottom: 0;
        }

        & img {
          width: 30px;
          height: 30px;
          margin-right: 15px;
        }
      }
    }

    &__right-block {
      flex-direction: column;
    }

    .btn-registration,
    .btn-login {
      width: 380px;
      font-weight: 600;
    }

    .btn-registration {
      margin-bottom: 15px;
      color: #fff;
      background-color: @main-color;

      &:hover {
        background-color: @main-color-hover-fill;
      }
    }

    .btn-login {
      color: @main-color;
      border-color: @main-color;

      &:hover {
        background-color: @main-color-hover-outline;
      }
    }
  }
</style>
