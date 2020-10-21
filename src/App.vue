<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="less">
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  #app {
    height: 100%;
  }

  .btn {
    height: 39px;
    padding: 0 15px;
    font-size: 16px;
    font-weight: 600;
    background: none;
    border: 1px solid transparent;
    border-radius: 50px;
    cursor: pointer;
    outline: none;
    transition: 0.3s background-color;

    &--submit {
      color: #fff;
      background-color: @main-color;
    }
  }

  input {
    border: none;
    background: none;
    outline: none;
  }

  .group-control {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 30px;
    background-color: rgb(245, 248, 250);

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
