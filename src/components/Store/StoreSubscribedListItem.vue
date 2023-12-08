<template>
  <div
    class="subscription-item"
    :class="{
      'is-selected': selected === item.itemCd
    }"
    :id="item.itemCd"
  >
    <div class="row-box">
      <ion-card class="ticket">
        <div class="info-area">
          <div class="inner">
            <ion-text color="light">
              <h5>
                <strong>{{ item.itemCd.replace('_', ' ') }}</strong>
                <ion-chip
                  color="warning"
                  :class="
                    item.itemCd === 'GOLD_PASS' ? 'chip-hot' : 'chip-popular'
                  "
                  >{{ item.itemCd === 'GOLD_PASS' ? 'HOT' : '가성비' }}
                </ion-chip>
              </h5>
            </ion-text>
          </div>
        </div>
        <div class="price-area">
          <div class="inner">
            <ion-text color="light">
              <!--              <span class="text-xs">7일 무료체험</span><br />-->
              <strong class="text-md">{{ item.priceWon }} 원 / 1개월</strong>
            </ion-text>
          </div>
        </div>
      </ion-card>
    </div>
    <div class="row-box" v-if="descriptionList && descriptionList.length > 0">
      <CardBox :shadow="item.itemCd === 'GOLD_PASS' ? 'gold' : ''">
        <ion-list lines="none">
          <SubscriptionDescItem
            v-for="(descItem, index) in descriptionList"
            :key="index"
            :index="index"
            :item="descItem"
            :subscribedItem="item.itemCd"
            :subDescription="subDescrioptionList"
          />
        </ion-list>
      </CardBox>
    </div>
  </div>
</template>
<script>
import SubscriptionDescItem from '@/components/Subscription/SubscriptionDescItem.vue';

export default {
  name: 'StoreSubscribedListItem',
  components: {
    SubscriptionDescItem
  },
  props: {
    selected: {
      type: String
    },
    item: {
      type: Object
    }
  },
  computed: {
    descriptionList() {
      if (this.item.description) {
        const descStr = this.item.description;
        let descList = descStr.split(',');
        return descList;
      }
      return [];
    }
  },
  data() {
    return {
      subDescrioptionList: {
        '커뮤니티 추가 사진등록 +2':
          '이제 커뮤니티에서 사진을 3개까지 등록할 수 있어요.',
        '소모임 PLUS PHOTO':
          '소모임 생성시 더욱 퀄리티 있는 대표사진을 등록해보세요!',
        '하루 라이크 무제한': '라이크를 무제한으로 사용할 수 있어요.',
        '지도에서 전국에있는 모임 찾기':
          '지도에서 전국적으로 다양한 모임을 탐색해보세요!',
        '소모임 활성화 +1':
          '소모임 한곳을 운영할 수 있어요.',
        '소모임 활성화 +3':
          '소모임을 동시에 여러개(최대3개) 운영할 수 있어요.',
        '광고제거':
          '더 이상 불필요한 광고가 나타나지 않아요.',
        '받은 좋아요 확인':
          '나를 라이크한 사람들을 확인할 수 있어요.'
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.subscription-item {
  width: 100%;

  + .subscription-item {
    margin-top: 40px;
  }

  &.is-selected {
    .ticket {
      .price-area {
        transform: translateX(4px) rotate(5deg);
      }
    }
  }

  &.is-disabled {
    user-select: none;
  }

  &.subscribed-navyplus {
    &#NAVY_PLUS {
      .ticket {
        .info-area {
          background: linear-gradient(90deg, #2a2a60 0%, #2a2a60 100%);
        }

        .price-area {
          background: linear-gradient(90deg, #2a2a60 0%, #2a2a60 100%);
          transform: none;
        }
      }
    }
  }

  &.subscribed-goldpass {
    &#NAVY_PLUS {
      .ticket {
        .info-area {
          background: linear-gradient(90deg, #2a2a60 0%, #2a2a60 100%);
        }

        .price-area {
          background: linear-gradient(90deg, #2a2a60 0%, #2a2a60 100%);
        }
      }
    }

    &#GOLD_PASS {
      .ticket {
        .info-area {
          background: linear-gradient(90deg, #83732c 0%, #83732c 100%);
        }

        .price-area {
          background: linear-gradient(90deg, #83732c 0%, #83732c 100%);
        }
      }
    }
  }

  .ticket {
    margin: 0;

    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    overflow: visible;
    contain: inherit;

    .info-area {
      position: relative;
      background: linear-gradient(90deg, #706af7 0%, #706af7 100%);
      text-align: left;
      width: calc(100% - 110px);
      padding: 10px;
      z-index: 2;
      overflow: hidden;
      border-top-left-radius: var(--ion-border-radius);
      border-bottom-left-radius: var(--ion-border-radius);

      &::before,
      &::after {
        position: absolute;
        right: -11px;
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
        padding-left: 10px;
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

    .price-area {
      position: relative;
      background: linear-gradient(90deg, #706af7 0%, #706af7 100%);
      width: 110px;
      padding: 5px 5px 5px 5px;
      min-height: 80px;
      border-left: 1px solid rgba($color: white, $alpha: 0.3);
      text-align: center;
      transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
      border-top-right-radius: var(--ion-border-radius);
      border-bottom-right-radius: var(--ion-border-radius);
      user-select: transform;

      &::before,
      &::after {
        position: absolute;
        left: -11px;
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
        justify-content: center;
        text-align: center;
        height: 100%;

        p {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      }
    }

    h5 {
      * {
        vertical-align: middle;
        margin: 0 5px;
      }
    }
  }

  &#GOLD_PASS {
    .info-area {
      background: linear-gradient(90deg, #cfba56 0%, #cc9a41 100%);
    }

    .price-area {
      background: linear-gradient(90deg, #cc9a41 0%, #cc9a41 100%);
    }
  }
}
</style>
