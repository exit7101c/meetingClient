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
        님과 가장 하고 싶은것은?
      </AskMeButtonTitle>
      <AskMeButtonItem
        v-for="(item, index) in askBtnList"
        :key="index"
        :item="item"
        @click="askMeBtn(item.value)"
      />
    </ion-content>

    <ion-footer>
      <ion-text color="light" class="text-sm sub-text04">
        * 타인의 프로필을 캡쳐 및 공유할 시 법적인 처벌을 받을수
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
  name: 'AskMeNext',
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
          label: '침대 위 데이트💖',
          value: '침대 위 데이트💖',
          bgColor1: '#ff3755',
          bgColor2: '#ff5f5f'
        },
        {
          label: '당장 만나고 싶어요🤝',
          value: '당장 만나고 싶어요🤝',
          bgColor1: '#ff5f5f',
          bgColor2: '#ff4f1f'
        },
        {
          label: '술 한잔 하고 싶어요🥂',
          value: '술 한잔 하고 싶어요🥂',
          bgColor1: '#ff4f1f',
          bgColor2: '#ff7300'
        },
        {
          label: 'DM 나누고 싶어요💌',
          value: 'DM 나누고 싶어요💌',
          bgColor1: '#ff7300',
          bgColor2: '#ff8c00'
        },
        {
          label: '별 관심 없어요😓',
          value: '별 관심 없어요😓',
          bgColor1: '#ff8c00',
          bgColor2: '#b2c822'
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
    askMeBtn(play) {
      askMeMap.play = play;
      this.$router.push('/askMeSecond');
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
