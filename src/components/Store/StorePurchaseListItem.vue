<template>
  <div
    class="store-purchase-list-item"
    :class="{ 'is-hot': item.productId === 'navy_heart_item365' }"
  >
    <div class="chip">
      <ion-chip v-if="item.productId === 'navy_heart_item365'">HOT</ion-chip>
    </div>
    <div class="inner">
      <div class="content">
        <ion-icon v-if="icon" :icon="icon"></ion-icon>
        <ion-text color="light">
          하트 {{ itemNameList[index] }} ( {{ item.payment + item.bonus }}개 )
        </ion-text>
      </div>
      <div class="price">
        <ion-text color="light"> {{ item.priceWon }}원 </ion-text>
      </div>
    </div>
    <div class="bonus-label">
      <StoreBonusLabel
        :percent="item.bonusRate"
        :index="index"
        v-if="percent > 0"
      />
    </div>
  </div>
</template>
<script>
import StoreBonusLabel from '@/components/Store/StoreBonusLabel.vue';

export default {
  name: 'StorePurchaseListItem',
  components: {
    StoreBonusLabel
  },
  props: {
    icon: {
      type: String
    },
    item: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  computed: {
    percent() {
      return Math.floor((this.item.bonus / this.item.payment) * 100);
    }
  },
  data() {
    return {
      itemNameList: ['한 쪽', '한 줄', '주머니', '바구니', '상자', '더미']
    };
  }
};
</script>
<style lang="scss" scoped>
.store-purchase-list-item {
  position: relative;
  margin: 0;
  padding: 12px 30px 12px 20px;
  border-radius: var(--ion-border-radius);
  background: var(--ion-border-color);
  margin-right: 4px;
  &.is-hot {
    border: 2px solid #ee737e;
    background: var(--ion-color-medium);
    .chip {
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      &:before {
        display: block;
        content: '';
        position: absolute;
        height: 10px;
        background-color: var(--ion-color-medium);
        left: -16px;
        right: -16px;
        top: 10px;
      }
      ion-chip {
        background: linear-gradient(90deg, #e095c6 0%, #ca6fa9 100%);
        color: white;
        border-radius: 40px;
        font-weight: bold;
        margin: 0;
      }
    }
    .content {
      ion-icon {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  + .store-purchase-list-item {
    margin-top: 24px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    line-height: 1;
    font-weight: bold;
    font-size: 12px;
    ion-icon {
      margin-right: 10px;
      width: 36px;
      height: 36px;
      border-radius: var(--ion-border-radius);
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  .price {
    text-align: center;
    width: 70px;
    margin: 0 0 0 5px;
    font-weight: bold;
    font-size: 14px;
  }

  .bonus-label {
    position: absolute;
    right: -8px;
    top: -8px;
    min-width: 32px;
    max-width: 50px;
    height: 32px;
  }
}
</style>
