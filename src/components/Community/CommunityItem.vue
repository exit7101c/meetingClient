<template>
  <ion-item>
    <ion-avatar slot="start">
      <!-- TODO : 메인 BEST TOPIC 과 데이터 구조가 달라 별도의 컴포넌트로 적용. 추후 데이터 구조 통일시 리팩토링 필요 -->
      <img
        :src="'https://' + item.cdnThumbNmIcon"
        @ionError="
          $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
        "
      />
    </ion-avatar>
    <ion-label>
      <ion-text color="light">
        <h3>{{ item.title }}</h3>
      </ion-text>
      <ion-text color="light">
        <span>{{ item.createdDtMm }}</span>
        <span><ion-icon :icon="eyeOutline" />{{ item.viewCnt }}</span>
        <span><ion-icon :icon="chatbubble" />{{ item.commentCnt }}</span>
        <span><ion-icon :icon="thumbsUpOutline" />{{ item.likeCnt }}</span>
      </ion-text>
    </ion-label>
    <div slot="end">
      <ion-row>
        <!-- TODO : 카테고리 분류 변수 처리 -->
        <!--        <ion-text class="text-sm sub-text01">광고</ion-text>-->
        <ion-thumbnail>
          <ion-img
            v-show="item.cdnThumbNm !== null"
            :src="'https://' + item.cdnThumbNm"
            @ionError="
              $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
            "
          />
        </ion-thumbnail>
      </ion-row>
    </div>
  </ion-item>
</template>
<script>
import IconChatbubbleOutline from '@/assets/img/icon/icon_chatbubbleOutline.svg';
import IonEyeOutline from '@/assets/img/icon/ion_eyeOutline.svg';
import { thumbsUpOutline } from 'ionicons/icons';

export default {
  name: 'CommunityItem',
  props: {
    item: {
      type: Object
    },
    loaded: {
      type: Boolean
    }
  },
  data() {
    return {
      thumbsUpOutline,
      eyeOutline: IonEyeOutline,
      chatbubble: IconChatbubbleOutline
    };
  }
};
</script>
<style scoped lang="scss">
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --border-color: rgba(255, 255, 255, 0.1);
  --padding-top: 4px;
  --padding-bottom: 4px;

  ion-label {
    h3 {
      font-size: 16px;
      //font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    span {
      font-size: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      gap: 4px;
      min-width: 24px;

      + span {
        margin-left: 10px;

        ion-icon {
          vertical-align: -2px;
        }
      }
    }
  }

  ion-row {
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    ion-text {
      padding-top: 4px;
    }

    ion-thumbnail {
      ion-img {
        height: 48px;
      }
    }
  }
}
</style>
