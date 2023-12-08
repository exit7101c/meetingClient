<template>
  <ion-modal
    :is-open="isOpen"
    @ionModalDidDismiss="ionModalDidDismiss"
    class="custom-modal"
  >
    <ion-content>
      <div class="row-box">
        <ion-text color="warning" class="text-lg text-bold" style="font-size: 20px;">
          정말 강퇴하시겠습니까?
        </ion-text>
      </div>
      <!--      <div class="row-box">-->
      <!--        <ion-text color="light" class="text-bold">-->
      <!--          ( 주의사항 )<br />-->
      <!--          내용내용-->
      <!--        </ion-text>-->
      <!--      </div>-->
      <ion-row
        style="position: absolute; bottom: 0; right: 0;"
        class="ion-align-items-center ion-justify-content-between gap-lg flex-nowrap"
      >
        <div class="text-right">
          <custom-button fill="clear" shape="round" @click="handleCancelBtn"
          >취소
          </custom-button
          >
          <custom-button color="primary" shape="round" @click="handleOkBtn"
          >강퇴
          </custom-button
          >
        </div>
      </ion-row>
    </ion-content>
  </ion-modal>
</template>
<script>
import IconProfileAdCoupon from "@/assets/img/icon/icon_profile_ad_coupon.svg";

export default {
  name: "UserKickModal",
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
      profileAdCouponIcon: IconProfileAdCoupon,
      modalMypage: false
    };
  },
  methods: {
    handleOkBtn() {
      this.$emit("ok");
    },
    handleCancelBtn() {
      this.$emit("cancel");
    },
    ionModalDidDismiss() {
      this.$emit("ionModalDidDismiss");
    }
  }
};
</script>
<style lang="scss" scoped>
ion-modal {
  padding: 0 18px;
  --max-height: 100px;

  &::part(content) {
    --border-radius: var(--ion-border-radius-lg);
    padding: 24px 18px;
  }

  ion-content {
    &::part(scroll) {
      overflow: hidden;
    }
  }

  h3 {
    line-height: 1.6;
    font-size: 22px;
  }

  p {
    ion-text {
      + ion-icon {
        margin-left: 4px;
      }
    }

    ion-icon {
      + ion-text {
        margin-left: 4px;
      }
    }
  }
}
</style>
