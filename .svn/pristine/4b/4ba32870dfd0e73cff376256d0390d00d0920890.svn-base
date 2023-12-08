<template>
  <ion-item>
    <ion-thumbnail slot="start">
      <ion-img
        v-if="thumbnail !== null"
        :src="'https://' + thumbnail"
        @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
      />
      <ion-img
        v-if="thumbnail === null"
        :src="'https://cmdg.speedycdn.net/202308/20230807145058_a09c4c1d-0775-4559-bb58-e1926296b702.jpeg'"
        @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
      />
    </ion-thumbnail>
    <ion-label>
      <slot name="content"></slot>
    </ion-label>
  </ion-item>
</template>
<script>
export default {
  name: "OpenChatMeetProfile",
  props: {
    thumbnail: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --padding-top: 10px;
  --padding-bottom: 10px;
  align-items: flex-start;
  gap: 4px;

  ion-thumbnail {
    width: 36px;
    height: 36px;
    margin-right: 10px;

    ion-img {
      object-fit: cover;
    }
  }

}
</style>
