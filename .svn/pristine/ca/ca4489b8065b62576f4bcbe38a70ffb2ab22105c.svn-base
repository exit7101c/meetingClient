<template>
  <div class="store-list-item" @click="itemConfirmBtn(item)">
    <ion-chip class="chip-buy-count shape-round">
      {{ 3 - item.buyCnt }}/3
    </ion-chip>
    <div class="item">
      <ion-img
        v-if="item.cdnNm !== null"
        :src="'https://' + item.cdnNm"
        style=""
      />
      <ion-img v-else :src="superLikeGift"></ion-img>
      <div class="item-name">
        <ion-text color="light" class="text-bold text-sm">
          컨테스트 {{ title }}
        </ion-text>

        <ion-chip color="light" class="chip-vote-count">
          투표권 {{ item.sumPayment }}장
        </ion-chip>
      </div>
    </div>
    <div class="price">
      <ion-icon :icon="heartIcon"></ion-icon>
      <ion-text color="light"
        ><strong>{{ item.priceHeart }} 개</strong></ion-text
      >
    </div>
  </div>
</template>
<script>
import { FreeMode, Autoplay, Pagination, Navigation } from 'swiper/modules';

import IconSuperlikeGift from '@/assets/img/store/superlike_gift.png';
import IconHeart from '@/assets/img/icon/icon_store_heart.svg';

export default {
  name: 'StoreVoteListItem',
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    item: {
      type: Object
    }
  },
  data() {
    return {
      modules: [FreeMode, Autoplay, Pagination, Navigation],
      superLikeGift: IconSuperlikeGift,
      heartIcon: IconHeart
    };
  },
  methods: {
    itemConfirmBtn(item) {
      this.$emit('itemConfirmBtn', item);
    }
  }
};
</script>
<style lang="scss" scoped>
.store-list-item {
  position: relative;
  padding-top: 8px;
  padding-right: 8px;
  .chip-buy-count {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #d56eb0;
    color: white;
    z-index: 2;
    margin: 0;
    height: 16px;
    font-size: 10px;
  }
  .item {
    position: relative;
    margin: 0;
    padding: 10px 14px;
    border-radius: var(--ion-border-radius);
    background: linear-gradient(135deg, #ab0baf 0%, #fa8539 100%);
    height: 100%;
    text-align: center;

    ion-img {
      margin: 0 auto;
      width: 60px;
      height: 60px;
    }
    .item-name {
      text-align: center;
      margin: 8px 0 0;
      ion-text {
        display: block;
        line-height: 1.2;
      }
      ion-chip {
        width: 100%;
        justify-content: center;
        background: rgba(59, 59, 103, 0.34);
        filter: hue-rotate(135deg);
        font-size: 12px;
        white-space: nowrap;
        margin: 8px 0 0;
        ion-icon {
          margin: 0;
        }
      }
    }
  }

  .price {
    text-align: center;
    font-size: 14px;
    margin: 8px 0;
    ion-icon {
      width: 30px;
      height: 28px;
      vertical-align: middle;
    }
    ion-text {
      vertical-align: middle;
    }
  }
}
</style>
