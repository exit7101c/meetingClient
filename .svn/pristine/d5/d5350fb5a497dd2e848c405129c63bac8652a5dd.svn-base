<template>
  <ion-modal class="custom-modal">
    <ion-content>
      <ion-toolbar class="layout-container">
        <ion-title color="warning">
          <template v-if="isBuffYn == 'N'"> 🔥</template>
          현재 모임 순위
        </ion-title
        >
        <ion-buttons slot="end">
          <custom-button @click="handleClose" class="btn-close">
            <ion-icon
              slot="icon-only"
              color="secondary"
              :icon="closeIcon"
            ></ion-icon>
          </custom-button>
        </ion-buttons>
      </ion-toolbar>
      <div class="content ion-padding">
        <div class="row-box">
          <ion-text color="light" class="text-bold">
            <span class="text-rank">{{ openchatRank }}</span>
            <span class="text-xl">/ {{ totalRoom }}</span></ion-text
          >
        </div>
        <div class="row-box">
          <ion-label>
            <ion-text color="warning" class="text-bold"
            ><span class="text-xs">{{ useCnt }}개 사용중</span><br /><span
              class="text-sm"
            >{{ calTimeStr }}</span
            ></ion-text
            >
          </ion-label>
        </div>
        <div class="row-box">
          <p>
            <ion-text>모임 부스트를 사용해서</ion-text>
            <br />
            <ion-text>모임 순위를 높여보세요!</ion-text>
            <br />
            <ion-text class="text-sm">(5시간 동안 모임 인기도 +100)</ion-text>
          </p>
        </div>
        <div class="row-box">
          <custom-button
            color="primary"
            shape="round"
            size="large"
            expand="block"
            @click="handleClick"
            class="btn-boost"
          >
            <ion-row class="ion-align-items-center ion-justify-content-between">
              <ion-text class="text-sm"
              >남은 부스트 |
                <span class="text-bold">{{ coupon.quantity }}개</span></ion-text
              >
              <ion-text class="text-bold text-lg">부스트 사용하기</ion-text>
            </ion-row>
          </custom-button>
        </div>
      </div>
    </ion-content>
  </ion-modal>
</template>
<script>
import { flameOutline } from "ionicons/icons";
import IconClose from "@/assets/img/icon/icon_close.svg";

export default {
  name: "CustomBoostModal",
  props: {
    coupon: {
      type: Object
    },
    isBuffYn: {
      type: String
    },
    openchatRank: {
      type: Number
    },
    totalRoom: {
      type: Number
    },
    useCnt: {
      type: Number
    },
    calTimeStr: {
      type: String
    }
  },
  data() {
    return {
      flameOutline,
      closeIcon: IconClose
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleClick() {
      this.$emit("event");
    }
  }
};
</script>
<style lang="scss" scoped>
ion-modal {
  padding: 0 18px;
  --height: 420px;

  ion-content {
    &::part(scroll) {
      overflow: hidden;
    }
  }

  .content.ion-padding {
    &:before {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url('@/assets/img/icon/icon_boost.svg');
      background-repeat: no-repeat;
      background-position: center center;
      z-index: 1;
      background-size: 200px;
      opacity: 0.1;
    }
  }

  > ion-content {
    position: relative;
    text-align: center;

    ion-toolbar {
      position: relative;
      z-index: 2;
      padding: 10px 0;

      ion-title {
        font-size: 16px;
      }

      .btn-close {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    .row-box {
      position: relative;
      z-index: 2;

      span {
        line-height: 1;
      }

      p {
        font-size: 22px;
        font-weight: bold;
      }

      .text-rank {
        font-size: 48px;
      }
    }
  }

  .btn-boost {
    ion-row {
      width: 100%;
    }
  }
}
</style>
