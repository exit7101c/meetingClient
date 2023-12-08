<template>
  <ion-item>
    <ion-label>
      <slot name="content"></slot>
    </ion-label>
    <ion-thumbnail slot="end">
      <ion-img
        v-if="thumbnail !== null && delYn === 'N'"
        :src="'https://' + thumbnail"
        @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
      />
    </ion-thumbnail>
  </ion-item>
</template>
<script>
export default {
  name: 'MyCommunityItem',
  props: {
    thumbnail: {
      type: String
    },
    delYn: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}
</style>
