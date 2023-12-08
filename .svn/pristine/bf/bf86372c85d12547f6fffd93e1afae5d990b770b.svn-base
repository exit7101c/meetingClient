<template>
  <ion-item lines="none">
    <ion-avatar slot="start">
      <img
        :src="'https://' + thumbnail"
        @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
      />
    </ion-avatar>
    <ion-label style="display: flex; justify-content: space-between;">
      <ion-text color="light">
        {{ item.nick }}
      </ion-text>
      <ion-text color="light">
        <span v-if="item.recentTime != '방금 전'" style="font-size: 12px;"> 방장이 {{ item.recentTime }} 마지막으로 활동했습니다. </span>
        <span v-else style="font-size: 12px; color: #f1f157;"> 방장이 현재 활동 중 입니다 </span>
      </ion-text>
    </ion-label>
    <!--    <ion-buttons slot="end">-->
    <!--      <ion-button @click="modalBtn('openView', modalItem)">-->
    <!--        <ion-icon-->
    <!--            slot="icon-only"-->
    <!--            :icon="search"-->
    <!--            style="color: black"-->
    <!--        />-->
    <!--      </ion-button>-->
    <!--    </ion-buttons>-->
  </ion-item>
</template>
<script>
import { search } from "ionicons/icons";

export default {
  name: "OpenChatMapUserInfo",
  props: {
    item: {
      type: String
    },
    thumbnail: {
      type: String
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
}
</style>
