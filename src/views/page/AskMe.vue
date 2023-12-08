<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <!--<ion-buttons slot="start">
          <BackButton />
        </ion-buttons>-->
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
    <ion-content class="ion-padding">
      <AskMeProfile :userInfo="userInfo" />
      <AskMeButtonTitle>
        익명으로 평가하는<br />
        <ion-text color="warning"
          ><strong>{{ userInfo.nick }}</strong></ion-text
        >
        은 어떤 얼굴상일까?
      </AskMeButtonTitle>
      <AskMeButtonItem
        v-for="(item, index) in askBtnList"
        :key="index"
        :item="item"
        @click="askMeBtn(item.think)"
      >
<!--        <template #score>-->
<!--          <strong>{{ item.think }}</strong>-->
<!--        </template>-->
      </AskMeButtonItem>
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
import { alertController } from '@ionic/vue';
import { askMeMap, getData, askMeMapFn } from '@/assets/js/common';
import { useRoute } from 'vue-router';
import AskMeButtonItem from '@/components/AskMe/AskMeButtonItem.vue';
import AskMeProfile from '@/components/AskMe/AskMeProfile.vue';
import AskMeButtonTitle from '@/components/AskMe/AskMeButtonTitle.vue';

import { informationCircleOutline } from 'ionicons/icons';

export default {
  name: 'AskMe',
  components: {
    AskMeButtonItem,
    AskMeProfile,
    AskMeButtonTitle
  },
  data() {
    return {
      askMeCode: '',
      userInfo: {},
      think: null,
      content: '',

      informationCircleOutline,
      askBtnList: [
        {
          label: '강아지상🐶',
          think: '강아지상🐶',
          bgColor1: '#00a6ff',
          bgColor2: '#0062ff'
        },
        {
          label: '고양이상🐱',
          think: '고양이상🐱',
          bgColor1: '#0062ff',
          bgColor2: '#0045b2'
        },
        {
          label: '여우상🦊',
          think: '여우상🦊',
          bgColor1: '#0045b2',
          bgColor2: '#000cae'
        },
        {
          label: '공룡상🦖',
          think: '공룡상🦖',
          bgColor1: '#000cae',
          bgColor2: '#110062'
        },
        {
          label: '쥐상🐭',
          think: '쥐상🐭',
          bgColor1: '#9237ff',
          bgColor2: '#cb00ff'
        }
      ]
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    const route = useRoute();
    if (route == null && route == undefined) {
      this.askMeCode = askMeMap.askMeCode;
    } else {
      this.askMeCode = route.params.askMeCode;
    }
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
    /** 카테고리 모달창 열기 **/
    openModal(type) {
      if (type === 'score') {
        this.scoreModalOpen = true;
      } else if (type === 'content') {
        this.playModalOpen = true;
      }
    },
    askMeBtn(type) {
      this.think = type;
      askMeMapFn({ askMeCode: this.askMeCode, think: this.think });
      this.$router.push('/askMeNext');
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
      const alert = await alertController.create({
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

<style scoped></style>
