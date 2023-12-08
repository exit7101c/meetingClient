<template>
  <!-- 모달창 시작 -->
  <ion-modal
    :is-open="modalOpen"
    @ionModalDidDismiss="modalOpen = false"
    class="custom-modal alert-modal"
    ref="modal"
  >
    <ion-content class="ion-padding">
      <ion-row>
        <ion-col>
          <ion-text color="warning">
            <p class="text-md">{{ title }}</p>
          </ion-text>
          <ion-text>
            <p class="text-lg">
              {{ content }}
            </p>
          </ion-text>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-text class="text-sm">
            보유 아이템
            <ion-icon :icon="iconImg" />
            {{ this.coupon.quantity }} 개
          </ion-text>
        </ion-col>
      </ion-row>
      <ion-row class="ion-align-items-center">
        <ion-col size="6">
          <ion-text class="text-sm">
            <ion-icon :icon="iconImg" />
            {{ useItemQuantity }}개 소모
          </ion-text>
        </ion-col>
        <ion-col size="6" class="text-right nowrap">
          <ion-button
            @click="modalBtn('cancel')"
            fill="outline"
            shape="round"
            color="secondary"
          >취소
          </ion-button
          >
          <ion-button shape="round" @click="modalBtn('use')"
          >사용하기
          </ion-button
          >
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-modal>
</template>
<script>

import { IonModal, IonContent, IonRow, IonCol, IonText, IonButton } from "@ionic/vue";
import { getData } from "@/assets/js/common";
import IconHoneyBoost from "@/assets/img/icon/ion_honey_boost.svg";
import IconSuperLike from "@/assets/img/icon/icon_superlike.svg";
import IconProfileAd from "@/assets/img/icon/icon_profile_ad.svg";

export default {
  name: "UseCouponPopup",
  inject: ["alertController"],
  props: {
    isOpen: { type: Boolean }
    , couponCd: { type: String }
  },
  components: {
    IonModal, IonContent, IonRow, IonCol, IonText, IonButton
  },
  data() {
    return {
      coupon: {}
      , modalOpen: false
      , iconImg: ""
      , useItemQuantity: 1
      , couponList: [
        { couponCd: "CU001", title: "하트어택 사용하기", content: `상대방의 심장을<br />폭격해보세요💘`, iconImg: IconSuperLike }
        , {
          couponCd: "CU002",
          title: "드링크 사용하기",
          content: `1시간동안 다른 사용자들에게<br />노출 빈도를 높여줍니다`,
          iconImg: IconHoneyBoost
        }
        , { couponCd: "CU008", title: "모임부스트 사용하기", content: `모임의 활성도를<br />높여줍니다`, iconImg: IconProfileAd }
        , { couponCd: "CU010", title: "ProfileAD 사용하기", content: `홈 화면에<br />본인을 소개합니다`, iconImg: IconProfileAd }
        , { couponCd: "CU012", title: "투표권 사용하기", content: `상대방의 받은 투표수를<br />올려줍니다`, iconImg: IconProfileAd }
      ]
      , title: ""
      , content: ""
      , useTypeHeart: "HEART"

      , isUsingBoost: false
    };
  },
  ionViewWillEnter() {
  },
  ionViewDidLeave() {
  },
  mounted() {
    for (let i = 0; this.couponList.length > i; i++) {
      if (this.couponList[i].couponCd == this.couponCd) {
        this.title = this.couponList[i].title;
        this.content = this.couponList[i].content;
        this.iconImg = this.couponList[i].iconImg;
        break;
      }
    }

    this.getUserCouponDataOne();
  },
  beforeUnmount() {
    this.$refs.modal.$el.dismiss();
  },
  methods: {

    /** 모달창내 내용 들어갈예정 **/
    modalBtn(type) {
      if (type === "use") {
        this.useHoneyBoost();
      } else {
        this.exitModal();
      }
    },
    exitModal() {
      this.$refs.modal.$el.dismiss();
    },
    /** 쿠폰 보유현황 **/
    getUserCouponDataOne() {

      getData({
        url: "/getUserCouponDataOne",
        param: { couponCd: this.couponCd },
        then: (data) => {
          this.coupon = data;

          if (this.coupon.quantity > 0) {
            this.useTypeHeart = "COUPON";
          } else {
            this.useTypeHeart = "HEART";
          }
        }
      });

    },
    /** useHoneyBoost 사용 로직 **/
    useHoneyBoost() {
      if(!this.isUsingBoost){
        this.isUsingBoost = true;

        getData({
          url: "/useHoneyBoost",
          param: {
            couponCd: "CU002",
            useType: this.useTypeHeart, // 'HEART', 'COUPON' / getUserCouponDataOne 에서 quantity(현재쿠폰수) 가 0 일경우 HEART 로 보내주면 됨
            itemCd: this.useTypeHeart === "HEART" ? "IT002_01" : "", // useType 'HEART' 일 시 1개 수량인 아이템코드 IT002_01
            pointCd: this.useTypeHeart === "HEART" ? "BUY" : "" // useType 'HEART' 일 시 BUY
          },
          then: (data) => {
            setTimeout(() => {
              this.isUsingBoost = false;
            }, 500);
            if (data.successYn === "N" || data.successYn === "NE") {
              this.warningAlert(data.message, "");
              this.$refs.modal.$el.dismiss();
            } else if (data.successYn === "NH") {
              this.warningAlert(data.message, "NH");
            } else {
              this.warningAlert(data.message, "");
              this.isBuffYn = data.isBuffYn;
              this.remainingTime = data.remainingTime;
              this.remainingTimeStr = data.remainingTimeStr;
              this.exitModal();
              // this.modalOpens = false;
            }
          }
        });

      }
    },
    /** 경고 팝업창 **/
    async warningAlert(message, code) {
      if (code == "") {
        const alert = await this.alertController.create({
          header: "",
          subHeader: "",
          message: message,
          buttons: ["OK"]
        });
        return alert.present();
      } else if (code == "NH") {
        const alert = await this.alertController.create({
          header: "",
          subHeader: "",
          message: message,
          buttons: [
            {
              text: "취소",
              role: "cancel",
              cssClass: "secondary",
              handler: () => {
              }
            },
            {
              text: "이동",
              handler: () => {
                this.exitModal();
                this.$router.push("/store");
              }
            }
          ]
        });
        return alert.present();
      }
    }

  }
};
</script>
<style lang="scss">
</style>
