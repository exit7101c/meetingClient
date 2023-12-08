<template>
  <ion-modal
    :is-open="isOpen"
    @ionModalDidDismiss="ionModalDidDismiss"
    class="custom-modal"
  >
    <ion-content>
      <div class="row-box">
        <ion-text color="warning" class="text-lg text-bold">
          내 프로필을 홈 화면에 게시합니다
        </ion-text>
      </div>
      <div class="row-box">
        <h3>
          <ion-text color="light" class="text-bold">
            ProfileAD를<br />
            사용하시겠습니까?
          </ion-text>
        </h3>
      </div>
      <div class="row-box">
        <p style="position: relative">
          <ion-text class="sub-text01 text-bold">보유 아이템</ion-text>
          <!--          <ion-icon :icon="profileAdCouponIcon" />-->
          <ion-img
            :src="'https://cmdg.speedycdn.net/202308/20230814225126_bc343f95-731b-4982-a107-5b496b7968ba.png'"
            style="position: absolute; margin-left: 80px; width: 20px; height: 20px; margin-top: -22px" />
          <ion-text color="light" class="text-bold" style="margin-left: 33px">{{ quantity }}개</ion-text>
        </p>
      </div>
      <ion-row
        class="ion-align-items-center ion-justify-content-between gap-lg flex-nowrap"
      >
        <p style="position: relative">
          <!--          <ion-icon :icon="profileAdCouponIcon" />-->
          <ion-img
            :src="'https://cmdg.speedycdn.net/202308/20230814225126_bc343f95-731b-4982-a107-5b496b7968ba.png'"
            style="position: absolute; width: 20px; height: 20px; margin-top: 2px;" />
          <ion-text color="light" style="margin-left: 25px">1개 소모</ion-text>
        </p>
        <div class="text-right">
          <custom-button fill="clear" shape="round" @click="handleCancelBtn"
          >취소
          </custom-button
          >
          <custom-button color="primary" shape="round" @click="handleOkBtn"
          >사용
          </custom-button
          >
        </div>
      </ion-row>
    </ion-content>
  </ion-modal>
</template>
<script>
// import IconProfileAdCoupon from '@/assets/img/icon/icon_profile_ad_coupon.svg';
import IconProfileAdCoupon from "@/assets/img/icon/profileAd.png";

export default {
  name: "ProfileAdModal",
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
  --max-height: 220px;

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
