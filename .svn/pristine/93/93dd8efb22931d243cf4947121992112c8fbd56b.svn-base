<template>
  <ion-item>
    <ion-avatar slot="start" @click="handleClickItem">
      <ion-img
        :src="
          isLoaded
            ? 'https://' + item.cdnThumbNm
            : require('../../assets/img/Loading_icon.gif')
        "
        @ionImgDidLoad="handleImgloaded"
        @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
      />
    </ion-avatar>
    <ion-label @click="handleClickItem">
      <h3>
        <ion-text color="light">{{ item.nick }}</ion-text>
      </h3>
    </ion-label>
    <ion-fab-button color="primary" size="small" @click="handleClickOk">
      <ion-icon color="light" :icon="checkIcon"></ion-icon>
    </ion-fab-button>
    <ion-fab-button color="secondary" size="small" @click="handleClickCancel">
      <ion-icon color="light" :icon="closeIcon"></ion-icon>
    </ion-fab-button>
  </ion-item>
</template>
<script>
import { API_BASE_URL } from '@/assets/js/common';
import IconClose from '@/assets/img/icon/icon_close.svg';
import IconCheck from '@/assets/img/icon/icon_check.svg';

export default {
  name: 'OpenChatViewAttendItem',
  props: {
    item: {
      type: Object
    }
  },
  computed: {},
  data() {
    return {
      closeIcon: IconClose,
      checkIcon: IconCheck,
      API_BASE_URL,
      isLoaded: false
    };
  },
  methods: {
    handleImgloaded() {
      this.isLoaded = true;
    },
    handleClickItem() {
      this.$emit('event');
    },
    handleClickOk() {
      this.$emit('ok');
    },
    handleClickCancel() {
      this.$emit('cancel');
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --padding-top: 4px;
  --padding-bottom: 4px;

  ion-fab-button {
    width: 28px;
    height: 28px;
    margin: 0;

    + ion-fab-button {
      margin-left: 8px;
    }

    &.btn-cancel {
      --ion-color-base: rgba(250, 135, 168, 0.25) !important;
    }

    &.btn-ok {
      --ion-color-base: rgba(255, 255, 255, 0.25) !important;
    }
  }
}
</style>
