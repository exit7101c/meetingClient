<template>
  <ion-item v-if="item" lines="none">
    <ion-avatar slot="start">
      <ion-img
        :src="'https://' + item.cdnThumbNm"
        @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
      />
    </ion-avatar>
    <ion-label>
      <ion-text color="light" class="text-sm">
        {{ item.nick }}
      </ion-text>
      <br />
      <ion-text class="text-sm" style="color:#b9b9b9;">
        {{ item.aboutMe }}
      </ion-text>
    </ion-label>
    <ion-label slot="end">
      <ion-badge color="primary" v-show="item.userId === item.leaderUserId">
        방장
      </ion-badge>
      <slot name="actions"></slot>
    </ion-label>
    <ion-label slot="end">
      <ion-badge color="secondary" v-show="item.subLeaderYn === 'Y'">
        부방장
      </ion-badge>
      <slot name="actions"></slot>
    </ion-label>
    <ion-label slot="end" v-if="messageType">
      <ion-badge color="primary" v-show="myCheck"> 본인</ion-badge>
      <slot name="actions"></slot>
    </ion-label>
  </ion-item>
</template>
<script>
export default {
  name: "MessageTalkAttendItem",
  props: {
    item: {
      type: Object
    },
    messageType: {
      type: Boolean
    },
    myCheck: {
      type: Boolean
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  align-items: center;
  --padding-top: 0;
  --padding-bottom: 0;

  ion-label {
    margin: 0;
  }
}
</style>
