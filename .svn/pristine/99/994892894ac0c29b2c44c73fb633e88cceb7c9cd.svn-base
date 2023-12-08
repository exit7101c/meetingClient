<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>💬 NAVY Ask Me</ion-title>
        <ion-buttons
          slot="end"
          style="font-size: 12px; text-align: center; margin-right: 10px"
          @click="goIndex()"
        >
          NAVY<br />설치하기
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <AskMeProfile :userInfo="userInfo" />
      <AskMeButtonTitle>
        마지막으로<br />
        <ion-text color="warning"
          ><strong>{{ userInfo.nick }}</strong></ion-text
        >
        에게 하고싶은 말은 ?
      </AskMeButtonTitle>
      <div class="row-box">
        <ion-item ref="content" lines="none" class="input-field">
          <ion-textarea
            v-model="this.content"
            :rows="5"
            class="custom-textarea"
            maxlength="50"
            placeholder="내용을 입력해주세요. (최소 1자, 최대 50자)"
          />
        </ion-item>
      </div>
    </ion-content>

    <ion-footer>
      <div class="btn-group">
        <custom-button
          color="primary"
          size="large"
          expand="block"
          shape="round"
          @click="sendAskMe()"
        >
          <ion-ripple-effect></ion-ripple-effect>
          익명 메시지 보내기
        </custom-button>
      </div>
      <ion-text color="light" class="text-sm sub-text04">
        * 타인의 프로필을 캡쳐 및 공유할 시 법적인 처벌을 받을수
        있습니다.
      </ion-text>
    </ion-footer>
  </ion-page>
</template>

<script>
import { askMeMap, getData } from '@/assets/js/common';
import AskMeProfile from '@/components/AskMe/AskMeProfile.vue';
import AskMeButtonTitle from '@/components/AskMe/AskMeButtonTitle.vue';
import AskMeButtonItem from '@/components/AskMe/AskMeButtonItem.vue';

export default {
  name: 'AskMe',
  inject: ['alertController'],
  components: {
    AskMeProfile,
    AskMeButtonTitle,
    AskMeButtonItem
  },
  data() {
    return {
      askMeCode: '',
      userInfo: {},
      score: null,
      play: null,
      think: null,
      content: '',

      scoreModalOpen: false,
      playModalOpen: false
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    if(askMeMap.askMeCode == undefined){
      location.replace("/");
      return;
    }
    this.askMeCode = askMeMap.askMeCode;
    this.getAskMeUserInfo();
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {},
  methods: {
    goIndex(){
      this.$router.push("/");
    },
    getAskMeUserInfo() {
      getData({
        url: '/askMe/getAskMeUserInfo',
        param: { askMeCode: this.askMeCode },
        then: (data) => {
          if (data.successYn === 'N') {
            this.presentAlertPrompt(data.message);
          } else {
            this.userInfo = data.userInfo;
          }
        }
      });
    },

    sendAskMe() {
      if (!this.validateSendAskMe()) {
        this.warningAlert('메시지를 작성해주세요.');
        return;
      }
      this.score = askMeMap.score;
      this.play = askMeMap.play;
      this.think = askMeMap.think;

      getData({
        url: '/askMe/sendAskMe',
        param: {
          askMeCode: this.askMeCode,
          score: this.score,
          do: this.play,
          think: this.think,
          message: this.content,
          userKey: this.userInfo.userKey
        },
        then: (data) => {
          if (data.successYn === 'N') {
            this.warningAlert(data.message);
          } else {
            this.presentAlertPrompt(data.message);
          }
        }
      });
    },

    validateSendAskMe() {
      if (1 <= this.content.length && this.content.length <= 50) {
        return true;
      } else {
        return false;
      }
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

    async presentAlertPrompt(message) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: message,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              //this.$router.go(-3);
              //this.$router.push("/");
              location.replace("/");
            }
          }
        ]
      });
      return alert.present();
    }
  }
};
</script>

<style scoped>
ion-modal {
  --height: 60%;
  --width: 100%;
  --border-radius: 10px;
}

ion-modal ion-toolbar {
  --color: black;
}
</style>
