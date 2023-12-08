<template>
  <ion-avatar>
    <img
      v-if="thumbnail !== null"
      :src="'https://' + thumbnail"
      @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
    />
    <img
      v-else
      :src="'https://cmdg.speedycdn.net/202308/20230807145058_a09c4c1d-0775-4559-bb58-e1926296b702.jpeg'"
      @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
    />
  </ion-avatar>
</template>
<script>
export default {
  name: "CommentAvatar",
  props: {
    thumbnail: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
ion-avatar {
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 10px;
}
</style>
