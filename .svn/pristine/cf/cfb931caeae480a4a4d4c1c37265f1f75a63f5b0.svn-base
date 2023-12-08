<template>
  <ion-modal
    ref="modal"
    :is-open="isOpen"
    @ionModalDidDismiss="ionModalDidDismiss"
  >
    <!--    class="custom-modal"-->
    <!--  >-->
    <ion-page v-if="contentType !== 'IMG'">
      <ion-toolbar>
        <ion-title class="text-lg">
          {{ item.title }}
        </ion-title>
      </ion-toolbar>
      <ion-content class="ion-padding">
        <div class="row-box">
          <p>
            <ion-text color="light" class="text-md"
              >{{ item.content }}
            </ion-text>
          </p>
        </div>
      </ion-content>
      <ion-footer>
        <ion-button
          color="primary"
          size="large"
          expand="block"
          shape="round"
          class="close-button ion-activatable ripple-parent rounded-rectangle"
          @click="ionModalDidDismiss"
        >
          확인
        </ion-button>
      </ion-footer>
    </ion-page>
    <ion-page v-else>
      <ion-content>
        <ion-img :src="'https://' + item.cdnNm" />
      </ion-content>
      <ion-footer>
        <ion-item lines="none" v-if="type === 'home'">
          <ion-checkbox
            mode="ios"
            slot="start"
            v-model="homeNotification"
          ></ion-checkbox>
          <!--            @ionChange="inputChange($event)"-->
          <!--          ></ion-checkbox>-->
          <ion-label>다시 보지 않기</ion-label>
        </ion-item>
        <ion-button
          color="primary"
          size="large"
          expand="block"
          shape="round"
          class="close-button ion-activatable ripple-parent rounded-rectangle"
          @click="ionModalDidDismiss"
        >
          확인
        </ion-button>
      </ion-footer>
    </ion-page>
  </ion-modal>
</template>

<script>
import { IonCheckbox } from '@ionic/vue';

export default {
  name: 'NotificationModal.vue',
  components: { IonCheckbox },
  props: {
    isOpen: {
      type: Boolean
    },
    type: {
      type: String
    },
    item: {
      type: Object
    },
    contentType: {
      type: String
    },
    sessionList: {
      type: Array
    }
  },
  data() {
    return {
      homeNotification: false
    };
  },
  methods: {
    inputChange() {
      //체크가 되면 sessionStorege에 저장하고 해제되면 삭제한다.
      let sessionNoticeList = JSON.parse(
        sessionStorage.getItem('sessionNoticeList')
      );

      if (e.detail.checked) {
        //체크된
        if (sessionNoticeList == null && typeof sessionNoticeList !== 'array') {
          sessionNoticeList = [];
        }

        sessionNoticeList.push({ articleKey: this.item.articleKey });
      } else {
        //체크 해제됨
        for (let idx in sessionNoticeList) {
          if (sessionNoticeList[idx]['articleKey'] == this.item.articleKey) {
            sessionNoticeList.splice(idx, 1);
          }
        }
      }
      //최종 결과물 저장
      sessionStorage.setItem(
        'sessionNoticeList',
        JSON.stringify(sessionNoticeList)
      );
      console.log(JSON.stringify(sessionStorage.getItem('sessionNoticeList')));
      //  sessionStorage.removeItem('sessionNoticeList')
    },
    ionModalDidDismiss() {
      this.$emit('ionModalDidDismiss');
      this.$refs.modal.$el.dismiss();
    }
  }
};
</script>

<style lang="scss" scoped>
ion-modal {
  --height: 600px;
  --width: 95%;
  --border-radius: 15px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

  &::part(content) {
    border-radius: var(--ion-border-radius-lg);
  }
}
</style>
