<template>
  <div class="contest-title">
    <ion-text color="light">
      <ion-icon
        color="warning"
        :icon="checkmarkCircleOutline"
        size="large"
      /><br />
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
    </ion-text>
    <ion-text color="light">
      <p>
        <slot name="desc"></slot>
      </p>
    </ion-text>
  </div>
</template>
<script>
import { checkmarkCircleOutline } from 'ionicons/icons';

export default {
  name: 'ContestHotTitle',
  data() {
    return {
      checkmarkCircleOutline
    };
  }
};
</script>
<style lang="scss" scoped>
.contest-title {
  margin-bottom: 40px;
  .title {
    font-weight: bold;
    margin: 0;
  }
}
</style>
