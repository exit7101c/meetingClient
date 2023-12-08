<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="$router.go(-1)">
            <ion-icon slot="icon-only" :icon="chevronBack" />
          </ion-button>
        </ion-buttons>
        <ion-title>내가 받은좋아요 확인</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!--  메인   -->
      <swiper
        @swiper="setSwiperRef"
        :direction="'vertical'"
        class="swiper"
        @slideChange="onSlideChange($event)"
        @slideChangeTransitionStart="slideNextTransitionStart($event)"
        @slideChangeTransitionEnd="slideNextTransitionEnd($event)"
        :modules="modules"
        virtual
      >
        <swiper-slide
          v-for="(item, idx) in slides"
          :key="idx"
          :virtualIndex="idx"
        >
          <swiper
            :pagination="{ clickable: true }"
            :navigation="true"
            :modules="modules"
            virtual
          >
            <swiper-slide
              class="user-img"
              v-for="(inner_item, inner_idx) in item.fileList"
              :key="inner_idx"
            >
              <ion-img
                :src="'https://' + inner_item.cdnNm"
                @ionError="
                      $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
                    "
              />
            </swiper-slide>
          </swiper>
          <!--     이미지 하단 프로필      -->
          <DailytDetailInfo
            :item="item"
            @btnDailyCardInfo="btnDailyCardInfo(item.userKey)"
            @btnSuperLike="buttonClick('superLike', slides[idx])"
            @btnLike="buttonClick('like', slides[idx])"
            @btnNope="buttonClick('nope', slides[idx])"
            :type="'dailyDetail'"
          />
        </swiper-slide>
      </swiper>
      <SuperLikeModal
        :subscribeInfo="subscribeInfo"
        :modalOpen="superLikeModalOpen"
        :categoryList="categoryList"
        :quantity="couponQuantity"
        :isBonusYn="couponIsBonusYn"
        :nick="choiceNick"
        :emoji="'💘'"
        :target="selectTargetUserData.userKey"
        :likeType="'daily'"
        @superLikeModalOpen="superLikeModalOpen = false"
        @endNext="endNext()"
      />

    </ion-content>
    <OneMessageModal
      :is-open="messageModal"
      :title="targetNick + '님이 보낸 메시지'"
      :message="slm"
      @ionModalDidDismiss="messageModal = false;"
    />
  </ion-page>
</template>

<script>
import {
  chevronBack,
  close,
  heart,
  trophy,
  cash,
  balloon
} from "ionicons/icons";
import { getData, dailyCardInfoMap, dailyCardInfoMapFn } from "@/assets/js/common.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import SuperLikeModal from "@/components/Modal/SuperLikeModal";
import OneMessageModal from "@/components/Modal/OneMessageModal.vue";
import DailytDetailInfo from "@/components/Choice/DailytDetailInfo.vue";

export default {

  inject: ["alertController"],
  components: {
    Swiper,
    SwiperSlide,
    SuperLikeModal,
    DailytDetailInfo,
    OneMessageModal
  },

  data() {
    const setSwiperRef = (swiper) => {
      this.swiperRef = swiper;
      this.swiperRef.allowSlidePrev = false;
    };
    return {
      close,
      heart,
      trophy,
      cash,
      balloon,
      chevronBack,
      infoMap: {},
      nick: "",
      categoryList: "",
      selectedCategory: "",
      placeholderText: "상대방에게 나의 마음을 표현해주세요.",

      selectTargetUserData: {},

      /* Slide */
      modules: [Navigation, Pagination, Virtual],
      setSwiperRef,
      swiperRef: null,
      isLast: false,
      slides: null,
      superLikeModalOpen: false,
      choiceNick: "",
      coupon: "",
      useTypeHeart: "COUPON",
      useTypeSwipe: "COUPON",
      profileADitem: 1,
      swipeCoupon: { quantity: 0 },
      couponCd: "",
      modalChoice: false,
      isBuffYn: "",
      superLikeMsgModalOpen: false,
      modalText: "",
      readonlyText: false,
      slm: "",
      likeSeq: "",
      targetNick: "",

      couponQuantity: 0,
      couponIsBonusYn: "",

      subscribeInfo: {},
      messageModal: false
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.infoMap = {};
    // this.getDailyUserInfo();
    this.getChoiceOne();

    this.targetNick = dailyCardInfoMap.nick;
    this.slm = dailyCardInfoMap.superLikeMessage;
    this.likeSeq = dailyCardInfoMap.likeSeq;
    if (dailyCardInfoMap.superLikeMessage != undefined && dailyCardInfoMap.superLikeMessage != null && dailyCardInfoMap.superLikeMessage != "") {
      // this.superLikeMsgModalOpen = true;
      this.messageModal = true;
    }
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
    this.isLast = true;
  },
  methods: {
    btnDailyCardInfo(userKey) {
      dailyCardInfoMapFn({ userKey: userKey, type: "dailyCardDetail", likeSeq: this.likeSeq });
      this.$router.push("/dailyCardInfo");
    },
    getChoiceOne() {
      this.slides = [];
      getData({
        url: "/getChoiceOne",
        param: { targetUserId: dailyCardInfoMap.userKey, likeSeq: dailyCardInfoMap.likeSeq },
        then: (data) => {
          this.$nextTick(() => {
            this.slides = data;
            this.swiperRef.allowSlidePrev = false;
            this.isLast = false;
            // this.swiperRef.slidePrev();
            // this.swiperRef.slideTo(0,1000);
          });
        }
      });
    },
    onSlideChange(e) {
      if (this.swiperActiveIndex > e.activeIndex) {
        // 뒤로가기
        this.swiperActiveIndex = e.activeIndex;
      }
    },
    slideNextTransitionStart(e) {
      let self = this;

      if (this.swiperActiveIndex < e.activeIndex) {
        // 스킵처리
        if (this.isSkip) {
          this.setSkip(this.slides[this.swiperActiveIndex], "swipe");
        }
        this.swiperActiveIndex = e.activeIndex;
        this.swiperRef.allowSlidePrev = false;

        // 하단 스와이프 0.5초 막기
        this.swiperRef.allowTouchMove = false;
        setTimeout(function() {
          self.swiperRef.allowTouchMove = true;
        }, 500);
      } else if (this.swiperActiveIndex > e.activeIndex) {
        // 뒤로가기
        this.swiperActiveIndex = e.activeIndex;
      }

      if (this.slides.length > 0 && this.slides.length === e.activeIndex + 1) {
        this.reachEnd();
      }
    },
    slideNextTransitionEnd(e) {
      this.isSkip = true;
      this.swiperActiveIndex = e.activeIndex;
      this.swiperRef.allowSlidePrev = false;
    },
    /** 하트어택 보유현황 **/
    getUserCouponDataOne(type) {
      let couponCd = "";
      if (type === "superLike") {
        couponCd = "CU001";
      } else if (type === "honey") {
        couponCd = "CU002";
      }

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


    /////////////////////////////////////////////////////
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
      getData({
        url: "/getDailyUserInfo",
        param: { userKey: dailyCardInfoMap.userKey, pageType: dailyCardInfoMap.pageType },
        then: (data) => {
          if (data.successYn === "N") {
            this.warningAlert(data.message);
          } else {
            this.infoMap = data;
            this.nick = this.infoMap.nick;
          }
        }
      });
    },
    /** 버튼 터치하면 다음 슬라이드로 이동 **/
    buttonClick(type, item) {
      if (type === "nope") {
        this.isSkip = false;
        this.setNope(item, "click");
      } else if (type === "like") {
        this.isSkip = false;
        this.setLike(item, "click");
      } else if (type === "superLike") {
        this.getChoiceCategoryList();
        this.getUserSubscribeInfo();
        this.getUserCouponDataOne("superLike");
        this.choiceNick = item.nick;
        this.superLikeModalOpen = true;

        this.selectTargetUserData = item;
      }

      this.swiperRef.allowSlidePrev = false;
    },
    setLike(item, type) {

      getData({
        url: "/setLike",
        param: {
          userId: item.userKey,
          likeType: "daily",
          likeSeq: this.likeSeq
        },
        then: (data) => {
          if (data.successYn === "N") {
            this.warningAlert(data.message);
          } else if (data.successYn.includes("NI")) {
            if (data.successYn == "NI_HI") { // have item
              this.warningConfirm(data.message, () => {
                this.getSwipeCouponDataOne();
                getData({
                  url: "/useSwiperPlus",
                  param: {
                    couponCd: "CU004",
                    useType: this.useTypeSwipe, // 'HEART', 'COUPON' / getUserCouponDataOne 에서 quantity(현재쿠폰수) 가 0 일경우 HEART 로 보내주면 됨
                    itemCd: this.useTypeSwipe === "HEART" ? "IT004_01" : "", // useType 'HEART' 일 시 1개 수량인 아이템코드
                    pointCd: this.useTypeSwipe === "HEART" ? "BUY" : "", // useType 'HEART' 일 시 BUY
                    userId: item.userKey,
                    likeType: "daily",
                    likeSeq: this.likeSeq
                  },
                  then: (data) => {
                    if (data.successYn === "N" || data.successYn === "NE") {
                      this.warningAlert(data.message);
                    } else if (data.successYn === "NH") {
                      this.warningAlertNH(data.message);
                    } else {
                      if(data.successYn == "MATCH"){
                        this.warningAlertMatch(data.message);
                      }
                      for (let i in this.$store.state.likeReceivedList) {
                        if(this.$store.state.likeReceivedList[i].likeSeq == this.likeSeq){
                          this.$store.state.likeReceivedList.splice(i, 1);
                          break;
                        }
                      }
                      this.$router.go(-1);
                    }
                  }
                });
              });
            } else if (data.successYn == "NI_NHI") {  // non have item
              this.warningConfirm(data.message, () => {
                this.$router.push("/store");
              });
            }
          } else {
            if (data.successYn == "MATCH") {
              this.warningAlertMatch(data.message);
            }
            for (let i in this.$store.state.likeReceivedList) {
              if(this.$store.state.likeReceivedList[i].likeSeq == this.likeSeq){
                this.$store.state.likeReceivedList.splice(i, 1);
                break;
              }
            }
            this.$router.go(-1);
          }
        }
      });
    },
    setNope(item, type) {

      getData({
        url: "/setNope",
        param: {
          userId: item.userKey,
          likeType: "daily",
          likeSeq: this.likeSeq
        },
        then: (data) => {
          if (data.successYn === "N") {
            this.warningAlert(data.message);
          } else {
            this.warningAlert(data.message);
            for (let i in this.$store.state.likeReceivedList) {
              if(this.$store.state.likeReceivedList[i].likeSeq == this.likeSeq){
                this.$store.state.likeReceivedList.splice(i, 1);
                break;
              }
            }
            this.$router.go(-1);
          }
        }
      });
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
    endNext() {
      this.superLikeModalOpen = false;

      for (let i in this.$store.state.likeReceivedList) {
        if(this.$store.state.likeReceivedList[i].likeSeq == this.likeSeq){
          this.$store.state.likeReceivedList.splice(i, 1);
          break;
        }
      }
      this.$router.go(-1);
    },
    /** 추가 좋아요 보유현황 **/
    getSwipeCouponDataOne() {
      getData({
        url: "/getUserCouponDataOne",
        param: { couponCd: "CU004" },
        then: (data) => {
          this.swipeCoupon = data;

          if (this.swipeCoupon.quantity > 0) {
            this.useTypeSwipe = "COUPON";
          } else {
            this.useTypeSwipe = "HEART";
          }
        }
      });
    },
    /** 경고 팝업창 **/
    async warningAlertMatch(message) {
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
              this.$router.push("/message");
            }
          }
        ]
      });
      return alert.present();
    },
    /** 경고 컨펌창 **/
    async warningConfirm(message, callBack) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: [
          {
            text: "아니요",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
            }
          },
          {
            text: "네",
            handler: () => {
              callBack();
            }
          }
        ]
      });
      return alert.present();
    },
    /** 경고 팝업창 **/
    async warningAlertNH(message) {
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
              this.$router.push("/store");
            }
          }
        ]
      });
      return alert.present();
    }
  }
};
</script>

<style scoped lang="scss">
/* ---------------- slider -------------------- */
.swiper {
  width: 100%;
  height: 100%;

  .swiper-slide {
    ion-img {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0;

      &:before {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50%;
        padding-top: 50%;
        background: linear-gradient(0, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
      }
    }
  }
}

//
//ion-modal {
//  --border-radius: 10px;
//
//  &.custom-modal {
//    --width: 100%;
//    --height: 460px;
//
//    ion-select {
//      margin: 10px 0;
//      padding: 0;
//      font-size: 10px;
//    }
//
//    icon-col {
//      --padding-start: 0;
//      --padding-end: 0;
//    }
//  }
//
//  &.alert-modal {
//    padding: 0 18px;
//    --width: 400px;
//    --height: 250px;
//  }
//}

/*!* 내용 입력창*!*/
ion-textarea {
  --color: white;

  + ion-note {
    --color: white;
  }
}

custom-header {
  font-family: ‘appfontH’;
}

.modal-btn {
  width: 90%;
  text-align: center;
  font-weight: bolder;
  font-size: 16px;
  padding: 15px;
  color: gray;
  border-radius: 15px;
  background-color: #e2ded9;
}

.modal-btn:active {
  color: white;
  background-color: #b3afa8;
}

.custom-textarea[disabled] {
  color: black;
}

.honeyModal {
  --height: 300px;
  --width: 350px;
  --border-radius: 7px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
  0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.modal-btn-honey {
  text-align: center;
  font-weight: bolder;
  font-size: 22px;
  color: black;
  margin: 5px;
}
</style>
