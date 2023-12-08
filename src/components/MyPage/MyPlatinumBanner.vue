<template>
  <ion-card
    v-if="subscribeInfo.subscribeYn == 'Y'"
    :class="subscribeInfo.subscribeCd"
  >
    <ion-card-content>
      <div class="info-area">
        <div class="inner">
          <div>
            <h3>
              <ion-text color="light" class="text-bold"
              >{{ subscribeInfo.subscribeCd.replace("_", " ") }} 구독중
              </ion-text>
            </h3>
            <p>
              <ion-row
                class="ion-align-items-center ion-justify-content-center gap-sm flex-wrap"
                @click="goMyLike"
              >
                <ion-text color="light" class="text-md text-bold">
                  내가 받은 좋아요 확인하기
                </ion-text>
                <ion-badge color="danger" v-if="myLikeCnt > 0"> {{ myLikeCnt }}</ion-badge>
              </ion-row>
            </p>
            <!--            <p>-->
            <!--              <ion-text color="light" class="text-sm" @click="cancelSubscribe">-->
            <!--                임시 초기화-->
            <!--              </ion-text>-->
            <!--            </p>-->
          </div>
        </div>
      </div>
      <div class="barcode-area">
        <div class="inner">
          <p>
            <ion-text color="light" class="text-sm text-bold">
              {{ subscribeInfo.subscribeCd.replace("_", " ") }}
            </ion-text>
          </p>
          <div class="barcode">
            <img src="../../assets/img/mypage/barcode.png" alt="barcode" />
          </div>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
  <ion-card v-else class="NOT_SUBSCRIBED">
    <ion-card-content @click="buySubscribe">
      <div class="info-area">
        <div class="inner">
          <div>
            <h3>
              <ion-text color="light" class="text-bold"
              >아직 구독중이 아닙니다
              </ion-text>
            </h3>
            <p>
              <ion-text color="light" class="text-md text-bold">
                구독 하러가기
              </ion-text>
            </p>
          </div>
        </div>
      </div>
      <div class="barcode-area">
        <div class="inner">
          <p>
            <ion-text color="dark" class="text-sm text-bold">
              Not Subscribed
            </ion-text>
          </p>
          <div class="barcode">
            <img src="../../assets/img/mypage/barcode.png" alt="barcode" />
          </div>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>
<script>
import IconNavyPlus from "@/assets/img/icon/icon_platinum.svg";
import IconGoldPass from "@/assets/img/icon/icon_platinum.svg";
import IconPlatinumPass from "@/assets/img/icon/icon_platinum.svg";

export default {
  name: "MyPlatinumBanner",
  props: {
    subscribeInfo: {
      type: Object
    },
    myLikeCnt: {
      type: Number
    }
  },
  data() {
    return {
      navyPlusIcon: IconNavyPlus,
      goldPassIcon: IconGoldPass,
      platinumPassIcon: IconPlatinumPass
    };
  },
  beforeUpdate() {
  },
  updated() {
  },
  methods: {
    buySubscribe() {
      this.$emit("goBuySubscribe");
    },
    goMyLike() {
      this.$emit("goMyLike");
    },
    cancelSubscribe() {
      this.$emit("cancelSubscribe");
    }
  }
};
</script>
<style lang="scss" scoped>
ion-card {
  margin: 0;
  border-radius: var(--ion-border-radius);
  box-shadow: none;

  ion-card-content {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }

  .info-area {
    background: linear-gradient(90deg, #7d7d7d 0%, #707070 100%);
    text-align: center;
    width: calc(100% - 110px);
    padding: 10px;

    .inner {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    h3 {
      ion-text {
        font-size: 22px;
      }
    }

    p {
      + p {
        margin-top: 10px;
      }
    }

    ion-badge {
      padding: 4px 8px;
      border-radius: 16px;
    }
  }

  .barcode-area {
    position: relative;
    background: linear-gradient(90deg, #707070 0%, #777777 100%);
    width: 110px;
    padding: 10px 10px 10px 16px;
    border-left: 1px solid rgba($color: white, $alpha: 0.3);
    text-align: center;

    &::before,
    &::after {
      position: absolute;
      left: -10px;
      display: block;
      content: '';
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: var(--background);
    }

    &::before {
      top: -10px;
    }

    &::after {
      bottom: -10px;
    }

    .inner {
      display: flex;
      align-items: center;
      text-align: center;
      height: 100%;
      gap: 6px;

      p {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
      }

      img {
        max-width: none;
      }
    }
  }

  &.NOT_SUBSCRIBED {
    .info-area {
      .inner {
        border: 1px solid #525252;
        border-radius: 10px;
        padding: 0 10px;
        justify-content: space-between;

        &::before,
        &::after {
          display: block;
          content: '';
          width: 100%;
          height: 3px;
          margin: 10px 0;
          background-image: linear-gradient(
              to right,
              white 10%,
              rgba(255, 255, 255, 0) 0%
          );
          background-position: top;
          background-size: 10px 2px;
          background-repeat: repeat-x;
        }
      }
    }
  }

  &.GOLD_PASS {
    .info-area {
      background: linear-gradient(90deg, #cc9a41 0%, #ccbd5b 100%);

      .inner {
        padding: 0;
        border: 20px solid white;
        border-image: url('../../assets/img/mypage/line_goldclass.svg') 20 / 1 /
          0 stretch;
      }
    }

    .barcode-area {
      background: linear-gradient(90deg, #ccbd5b 0%, #f9f295 100%);
    }
  }

  &.NAVY_PLUS {
    .info-area {
      background: linear-gradient(90deg, #3f1a91 0%, #3836b1 100%);

      .inner {
        padding: 0;
        border: 20px solid white;
        border-image: url('../../assets/img/mypage/line_navyplus.svg') 20 / 1 /
          0 stretch;
      }
    }

    .barcode-area {
      background: linear-gradient(90deg, #3836b1 0%, #4b57b9 100%);
    }
  }
}

@media screen and (max-width: 440px) {
  ion-card {
    ion-card-content {
      .info-area {
        h3 {
          ion-text {
            font-size: 18px;
          }
        }

        p {
          ion-text {
            font-size: 12px;
          }
        }

        ion-badge {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
