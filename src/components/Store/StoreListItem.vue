<template>
  <div class="store-list-item">
    <ion-img
      v-if="item.cdnNm !== null"
      :src="'https://' + item.cdnNm"
      style=""
    />
    <ion-img v-else :src="superLikeGift"></ion-img>
    <ion-label>
      <ion-text color="light" class="text-bold text-sm">
        {{ item.itemNm }}
      </ion-text>
      <br />
      <ion-text class="text-sm sub-text05">
        <template v-if="item.itemCd != 'IT012_03'">
          {{ title }} + <strong> {{ item.sumPayment }}</strong
          >개
        </template>
        <template v-else>
          {{ item.itemNm }}
          <!-- {{ item.itemNm + (3 - item.buyCnt / 3) }} -->
        </template>
      </ion-text>
      <br />
      <ion-chip color="light" class="shape-round text-xs"
        >구매
        <ion-icon :icon="heartIcon"></ion-icon>
        {{ item.priceHeart }} 개
      </ion-chip>
    </ion-label>
    <div class="bonus-label">
      <StoreBonusLabel :percent="item.bonusRate" :index="3" />
    </div>
  </div>
</template>
<script>
import StoreBonusLabel from '@/components/Store/StoreBonusLabel.vue';

import IconSuperlikeGift from '@/assets/img/store/superlike_gift.png';
import IconHeart from '@/assets/img/icon/icon_store_heart.svg';

export default {
  name: 'StoreListItem',
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
  components: {
    StoreBonusLabel
  },
  data() {
    return {
      superLikeGift: IconSuperlikeGift,
      heartIcon: IconHeart
    };
  }
};
</script>
<style lang="scss" scoped>
.store-list-item {
  position: relative;
  margin: 0;
  padding: 10px;
  border-radius: var(--ion-border-radius-lg);
  background: var(--ion-color-medium);
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ion-img {
    margin-right: 10px;
    width: 48px;
    height: 42px;
  }

  ion-label {
    width: calc(100% - 60px);
    margin: 0;
    overflow: visible;
    contain: inherit;
    text-align: right;

    ion-text {
      line-height: 1.2;
    }

    ion-chip {
      font-size: 9px;
      white-space: nowrap;
      margin: 8px 0 0;

      ion-icon {
        margin: 0;
      }
    }
  }

  .bonus-label {
    position: absolute;
    left: 8px;
    top: -4px;
    min-width: 32px;
    max-width: 50px;
    height: 20px;
  }
}
</style>
