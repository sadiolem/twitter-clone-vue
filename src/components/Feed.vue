<template>
  <div class="feed">
    <div v-for="twit in twits" :key="twit.id">
      <div>
        <img src="" alt="">
      </div>
      <div>
        <span>{{ twit.user }}</span>
        <button>...</button>
      </div>
      <div>
        <span>{{ twit.text }}</span>
        <div>
          <button>Коммент</button>
          <button>Лайк</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Feed',
    props: {
      twits: {
        type: Object,
      }
    }
  }
</script>

<style lang="less">
</style>