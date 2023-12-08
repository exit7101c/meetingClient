<template>
  <ion-grid>
    <div class="info">
      <ion-text>
        <strong class="sub-text04">{{ nick }}</strong>
        님에게 도착한 익명 메시지
      </ion-text>
      <p class="date">
        <ion-icon :icon="calendarCheck" class="sub-text01" />
        <ion-text class="sub-text01">{{ item.regTime }}</ion-text>
      </p>
    </div>
    <div class="content">
      <div class="message">
        <ion-text> “{{ item.message }}" </ion-text>
      </div>
      <p class="something">
        <ion-chip color="light">같이 하고 싶은 것</ion-chip>
        <ion-text color="light" class="sub-text05"> {{ item.do }} </ion-text>
      </p>
      <p class="something">
        <ion-chip color="light">나의 얼굴상</ion-chip>
        <ion-text color="light" class="sub-text05"> {{ item.think }} </ion-text>
      </p>
      <p class="something" style="margin-left: 20px;">
        <ion-chip color="light">나의 점수는</ion-chip>
        <ion-text color="light" class="sub-text05"> {{ item.score }}점 </ion-text>
      </p>
    </div>
  </ion-grid>
</template>
<script>
import IconCalCheck from '@/assets/img/icon/icon_cal_check.svg';
export default {
  name: 'AskMeMessageItem',
  props: {
    nick: {
      type: String
    },
    item: {
      type: Object
    }
  },
  data() {
    return {
      calendarCheck: IconCalCheck
    };
  }
};
</script>
<style lang="scss" scoped>
ion-grid {
  /* background-color: rgba($color: white, $alpha: 0.5); */
  border: 1px solid var(--ion-border-color);
  border-radius: var(--ion-border-radius);
  padding: 1rem;

  + ion-grid {
    margin-top: 1rem;
  }
  .info {
    color: white;
    .date {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      font-size: 10px;
      margin: 0.5rem 0 0;
    }
  }
  .content {
    margin: 0.5rem 0 0;
    .message {
      background-color: #272847;
      border-radius: var(--ion-border-radius);
      font-size: 14px;
      padding: 0.75rem 1rem;
      color: white;
      border-top-left-radius: 0;
    }
    .something {
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;
      margin: 1rem 0 0;
      ion-chip {
        font-weight: bold;
      }
      ion-text {
        font-size: 12px;
      }
    }
  }
}
</style>
