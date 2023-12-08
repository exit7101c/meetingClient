<template>
  <ion-page>
    <custom-header page-name="ImsiTapView" class="main-header">
      <BackButton />
    </custom-header>
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
            class="img-slider"
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
          <!--          <div class="content">-->
          <!--            <ChoiceFilterButton @click="filterClick" />-->
          <!--          </div>-->
          <custom-button color="transparent" @click="buttonClick('nope', slides[idx])" class="btn-ban">
            <ion-icon :icon="ban" ios />
          </custom-button>
          <!--          <ChoiceBoost-->
          <!--            :calTimeStr="calTimeStr"-->
          <!--            :boostCheck="remainingTime > 0"-->
          <!--            @click="buttonClick('honey')"-->
          <!--          />-->
          <!--     이미지 하단 프로필      -->
          <ChoiceProfileInfo
            :item="item"
            :profilType="'imsiTap'"
            @btnChoiceBack="beforeCancelBtn()"
            @btnSuperLike="buttonClick('superLike', slides[idx])"
            @btnLike="buttonClick('like', slides[idx])"
            @btnHoney="buttonClick('skip', slides[idx])"
            @btnNope="buttonClick('nope', slides[idx])"
            @reSearch="getChoice"
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
      <ChoiceFilterModal
        :is-open="isChoiceModal"
        title="사용자 필터"
        ok-label="변경"
        cancel-label="취소"
        @ok="filterSave"
        @cancel="isChoiceModal = false"
        @ionModalDidDismiss="isChoiceModal = false"
      >
        <ion-row>
          <ion-col size="12">
            <ion-text color="light">나와의 거리</ion-text>
          </ion-col>
          <ion-col size="12">
            <ion-range
              aria-label="distance"
              min="10"
              max="1000"
              step="10"
              :value="filteredOptions.distance"
              @ionChange="onChangeFilteredDistance"
            >
              <ion-label color="light" slot="end" class="text-sm">
                {{ filteredOptions.distance }} km
              </ion-label>
            </ion-range>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-text color="light">나이</ion-text>
          </ion-col>
          <ion-col size="12">
            <ion-range
              aria-label="age"
              min="19"
              max="100"
              step="1"
              :dual-knobs="true"
              :value="{
                            lower: filteredOptions.ageMin,
                            upper: filteredOptions.ageMax
                          }"
              @ionChange="onChangeFilteredAge"
            >
              <ion-label color="light" slot="end" class="text-sm">
                {{ filteredOptions.ageMin }} ~ {{ filteredOptions.ageMax }} 세
              </ion-label>
            </ion-range>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-row class="gap-lg">
              <ion-text color="light">성향 (중복 선택 가능)</ion-text>
              <NavyPlusLabel />
            </ion-row>
          </ion-col>
          <ion-col size="12">
            <ion-list lines="none">
              <div class="img-checkbox-group">
                <ion-grid class="gap-sm">
                  <ion-row>
                    <ion-col
                      size="2"
                      v-for="data in iconList"
                      :key="data.iconCd"
                    >
                      <ion-item class="img-checkbox-button" @click="filterCheckBoxClick(data.iconCd)">
                        <ion-label>
                          <ion-img :src="'https://' + data.cdnThumbNm" />
                          <ion-text color="light">{{ data.iconNm }}</ion-text>
                        </ion-label>
                        <ion-checkbox
                          :disabled="subscribeInfo.subscribeYn == 'N'"
                          :value="data.iconCd"
                          v-model="data.checked"
                        ></ion-checkbox>
                        <!--                        @ionChange="onChangeSelectedCharacters"-->
                      </ion-item>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </div>
            </ion-list>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-row class="gap-lg">
              <ion-text color="light">광고 제거</ion-text>
              <NavyPlusLabel />
            </ion-row>
            <p class="mt-1">
              <ion-text color="light" class="text-sm sub-text04"
              >광고를 더이상 보지 않습니다
              </ion-text
              >
            </p>
          </ion-col>
          <ion-col size="12">
            <ion-item lines="none" class="pl-0">
              <ion-label>
                <ion-text color="light">
                  &nbsp;&nbsp; {{
                    filteredOptions.choiceAdd ? " 활성화됨" : "비 활성화됨"
                  }}
                </ion-text
                >
              </ion-label>
              <ion-toggle
                :disabled="subscribeInfo.subscribeYn == 'N'"
                slot="start"
                mode="ios"
                :checked="filteredOptions.choiceAdd"
                @click="onChangeFilteredChoiceAdd"
              ></ion-toggle>
            </ion-item>
          </ion-col>
        </ion-row>
      </ChoiceFilterModal>
    </ion-content>

  </ion-page>
</template>

<script>
import { getData, dailyCardInfoMap, dailyCardInfoMapFn } from "@/assets/js/common.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import SuperLikeModal from "@/components/Modal/SuperLikeModal";
import OneMessageModal from "@/components/Modal/OneMessageModal.vue";
import DailytDetailInfo from "@/components/Choice/DailytDetailInfo.vue";
import ChoiceProfileInfo from "@/components/Choice/ChoiceProfileInfo.vue";
import ChoiceBoost from "@/components/Choice/ChoiceBoost.vue";
import ChoiceFilterButton from "@/components/Choice/ChoiceFilterButton.vue";
import ChoiceFilterModal from "@/components/Choice/ChoiceFilterModal.vue";

import { ban } from "ionicons/icons";

export default {

  inject: ["alertController"],
  components: {
    Swiper,
    SwiperSlide,
    SuperLikeModal,
    DailytDetailInfo,
    OneMessageModal,
    ChoiceProfileInfo,
    ChoiceBoost,
    ChoiceFilterButton,
    ChoiceFilterModal
  },

  data() {
    const setSwiperRef = (swiper) => {
      this.swiperRef = swiper;
      this.swiperRef.allowSlidePrev = false;
    };
    return {
      ban,
      buySwipeOpen: false,

      currentTab: "newbie",

      categoryList: [],
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
      remainingTime: "",
      remainingTimeStr: "",

      interval: null,
      calTimeStr: "00:00:00",
      cntEnd: false,

      swiperActiveIndex: 0,
      isSkip: true,

      couponQuantity: 0,
      couponIsBonusYn: "",

      subscribeInfo: {},
      gifTest: false,
      alertMessage: false,

      // TODO: 필터
      isChoiceModal: false,
      filteredOptions: {
        distance: 1000, // 거리
        ageMin: 19,
        ageMax: 100,
        characters: [],
        choiceAdd: false
      },
      iconList: [], // 성향 캐릭터 목록

      isUsingBoost: false,

      choiceYn: "N"
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
    filterClick() {
      this.isChoiceModal = true;
      this.filteredOptions.characters = [];

      getData({
        url: "/getChoiceFileter",
        param: {},
        then: (data) => {
          if (data.successYn == "Y") {
            // 저장내역이 있는 경우
            this.filteredOptions.distance = data.result.kmMax;
            this.filteredOptions.ageMin = data.result.ageMin;
            this.filteredOptions.ageMax = data.result.ageMax;
            this.filteredOptions.characters = data.result.icon.split(",");
            this.filteredOptions.choiceAdd = data.result.choiceAdd == "Y" ? false : true;
          } else {
            // 저장내역이 없는 경우
            this.filteredOptions = {
              distance: 1000, // 거리
              ageMin: 19,
              ageMax: 100,
              characters: ["A", "B", "C", "D", "E", "F"],
              choiceAdd: false
            };
          }

          for (let i = 0; this.iconList.length > i; i++) {
            if (this.filteredOptions.characters.includes(this.iconList[i].iconCd)) {
              this.iconList[i].checked = true;
            } else {
              this.iconList[i].checked = false;
            }
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
      this.gifTest = false;
      getData({
        url: "/setLike",
        param: {
          userId: item.userKey,
          likeType: "choice"
        },
        then: (data) => {
          if (data.successYn === "N") {
            this.warningAlert(data.message);
          } else if (data.successYn.includes("NI")) {
            if (data.successYn == "NI_HI") {
              // have item
              this.warningConfirm(data.message, () => {
                this.getSwipeCouponDataOne();
                // this.warningAlertNI(data.message, item.userKey);
                getData({
                  url: "/useSwiperPlus",
                  param: {
                    couponCd: "CU004",
                    useType: this.useTypeSwipe, // 'HEART', 'COUPON' / getUserCouponDataOne 에서 quantity(현재쿠폰수) 가 0 일경우 HEART 로 보내주면 됨
                    itemCd: this.useTypeSwipe === "HEART" ? "IT004_01" : "", // useType 'HEART' 일 시 1개 수량인 아이템코드
                    pointCd: this.useTypeSwipe === "HEART" ? "BUY" : "", // useType 'HEART' 일 시 BUY
                    userId: item.userKey,
                    likeType: "choice"
                  },
                  then: (data) => {
                    if (data.successYn === "N" || data.successYn === "NE") {
                      this.warningAlert(data.message);
                    } else if (data.successYn === "NH") {
                      this.warningAlertNH(data.message);
                    } else if (data.successYn === "MATCH") {
                      this.warningAlertMatch(data.message);
                      this.swiperRef.slideNext();
                    } else {
                      this.swiperRef.slideNext();
                    }
                  }
                });
              });
            } else if (data.successYn == "NI_NHI") {
              // non have item
              this.warningConfirm(data.message, () => {
                this.$router.push("/store");
              });
            }
          } else if (data.successYn === "MATCH") {
            this.warningAlertMatch(data.message);
            this.swiperRef.slideNext();
          } else {
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
          likeType: "choice"
        },
        then: (data) => {
          if (data.successYn === "N") {
            this.warningAlert(data.message);
          } else {
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
        if (this.$store.state.likeReceivedList[i].likeSeq == this.likeSeq) {
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
    onChangeFilteredChoiceAdd() {
      if (this.subscribeInfo.subscribeYn == "Y") {
        // ion-toggle 첫 클릭 시 value값은 바뀌지만 true / false 인식이 안되는 현상이 있음
        // javascript 동작이슈인지 불명확,,, event queue에 강제로 박아넣고 stack 실행
        setTimeout(() => {
          this.filteredOptions.choiceAdd = this.filteredOptions.choiceAdd === true ? false : true;
        }, 0);
      }
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

.btn-ban {
  position: absolute;
  top: 28px;
  left: 0;
  z-index: 10;
  --border-radius: 50%;
  --padding-start: 0;
  --padding-end: 0;
  margin: 0;
  width: 46px;
  height: 46px;

  &::part(native) {
    box-shadow: none;
    border-radius: 50%;
  }

  ion-icon {
    font-size: 2em;
    margin: 0 auto;
  }
}
</style>
