<template>
  <swiper
    :modules="modules"
    :free-mode="true"
    :space-between="8"
    slides-per-view="auto"
  >
    <swiper-slide v-for="(item, index) in itemList" :key="index">
      <ion-card @click="contest(item)" mode="ios">
        <ion-img
          :src="'https://' + item.cdnThumbNm"
          @ionError="
            $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
          "
        />
        <ion-card-header>
          <ion-card-title>
            <ion-text color="light" class="text-sm">{{ item.nick }}</ion-text>
          </ion-card-title>
          <ion-card-subtitle>
            <ion-icon :icon="voteIcon"></ion-icon>
            <ion-text
              >&nbsp;{{ item.votesCnt }}표
            </ion-text>
          </ion-card-subtitle>
        </ion-card-header>
        <RankBadge :index="index" v-if="contestState == 'START'" />
      </ion-card>
    </swiper-slide>
  </swiper>
  <HotConestVoteModal
    :is-open="modalContest"
    :checkDisabled="checkDisabled"
    :item="modalItem"
    :coupon="coupon"
    @ionModalDidDismiss="modalContest = false"
    @useContestVote="useContestVote((checkDisabled = false))"
  />
</template>
<script>
import { getData, communityViewMapFn } from '@/assets/js/common';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Autoplay, Pagination, Navigation } from 'swiper/modules';
import HotConestVoteModal from '@/components/Contest/HotConestVoteModal.vue';
import IconVote from '@/assets/img/icon/icon_vote.svg';
import RankBadge from '@/components/Common/RankBadge.vue';

export default {
  name: 'MainContestSlider',
  inject: ['alertController'],
  components: {
    Swiper,
    SwiperSlide,
    HotConestVoteModal,
    RankBadge
  },
  props: {
    itemList: {
      type: Array
    },
    loaded: {
      type: Boolean
    },
    contestState: {
      type: String
    }
  },
  data() {
    return {
      voteIcon: IconVote,
      modules: [FreeMode, Autoplay, Pagination, Navigation],
      modalContest: false,

      contestList: [],
      modalItem: '',

      /** 쿠폰 **/
      coupon: '',
      useTypeHeart: 'COUPON',

      checkDisabled: true
    };
  },
  methods: {
    contest(data) {
      /**
       * contestState = START
       * 컨테스트 전체보기로 이동 */
      if (this.contestState == 'START') {
        this.$router.push('/contest');
      } else {
        communityViewMapFn({
          article: data.articleKey,
          type: 'contestDetail',
          targetUserKey: data.userKey
        });
        this.$router.push('/contestDetail');
      }
    },
    /** 투표권 보유현황 **/
    getUserCouponDataOne() {
      getData({
        url: '/getUserCouponDataOne',
        param: { couponCd: 'CU012' },
        then: (data) => {
          this.coupon = data;
          if (this.coupon.quantity > 0) {
            this.useTypeHeart = 'COUPON';
          } else {
            this.useTypeHeart = 'HEART';
          }
        }
      });
    },
    useContestVote() {
      getData({
        url: '/useContestVote',
        param: {
          couponCd: 'CU012',
          useType: this.useTypeHeart, // 'HEART', 'COUPON' / getUserCouponDataOne 에서 quantity(현재쿠폰수) 가 0 일경우 HEART 로 보내주면 됨
          itemCd: this.useTypeHeart === 'HEART' ? 'IT012_01' : '', // useType 'HEART' 일 시 1개 수량인 아이템코드 IT002_01
          pointCd: this.useTypeHeart === 'HEART' ? 'BUY' : '', // useType 'HEART' 일 시 BUY
          contestType: 1, // 진행중인 contest_type
          targetUserKey: this.modalItem.userKey // 선택한 userId
        },
        then: (data) => {
          if (data.successYn === 'N' || data.successYn === 'NE') {
            this.warningAlert(data.message);
            this.$refs.modal.$el.dismiss();
          } else if (data.successYn === 'NH') {
            this.warningAlertNH(data.message);
          } else {
            this.warningAlert(data.message);
            this.modalContest = false;
            this.$emit('contestList');
          }
          setTimeout(() => {
            this.checkDisabled = true;
          }, 500);
        }
      });
    },

    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: '',
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      return alert.present();
    },
    /** 경고 팝업창 **/
    async warningAlertNH(message) {
      const alert = await this.alertController.create({
        header: '',
        subHeader: '',
        message: message,
        buttons: [
          {
            text: '취소',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          },
          {
            text: '이동',
            handler: () => {
              this.$router.push('/store');
              this.modalContest = false;
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
$width: 104px;
$height: 104px;
.swiper {
  padding: 0;
  margin: 0;
 

  .swiper-slide {
    width: 40%;
    max-width: $width;
  }

  ion-card {
    position: relative;
    margin: 4px 0 0;
    border-radius: var(--ion-border-radius);
    background: transparent !important;
    contain: inherit;
    overflow: visible;

    ion-img,
    .skeleton-img {
      width: $width;
      height: $height;
      object-fit: cover;
    }


    ion-card-header {
      margin-top: 10px;
      padding: 0;
      text-align: left;

      ion-card-title {
        --color: white;
        font-size: 12px;
      }

      ion-card-subtitle {
        display: inline-flex;
        gap: 4px;
        align-items: center;
        --color: var(--ion-color-primary);
        font-size: 12px;
        width: 100%;
        margin-top:4px;

        ion-text {
          width: 100%;
        }
      }
    }
  }
}

.contestModal {
  --height: 560px;
  --width: 350px;
  --border-radius: 15px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.modal-btn {
  background-color: #aa3bf8;
  border-radius: 20px;
  width: 95%;
  text-align: center;
  font-size: 22px;
  color: #ffffff;
}
</style>
