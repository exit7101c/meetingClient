<template>
  <div class="choice-no-user">
    <div class="icon-area">
      <!-- 고정 이미지 -->
      <!-- <div class="icon">
        <ion-img :src="noUserIcon" />
      </div> -->
      <!-- 애니메이션 효과 시 -->
      <div class="icon-ani">
        <div class="inner">
          <div class="circle circle-1">
            <ion-img :src="choiceMapIcon" />
          </div>
          <div class="circle circle-2 waves"></div>
          <div class="circle circle-3 waves"></div>
          <div class="circle circle-4 waves"></div>
        </div>
      </div>
    </div>
    <div class="text-area">
      <div class="content">
        <h5>사용자가 없어요😢</h5>
        <p>
          아래의 버튼을 눌러 새로운<br />
          사람을 찾아보세요!
        </p>
        <custom-button
          color="primary"
          shape="round"
          size="small"
          @click="handleTryAgain()"
          >TRY AGAIN
        </custom-button>
      </div>
    </div>
  </div>
</template>
<script>
import IconChoiceNoUser from '@/assets/img/choice/choice_no_user.svg';
import IconChoiceMap from '@/assets/img/choice/choice_map.svg';

export default {
  name: 'ChoiceNoUser',
  data() {
    return {
      noUserIcon: IconChoiceNoUser,
      choiceMapIcon: IconChoiceMap
    };
  },
  methods: {
    handleTryAgain() {
      //
      this.$emit('tryAgain');
    }
  }
};
</script>
<style lang="scss" scoped>
$background: var(--ion-color-dark);
.choice-no-user {
  background-color: $background;
  height: 100%;

  .icon-area {
    display: flex;
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: center;

    .icon {
      ion-img {
        width: 128px;
        height: 128px;
      }
    }

    .icon-ani {
      position: relative;
      width: 128px;
      height: 128px;

      .inner {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 78px;
        height: 78px;
        transform: translate(-50%, -50%);
      }

      .circle {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        z-index: 4;

        &.waves {
          animation-name: waves;
          animation-timing-function: linear;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
          animation-fill-mode: forwards;
        }

        &.circle-1 {
          background-color: #3e4a7e;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;

          ion-img {
            width: 60px;
            height: 60px;
          }
        }

        &.circle-2 {
          background-color: #3a4265;
          animation-delay: 0.1s;
          z-index: 2;
        }

        &.circle-3 {
          background-color: #0e1234;
          animation-delay: 0.4s;
          z-index: 1;
        }

        &.circle-3 {
          background-color: transparent;
          border: 2px solid #1f346a;
          animation-delay: 0.8s;
          z-index: 1;
        }
      }
    }
  }
}

.text-area {
  position: relative;
  display: flex;
  width: 100%;
  height: 50%;
  padding: 40px 0;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  color: white;

  &::before {
    position: absolute;
    top: 0;
    display: block;
    content: '';
    width: 150%;
    height: 300px;
    border-radius: 50%;
    border-top: 2px solid rgba($color: white, $alpha: 0.2);
  }

  .content {
    width: 100%;
    position: relative;
    background-color: $background;
    z-index: 2;

    h5 {
      font-size: 20px;
      font-weight: bold;
    }
  }
}

@keyframes waves {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
