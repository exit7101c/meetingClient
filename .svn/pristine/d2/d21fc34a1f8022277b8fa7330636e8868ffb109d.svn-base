<template>
  <ion-button
    :type="type"
    :size="size"
    :expand="expand"
    :fill="fill"
    :color="color"
    :shape="shape"
    :disabled="disabled"
    mode="md"
  >
    <ion-ripple-effect></ion-ripple-effect>
    <slot></slot>
  </ion-button>
</template>
<script>
export default {
  name: 'CustomButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    size: {
      type: String
    },
    fill: {
      type: String
    },
    expand: {
      type: String
    },
    color: {
      type: String,
      default: 'primary'
    },
    shape: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  }
};
</script>
<style lang="scss" scoped>
ion-button {
  --border-radius: var(--ion-border-radius);
  &.button-round {
    --border-radius: 64px;
  }
}
</style>
