<template>
  <div v-if="isModalVisible">
    <div class="auth-form-wrapper">
      <RegistrationForm v-if="content === 'registration'" class="auth-form"/>
      <LoginForm v-else class="auth-form"/>
    </div>
    <ModalShadow @hideModal="toggleModalVisibility"/>
  </div>
</template>

<script>
  import ModalShadow from '@/components/ModalShadow';
  import LoginForm from '@/components/LoginForm';
  import RegistrationForm from '@/components/RegistrationForm';

  export default {
    name: 'AuthForm.vue',
    components: {
      ModalShadow,
      LoginForm,
      RegistrationForm,
    },
    props: {
      content: {
        type: String,
        required: true,
      }
    },
    data() {
      return {
        isModalVisible: false,
      }
    },
    methods: {
      toggleModalVisibility() {
        this.isModalVisible = !this.isModalVisible;
      },
    }
  }
</script>

<style lang="less">
  .auth-form-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 1;
    width: 600px;
    height: 650px;
    min-height: 400px;
    background-color: #fff;
    border-radius: 15px;
    transform: translate(-50%, -50%);
  }

  .auth-form {
    display: flex;
    flex-direction: column;
    padding: 30px;

    &__title {
      margin: 15px 0 25px;
      font-size: 24px;
      font-weight: 600;
    }

    &__label {
      padding: 5px 10px;
      color: @gray-color;
      font-weight: 400;
      transition: 0.3s color;
    }

    &__input {
      height: 33px;
      padding: 2px 10px;
      border-bottom: 2px solid @gray-color;
      transition: 0.3s border-bottom-color;

      &:focus {
        border-bottom: 2px solid @main-color;

        & + .auth-form__label {
          color: @main-color;
        }
      }
    }
  }
</style>