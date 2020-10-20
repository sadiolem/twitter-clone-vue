<template>
  <div id="app">
    <StartPage/>
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue';

export default {
  name: 'App',
  components: {
    StartPage
  }
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
</style>
