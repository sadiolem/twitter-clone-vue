<template>
  <form action="" class="twit-form">
    <div class="twit-form__user-img">
      <img src="../assets/default_profile.png" alt="">
    </div>
    <div class="twit-form__input-block">
      <textarea maxlength="280" placeholder="Что происходит?" @input="heightByContent($event.target)"></textarea>
      <button class="btn twit-form__btn-submit" @click.prevent="addTwit">Твитнуть</button>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'TwitForm',
    methods: {
      heightByContent(el) {
        el.style.height = el.scrollHeight + 'px';

        if (!el.value) {
          el.removeAttribute('style');
        }
      },
      addTwit() {
        console.log(111);
      }
    }
  }
</script>

<style lang="less">
  .twit-form {
    display: flex;
    padding: 10px 15px;

    &__user-img {
      width: 49px;
      height: 100%;
      margin-right: 10px;

      & img {
        max-width: 100%;
        border-radius: 50px;
      }
    }

    &__input-block {
      display: flex;
      flex-direction: column;
      width: 100%;

      & textarea {
        width: 100%;
        height: 50px;
        min-height: 50px !important;
        padding: 10px 0;
        font-family: 'Roboto', sans-serif;
        font-size: 19px;
        border: none;
        background: none;
        border-bottom: 1px solid @border-color;
        overflow: hidden;
        outline: none;
        resize: none;

        &::placeholder {
          font-size: 17px;
        }
      }
    }

    &__btn-submit {
      align-self: flex-end;
      margin: 10px 0;
      color: #fff;
      background-color: @main-color;
    }
  }
</style>