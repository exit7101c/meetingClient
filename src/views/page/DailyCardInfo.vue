<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton @event="goRouter" :custom="true" />
        </ion-buttons>
        <ion-title class="text-center">
          {{ infoMap.nick }}
          <ion-img
            v-if="infoMap.cdnThumbNmIcon != null"
            style="width: 30px; height: 30px; display: inline-block; vertical-align: bottom;"
            v-bind:src="'https://'+infoMap.cdnThumbNmIcon"
          />
        </ion-title>

        <ion-buttons slot="end" v-if="infoMap.targetUserKey != this.SS_USER_KEY">
          <ion-button id="profile-popover-button">
            <ion-icon slot="icon-only" :icon="menuIcon" color="light" />
          </ion-button>
          <ion-popover
            trigger="profile-popover-button"
            :dismiss-on-select="true"
            mode="ios"
          >
            <ion-content>
              <ion-list lines="full">
                <!-- todo : 글 내용 조회해서 넘기기 -->
                <ion-item :button="true" :detail="false" @click="btnType('p')"
                >신고하기
                </ion-item>
                <ion-item :button="true" :detail="false" @click="btnType('k')"
                >차단하기
                </ion-item>
              </ion-list>
            </ion-content>
          </ion-popover>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="DailyCardDetailLodingCheck === false">
      <PageLoadingCheck
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          height: 100%;
        "
      />
    </ion-content>
    <ion-content class="" ref="content" v-else>
      <div class="layout-container">
        <UserDetailInfo
          :info="infoMap"
          :isPartner="isPartner"
          @event="buttonClick"
          @partnersprofile="btnType('partner')"
        />
        <UserDetailInterview
          :info="infoMap"
        />
      </div>
      <SuperLikeModal
        :subscribeInfo="subscribeInfo"
        :modalOpen="superLikeModalOpen"
        :categoryList="categoryList"
        :quantity="couponQuantity"
        :isBonusYn="couponIsBonusYn"
        :nick="nick"
        :emoji="'💘'"
        :target="selectTargetUserData"
        :likeType="'notDaily'"
        @superLikeModalOpen="superLikeModalOpen = false"
        @endNext="endNext"
      />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  getData,
  API_BASE_URL,
  openChatViewMapFn,
  openChatViewMap,
  dailyCardInfoMap,
  dailyCardInfoMapFn,
  policeMapFn,
  SS_USER_KEY
} from "@/assets/js/common.js";
import IconMenu from "@/assets/img/icon/icon_menu.svg";
import UserDetailInfo from "@/components/User/UserDetailInfo.vue";
import UserDetailInterview from "@/components/User/UserDetailInterview.vue";
import PageLoadingCheck from "@/components/PageLoadingCheck.vue";
import SuperLikeModal from "@/components/Modal/SuperLikeModal.vue";

export default {
  name: "DailyCardInfo",
  inject: ["alertController"],
  components: {
    UserDetailInfo,

    UserDetailInterview,
    PageLoadingCheck,
    SuperLikeModal
  },
  data() {
    return {
      SS_USER_KEY,
      menuIcon: IconMenu,
      API_BASE_URL,
      infoMap: {},
      nick: "",
      categoryList: "",
      superLikeModalOpen: false,
      coupon: "",
      useTypeHeart: "COUPON",
      DailyCardDetailLodingCheck: false,

      selectTargetUserData: "",
      couponQuantity: 0,
      couponIsBonusYn: "",

      subscribeInfo: {},

      isPartner: "N"
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.selectTargetUserData = dailyCardInfoMap.userKey;
    this.DailyCardDetailLodingCheck = false;
    this.infoMap = {};
    this.getDailyUserInfo();
    this.partnersCheck(dailyCardInfoMap.userKey);
  },
  ionViewDidEnter() {
    // this.$refs.content.$el.scrollToTop(0);
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
  },
  methods: {
    partnersCheck(userKey) {
      getData({
        url: "/partnersCheck",
        param: {
          userKey: userKey
        },
        then: (data) => {
          this.isPartner = data.isPartner;
        }
      });
    },
    scrollToTop() {
      // this.$refs.content.$el.scrollToTop(500);
    },
    /** 경고 팝업창 **/
    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: ["OK"]
      });
      return alert.present();
    },
    getDailyUserInfo() {
      /** todo :
       * (수정필요) openChatViewMap.type과 dailyCardInfoMap.type이 동시에 존재할 경우 해당 로직의 item이 꼬임
       * ionViewDidLeave 할 때 초기화시켜주어서 해결
       *
       **/
      getData({
        url: "/getDailyUserInfo",
        param: {
          userKey: dailyCardInfoMap.userKey,
          pageType: dailyCardInfoMap.type
        },
        then: (data) => {
          if (data.successYn === "N") {
            this.warningAlert(data.message);
          } else {
            this.infoMap = data;
            this.nick = this.infoMap.nick;
          }

          this.DailyCardDetailLodingCheck = true;
        }
      });
    },
    async presentAlertConfirm() {
      const alert = await this.alertController.create({
        // cssClass: 'my-custom-class',
        header: "( " + this.nick + " ) 님을 차단하시겠습니까?",
        message: "더이상 초이스에 해당유저를 노출시키지 않습니다.",
        buttons: [
          {
            text: "취소",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
            }
          },
          {
            text: "차단",
            handler: () => {
              /** 차단하기 **/
              getData({
                url: "/blockByUserInfo",
                param: { targetUserKey: dailyCardInfoMap.userKey },
                then: (data) => {
                  this.warningAlert(data.message);
                }
              });
            }
          }
        ]
      });
      return alert.present();
    },
    buttonClick() {
      this.getChoiceCategoryList();
      this.getUserSubscribeInfo();
      this.getUserCouponDataOne();
      this.superLikeModalOpen = true;
    },
    /** 모달창 카테고리 리스트 **/
    getChoiceCategoryList() {
      getData({
        url: "/getChoiceCategoryList",
        param: {},
        then: (data) => {
          this.categoryList = data;
        }
      });
    },
    btnType(state) {
      if (state === "p") {
        policeMapFn({
          targetKey: dailyCardInfoMap.userKey,
          type: "dailyInfo",
          item: this.infoMap,
          targetId: dailyCardInfoMap.userKey
        });
        this.$router.push("/police");
      } else if (state == "partner") {
        this.$store.state.partnerInfoMap["userKey"] = dailyCardInfoMap.userKey;
        this.$router.push("/partnersProfile");
      } else {
        this.presentAlertConfirm();
      }
    },
    /** 하트어택 보유현황 **/
    getUserCouponDataOne() {
      let couponCd = "CU001";
      getData({
        url: "/getUserCouponDataOne",
        param: { couponCd: couponCd },
        then: (data) => {
          this.coupon = data;
          this.couponQuantity = this.coupon.quantity;
          this.couponIsBonusYn = this.coupon.isBonusYn;

          if (this.coupon.quantity > 0) {
            this.useTypeHeart = "COUPON";
          } else {
            this.useTypeHeart = "HEART";
          }
        }
      });
    },

    /** 구독현황 및 슈퍼라이크 무제한 가능여부 **/
    getUserSubscribeInfo() {
      getData({
        url: "/getUserSubscribeInfo",
        param: { infiniteActionCd: "SUPER_LIKE" },
        then: (data) => {
          this.subscribeInfo = data;
        }
      });
    },

    endNext() {
      this.superLikeModalOpen = false;
    },

    goRouter() {
      if (dailyCardInfoMap.type === "openChatMap") {
        // openChatViewMapFn({
        //   type: "openChatView",
        //   modal: "open",
        //   item: openChatViewMap.mpaInfo
        // });
        this.$router.push("/openChatMap");
      } else if (dailyCardInfoMap.type === "choice") {
        this.$router.push("/choice");
      } else if (dailyCardInfoMap.type === "dailyCardDetail") {
        this.$router.go(-1);
        // dailyCardInfoMapFn({ userKey: dailyCardInfoMap.userKey, likeSeq: dailyCardInfoMap.likeSeq });
        // this.$router.push("/dailyCardDetail");
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style scoped></style>
