<template>
  <ion-item lines="none" :class="{ clear: clear }">
    <slot></slot>
  </ion-item>
</template>
<script>
export default {
  name: 'CustomCardItem',
  props: {
    borderColor: {
      type: String
    },
    clear: {
      type: Boolean
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --border-width: 1px;
  --border-style: solid;
  --border-color: white;
  --border-radius: var(--ion-border-radius);
  box-shadow: 0px 0px 10px rgba(43, 57, 132, 0.3);
  color: white;
  font-size: 12px;
}
</style>
