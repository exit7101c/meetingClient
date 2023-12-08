<template>
  <ion-card
    :class="{
      'is-blind':
        subscribeInfo.isActionInfinite != 'Y' &&
        item.superLikeYn != 'Y' &&
        item.freeFlipYn != 'Y' &&
        isBuffYn != 'Y' &&
        currentTab == 'my'
    }"
    @click="handleClick"
  >
    <div class="inner">
      <!-- 슈퍼 Like 아이콘  -->
      <div class="icon">
        <!-- <ion-icon :icon="superLike" v-if="item.superLikeYn == 'Y'" /> -->
        <ion-icon
          :icon="superLike"
          v-if="item.superLikeYn == 'Y'"
          style="background: linear-gradient(180deg, #eb7a82 0%, #e1547a 100%)"
        />
        <ion-icon :icon="like" v-else />
      </div>
      <!-- 라이크 아이콘 -->
      <ion-img
        :class="{
          strong2: item.superLikeYn == 'Y' || isBuffYn == 'Y'
        }"
        :src="'https://' + item.cdnThumbNm"
        @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
      />

      <ion-card-content>
        <ion-label>
          <h3>{{ item.nick }} {{ item.age }}</h3>
          <p>
            <ion-icon :icon="locationOutline" color="light"></ion-icon>
            <ion-text color="light">{{ item.addrLiveSum }}</ion-text>
          </p>
        </ion-label>
        <!--        <ion-row>-->
        <!--          <ion-chip class="chip-passed">심사합격</ion-chip>-->
        <!--          <ion-chip>자산인증</ion-chip>-->
        <!--        </ion-row>-->
      </ion-card-content>
    </div>
    <div :class="{ 'is-superlike': item.superLikeYn == 'Y' }"></div>
  </ion-card>
</template>
<script>
import { locationOutline } from 'ionicons/icons';
// import IconSuperLike from "../../assets/img/icon/icon_superlike.svg";
import IconSuperLike from '@/assets/img/choice/choice_like.svg';
import IconLike from '../../assets/img/icon/icon_like.svg';

export default {
  name: 'MyLikeCardItem',
  props: {
    item: {
      type: Object
    },
    subscribeInfo: {
      type: Object
    },
    isBuffYn: {
      type: Boolean
    },
    currentTab: {
      type: String
    }
  },
  data() {
    return {
      locationOutline,
      superLike: IconSuperLike,
      like: IconLike
    };
  },
  methods: {
    handleClick() {
      this.$emit('event', this.item);
    }
  }
};
</script>
<style lang="scss" scoped>
ion-card {
  position: relative;
  border-radius: var(--ion-border-radius);
  contain: inherit;
  overflow: visible;
  margin: 0;

  .inner {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    z-index: 2;
  }

  .icon {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 3;

    ion-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      overflow: hidden;
      background-color: white;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
    }
  }

  ion-img {
    height: 230px;
    object-fit: cover;
    border-radius: 0;
  }

  ion-card-content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(0, rgba(0, 0, 0, 1) 0%, transparent 100%);
    z-index: 2;
    padding: 8px 8px;

    ion-label {
      display: block;
      color: white;
      margin-bottom: 10px;

      h3 {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
      }

      p {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 4px;
        font-size: 12px;
        font-weight: bold;
      }
    }

    &.is-hidden {
      /* visibility: hidden; */
    }
  }

  &.is-blind {
    position: relative;
    width: auto;
    height: auto;
    visibility: inherit;

    &:after {
      position: absolute;
      display: block;
      content: '';
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url('../../assets/img/choice/choice_lock.svg');
      background-size: 110px auto;
      background-position: top 80% center;
      background-repeat: no-repeat;
      z-index: 3;
    }

    ion-img {
      filter: blur(10px);
    }

    ion-card-content {
      visibility: hidden;
    }
  }
}

.is-superlike {
  position: absolute;
  top: -4px;
  left: -4px;
  bottom: -4px;
  right: -4px;
  z-index: 0;
  border-radius: var(--ion-border-radius);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #1a232a;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      transparent,
      rgba(168, 239, 255, 1),
      transparent 30%
    );
    animation: rotate 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #000;
    border-radius: 5px;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

@keyframes opacityChange {
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
