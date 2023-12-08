<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>
          <!-- TODO : 내가 구독한 플랜 변수 필요 subscribedPlan (임의) -->
<!--          {{-->
<!--            subscribedPlan !== 'GOLD_PASS'-->
<!--              ? subscribedPlan === 'NAVY_PLUS'-->
<!--                ? '이미 NAVY PLUS를 구독중입니다 '-->
<!--                : '어떤 플랜이 좋을까요!'-->
<!--              : '이미 GOLD PASS를 구독중입니다 '-->
<!--          }}-->
          구독
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!-- TODO : 내가 구독한 플랜 변수 필요 subscribedPlan (임의) -->
      <div
        class="row-list"
        :class="subscribedPlan === 'NAVY_PLUS' ? 'NAVY_PLUS' : 'GOLD_PASS'"
      >
        <SubscriptionItem
          v-for="item in itemList"
          :selected="selected"
          :subscribedPlan="subscribedPlan"
          v-bind:key="item.subscribeCd"
          :item="item"
          @click="selectedPlan(item)"
        />
      </div>
    </ion-content>
    <ion-footer>
      <div class="btn-group">
        <custom-button
          color="primary"
          size="large"
          expand="block"
          :disabled="!selected"
          @click="startSubscribe"
        >
          플랜 결제하기
        </custom-button>
      </div>
      <div class="row-box">
        <ion-row class="ion-align-items-center ion-justify-content-center">
          <ion-text class="text-sm sub-text01" @click="goRouter('b')"
            >이용약관
          </ion-text>
          <ion-text class="text-sm sub-text01">&nbsp;/&nbsp;</ion-text>
          <ion-text @click="goRouter('c')" class="text-sm sub-text01"
            >개인정보 취급방침
          </ion-text>
        </ion-row>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script>
import { getData } from '@/assets/js/common';
import SubscriptionItem from '@/components/Subscription/SubscriptionItem.vue';

export default {
  name: 'Subscription_Shop',
  inject: ['alertController'],
  components: {
    SubscriptionItem
  },
  data() {
    return {
      selected: null,
      subscribeCd: null,
      subscribedPlan: 'NAVY_PLUS', // TODO : 개발 필요
      itemList: [
        {
          a: 'NAVY PLUS',
          b: '네이비 플러스',
          c: '9,900',
          d: '1개월',
          e: '받은 좋아요 확인, 매달 드링크 1개 지급, 광고숨기기, 지도에서 전국에있는 모임 찾기',
          f: 'NAVY_PLUS'
        },
        {
          a: 'GOLD PASS',
          b: '골드 패스',
          c: '19,900',
          d: '1개월',
          e: '받은 좋아요 확인, 하루 라이크 무제한, 매달 드링크 5개 지급, 매달 모임부스트 2개 지급, 광고숨기기, 지도에서 전국에있는 모임 찾기',
          f: 'GOLD_PASS'
        },
        {
          a: 'PLATINUM PASS',
          b: '플래티넘 패스',
          c: '29,900',
          d: '1개월',
          e: '받은 좋아요 확인, 하루 라이크 무제한, 슈파러이크 무제한, 매달 드링크 10개 지급, 매달 모임부스트 5개 지급, 매달 ProfileAD 1개지급, 광고숨기기, 지도에서 전국에있는 모임 찾기',
          f: 'PLATINUM_PASS'
        }
      ]
    };
  },
  ionViewWillEnter() {
    // 구독 구입가능 리스트 조회
    this.getSubscribeList();
  },
  ionViewDidLeave() {},
  mounted() {},
  methods: {
    getSubscribeList() {
      getData({
        url: '/getSubscribeList',
        param: {},
        then: (data) => {
          this.itemList = data;
        }
      });
    },
    selectedPlan(item) {
      if (this.subscribedPlan !== item.subscribeCd) {
        if (this.selected === item.subscribeCd) {
          this.selected = null;
        } else {
          this.selected = item.subscribeCd;
        }
        this.subscribeCd = item.subscribeCd;
      }
      return;
    },
    startSubscribe() {
      getData({
        url: '/buySubscribeCheck',
        param: {
          subscribeCd: this.subscribeCd
        },
        then: (data) => {
          if (data.successYn == 'Y') {
            if (data.subscribeYn == 'N') {
              // 구독 진행
              getData({
                url: '/buySubscribeComplete',
                param: {
                  subscribeCd: this.subscribeCd
                },
                then: (data) => {
                  this.warningAlert(data.message);
                }
              });
            } else {
              this.warningAlert(data.message);
            }
          } else {
            this.warningAlert(data.message);
          }
        }
      });
    },
    goRouter(type) {
      if (type === 's') {
      } else if (type === 'b') {
        this.$router.go(-1);
      } else if (type === 'c') {
        this.$router.go(-1);
      }
    },
    /** 경고 팝업창 **/
    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: '',
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      return alert.present();
    }
  }
};
</script>

<style lang="scss" scoped>
.row-list {
  display: flex;
  flex-direction: column;
  + .row-list {
    margin-top: 40px;
  }
  &.NAVY_PLUS {
    flex-direction: column-reverse;

    > div {
      &:nth-child(1) {
        margin-top: 40px;
      }
      &:nth-child(2) {
        margin-top: 0;
      }
    }
  }
}
</style>
