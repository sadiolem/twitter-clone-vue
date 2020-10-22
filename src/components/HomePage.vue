<template>
  <div class="home-page">
    <LeftSidebar/>
    <TwitForm/>
    <Feed/>
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
  }
</style>