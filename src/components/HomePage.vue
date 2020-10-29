<template>
  <div class="home-page">
    <LeftSidebar/>
    <div class="home-page__center-block">
      <div class="center-block__header">Главная</div>
      <TwitForm/>
      <div class="divider"></div>
      <Feed/>
    </div>
    <RightSidebar/>
  </div>
</template>

<script>
  import LeftSidebar from '@/components/LeftSidebar';
  import RightSidebar from '@/components/RightSidebar';
  import Feed from '@/components/Feed';
  import TwitForm from '@/components/TwitForm';

  export default {
    name: 'HomePage',
    components: {
      LeftSidebar,
      RightSidebar,
      Feed,
      TwitForm
    }
  }
</script>

<style lang="less">
  .home-page {
    display: flex;
    height: 100%;
    width: 100%;

    &__center-block {
      display: flex;
      flex-direction: column;
      width: 598px;
      border-right: 1px solid @border-color;
      border-left: 1px solid @border-color;
    }

    .center-block {
      &__header {
        display: flex;
        align-items: center;
        height: 53px;
        padding: 0 15px;
        font-size: 20px;
        font-weight: 600;
        border-bottom: 1px solid @border-color;
      }
    }

    .divider {
      width: 100%;
      height: 10px;
      background-color: @border-color;
    }
  }
</style>