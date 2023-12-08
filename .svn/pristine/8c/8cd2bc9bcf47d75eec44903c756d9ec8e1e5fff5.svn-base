<template>
  <div
    class="item"
    :style="`background: linear-gradient(120deg, ${item.bgColor1} 50%, ${item.bgColor2} 100%);`"
  >
    <div class="label">
      <span>{{ item.label }}</span>
      <slot name="score"> </slot>
    </div>
    <div class="icon">
      <ion-icon :icon="chevronBack" color="light" />
    </div>
  </div>
</template>
<script>
import { chevronBack } from 'ionicons/icons';

export default {
  name: 'AskMeButtonItem',
  props: {
    item: {
      type: Object
    },
    bgColor1: {
      type: String
    },
    bgColor2: {
      type: String
    }
  },
  data() {
    return {
      chevronBack
    };
  }
};
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  border-radius: 50px;
  gap: 1rem;
  box-shadow:
    1px 1px 2px inset rgba(255, 255, 255, 0.3),
    0 0 10px rgba(0, 0, 0, 0.25);
  + .item {
    margin-top: 0.75rem;
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 2.5rem);
    color: white;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(180deg);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: rgba($color: white, $alpha: 0.25);
  }
}
</style>
