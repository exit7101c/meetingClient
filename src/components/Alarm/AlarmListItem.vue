<template>
  <ion-item style="position: relative" @click="handleRouterAlarm">
    <template v-if="item.pushType === 'community'">
      <ion-icon slot="start" :icon="communityOutline" color="light"></ion-icon>
    </template>
    <template v-else-if="item.pushType === 'communityChat'">
      <ion-icon slot="start" :icon="messageOutline" color="light"></ion-icon>
    </template>
    <template v-else-if="item.pushType === 'openChat'">
      <ion-icon slot="start" :icon="opentChatOutline" color="light"></ion-icon>
    </template>
    <template v-else-if="item.pushType === 'myLikeMatching'">
      <ion-icon slot="start" :icon="choiceOutline" color="light"></ion-icon>
    </template>
    <ion-label>
      <ion-text class="sub-text01 text-bold text-sm"
        >{{ item.alarmNm }}
      </ion-text>
      <br />
      <ion-text color="light" class="text-bold text-md">
        {{ item.contents }}
      </ion-text>
      <!-- TODO : 더보기 작업 -->
      <!--      <ion-text class="sub-text04 text-bold text-xs btn-more">-->
      <!--        12건 더보기-->
      <!--      </ion-text>-->
    </ion-label>
    <div slot="end" class="time">
      <ion-text color="light" class="text-xs">
        {{ item.sendTimeMm }}
      </ion-text>
    </div>
    <ion-icon
      :icon="closeNoneOutline"
      color="light"
      style="
        position: absolute;
        top: -4px;
        right: -5px;
        width: 20px !important;
        height: 20px !important;
        border: none;
        background: none;
        padding: 0 !important;
        margin: 0 !important;
      "
      @click.stop="removeAlarm"
    ></ion-icon>
  </ion-item>
</template>
<script>
import IconChoice from '@/assets/img/icon/icon_tabs_choice.svg';
import IconOpenChat from '@/assets/img/icon/icon_tabs_open_chat.svg';
import IconCommunity from '@/assets/img/icon/icon_tabs_community.svg';
import IconMessage from '@/assets/img/icon/icon_tabs_message.svg';
import IconClose from '@/assets/img/icon/icon_close.svg';

export default {
  name: 'AlarmListItem',
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      choiceOutline: IconChoice,
      opentChatOutline: IconOpenChat,
      communityOutline: IconCommunity,
      messageOutline: IconMessage,
      closeNoneOutline: IconClose
    };
  },
  methods: {
    handleRouterAlarm($event) {
      this.$emit('handleRouterAlarm', $event.target.value);
    },
    removeAlarm() {
      this.$emit('removeAlarm');
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;

  ion-icon {
    width: 28px;
    height: 28px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    padding: 4px;
    margin-right: 16px;
  }

  &::part(native) {
    align-items: center;
    padding: 12px 20px;
    border-radius: var(--ion-border-radius);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18);
    background: #363636;
  }

  + ion-item {
    margin-top: 10px;
  }

  ion-label {
    margin: 0;
    margin-right: 20px;
    white-space: pre-wrap !important;
  }

  .btn-more {
    display: block;
    margin-top: 4px;
  }

  .time {
    align-self: end;
    margin-right: 0;
  }
}
</style>
