<template>
  <ion-modal
    :is-open="isOpen"
    @ionModalDidDismiss="ionModalDidDismiss"
    class="custom-modal alert-modal"
  >
    <ion-content class="ion-padding">
      <ion-row>
        <ion-col>
          <ion-text color="warning">
            <p class="text-md text-bold">부스트 사용하기</p>
          </ion-text>
          <ion-text>
            <p class="text-lg">
              1시간동안 다른 사용자들에게<br />
              노출 빈도를 높여줍니다
            </p>
          </ion-text>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-text class="text-sm">
            보유 아이템
            <ion-icon :icon="honeyBoost" />
            {{ quantity }} 개
          </ion-text>
        </ion-col>
      </ion-row>
      <ion-row
        class="ion-align-items-center ion-justify-content-between flex-nowrap"
      >
        <ion-text class="text-sm">
          <ion-icon :icon="honeyBoost" />
          1 개 소모
        </ion-text>
        <div>
          <ion-button
            @click="handleCancelBtn"
            fill="clear"
            shape="round"
            color="light"
            >취소
          </ion-button>
          <ion-button shape="round" @click="handleOkBtn">사용하기 </ion-button>
        </div>
      </ion-row>
    </ion-content>
  </ion-modal>
</template>
<script>
import IconHoneyBoost from '@/assets/img/icon/icon_honey_boost.svg';
export default {
  name: 'HoneyBoostModal',
  props: {
    isOpen: {
      type: Boolean
    },
    quantity: {
      type: Number
    }
  },
  data() {
    return {
      honeyBoost: IconHoneyBoost
    };
  },
  methods: {
    handleOkBtn() {
      this.$emit('ok');
    },
    handleCancelBtn() {
      this.$emit('cancel');
    },
    ionModalDidDismiss() {
      this.$emit('ionModalDidDismiss');
    }
  }
};
</script>
<style lang="scss" scoped>
ion-modal {
  ion-content {
    &::part(scroll) {
      overflow: hidden;
    }
  }
}
</style>
