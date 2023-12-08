<template>
  <ion-item>
    <div slot="start" class="avatar-area">
      <slot name="avatar"></slot>
    </div>
    <ion-label class="content-area">
      <slot name="content"></slot>
      <slot></slot>
    </ion-label>
  </ion-item>
</template>
<script>
export default {
  name: 'CommentItem'
};
</script>
<style lang="scss" scoped>
ion-item {
  position: relative;
  --padding-top: 10px;
  --padding-bottom: 10px;
  --padding-start: 10px;
  --border-color: rgba(255, 255, 255, 0.1);
  align-items: start;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: red;
  }

  &:last-of-type {
    --border-width: 0;
    --padding-bottom: 0;
    margin-bottom: -10px;
  }
  ion-label {
    white-space: pre-wrap !important;
  }
  .avatar-area {
    width: 40px;
    margin-right: 10px;
  }

  .content-area {
    width: 100%;
    margin-right: 0;
  }
}
</style>
