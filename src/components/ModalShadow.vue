<template>
  <div class="modal-shadow" @click="hideModal"></div>
</template>

<script>
  export default {
    name: 'ModalShadow.vue',
    methods: {
      hideModal() {
        this.$emit('hideModal');
      }
    },
  }
</script>

<style lang="less">
  .modal-shadow {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
  }
</style>