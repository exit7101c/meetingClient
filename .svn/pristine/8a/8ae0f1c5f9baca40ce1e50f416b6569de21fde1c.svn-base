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
        <ion-text color="warning"
          ><strong>{{ userInfo.nick }}</strong></ion-text
        >
        의 외모점수는 몇점?
      </AskMeButtonTitle>
      <AskMeButtonItem
        v-for="(item, index) in askBtnList"
        :key="index"
        :item="item"
        @click="askMeBtn(item.score)"
      >
        <template #score>
          <strong>{{ item.score }}점</strong>
        </template>
      </AskMeButtonItem>

    </ion-content>

    <ion-footer>
      <ion-text color="light" class="text-sm sub-text04">
        * 타인의 프로필을 무단으로 캡쳐 및 공유할 시 법적인 처벌을 받을수
        있습니다.
      </ion-text>
    </ion-footer>
  </ion-page>
</template>

<script>
import IconForwardCircle from '@/assets/img/icon/icon_chevronForwardCircle.svg';

import { getData, askMeMap } from '@/assets/js/common';
import AskMeProfile from '@/components/AskMe/AskMeProfile.vue';
import AskMeButtonTitle from '@/components/AskMe/AskMeButtonTitle.vue';
import AskMeButtonItem from '@/components/AskMe/AskMeButtonItem.vue';

export default {
  name: 'AskMeSecond',
  inject: ['alertController'],
  components: {
    AskMeProfile,
    AskMeButtonTitle,
    AskMeButtonItem
  },
  data() {
    return {
      forwardCircle: IconForwardCircle,
      askMeCode: '',
      userInfo: {},
      content: '',

      askBtnList: [
        {
          label: '완벽해💯',
          score: 100,
          bgColor1: '#00a6ff',
          bgColor2: '#0062ff'
        },
        {
          label: '최고야⭐',
          score: 70,
          bgColor1: '#0062ff',
          bgColor2: '#0045b2'
        },
        {
          label: '좋아요👍',
          score: 50,
          bgColor1: '#0045b2',
          bgColor2: '#000cae'
        },
        {
          label: '나쁘지않아🙄',
          score: 30,
          bgColor1: '#000cae',
          bgColor2: '#110062'
        },
        {
          label: '별로....🥱',
          score: 0,
          bgColor1: '#9237ff',
          bgColor2: '#cb00ff'
        }
      ]
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
    askMeBtn(score) {
      askMeMap.score = score;
      this.$router.push('/askMeSend');
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
              this.$router.go(-1);
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

ion-icon {
  position: absolute;
  right: 5px;
  font-size: 45px;
}

.custom-grid {
  color: white;
  font-weight: bolder;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 10px;
  margin-bottom: 50px;
}

.custom-col {
  height: 55px;
  align-items: center;
  padding: 5px 0 10px;
  border-radius: 50px;
  margin: 10px;
}

.font-mainText {
  margin-left: 20px;
  text-align: left;
  font-size: 20px;
  line-height: 45px;
}

.font-subText {
  position: absolute;
  right: 55px;
  line-height: 45px;
  font-size: 30px;
}
</style>
