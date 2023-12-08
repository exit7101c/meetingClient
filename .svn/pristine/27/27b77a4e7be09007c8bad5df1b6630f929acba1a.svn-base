<template>
  <div class="custom-modal-layout" :class="{ 'hide-footer': hideFooter }">
    <header class="ion-padding">
      <slot name="header"></slot>
    </header>
    <div class="content ion-padding">
      <slot name="content"> </slot>
    </div>
    <footer class="ion-padding" v-if="!hideFooter">
      <slot name="footer"> </slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'CustomModalLayout',
  props: {
    hideFooter: {
      // 푸터 영역 숨기기
      type: Boolean
    }
  }
};
</script>
<style lang="scss">
$header: 56px;
$footer: 74px;
.custom-modal-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  header {
    margin: 10px 0 0;
    padding-top: 0;
    padding-bottom: 0;
    ion-title {
      padding: 0;
    }
  }
  .content {
    overflow-y: auto;
    height: inherit;
    padding-bottom: 40px;
  }
  footer {
    padding-top: 10px;
    padding-bottom: 30px;
  }
}
</style>
