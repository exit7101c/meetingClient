<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="ionModalDidDismiss">
            <BackButton />
          </ion-button>
        </ion-buttons>
        <ion-title>ASK ME</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="row-box">
        <p>
          <ion-text color="light">
            내 친구들에게 나의 프로필의 평가를 부탁해보세요.<br />
            주소를 변경하면 사용하지 못하게 할 수 있어요<br />
            평가가 좋은 사람들은 <strong class="sub-text04">HOT ASKME 랭킹</strong> 에 올라가요.
            많은 평가를 받아 뱃지도 얻고 랭킹에도 도전해보세요!
          </ion-text>
        </p>
      </div>
      <div class="row-box">
        <AskMeLink
          :askMeInfo="askMeInfo"
          :askMeUrl="askMeUrl"
          @setAskMeCode="setAskMeCode"
          @setClipBoard="setClipBoard"
        />
        <p>
          <ion-text color="light" class="text-sm sub-text04">
            주소를 변경하면 이전 주소는 사용할 수 없어요.<br />
            사람들이 보낸 메시지는 아래에서 확인할 수
            있어요.
          </ion-text>
        </p>
      </div>
      <div class="row-box">
        <AskMeScore :askMeInfo="askMeInfo" />
      </div>
      <div class="row-box">
        <AskMeMessageItem
          v-for="item in askMeList"
          :key="item.rownum"
          :nick="nick"
          :item="item"
        />
      </div>
    </ion-content>
    <ion-footer>
      <div class="text-center">
        <ion-text color="light" class="text-link text-md" @click="nextSearch">
          더 조회하기
        </ion-text>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script>
import { chevronBack, copyOutline } from 'ionicons/icons';
import { getData } from '@/assets/js/common';
import { Clipboard } from '@capacitor/clipboard';
import { toastController } from '@ionic/vue';

import AskMeLink from '@/components/AskMe/AskMeLink.vue';
import AskMeScore from '@/components/AskMe/AskMeScore.vue';
import AskMeMessageItem from '@/components/AskMe/AskMeMessageItem.vue';

export default {
  name: 'AskMeList',
  inject: ['alertController'],
  components: {
    AskMeLink,
    AskMeScore,
    AskMeMessageItem
  },
  data() {
    return {
      copyOutline,
      chevronBack,
      askMeInfo: {},
      askMeList: [],
      pageNo: 1,
      pageSize: 10,
      nick: '',

      // , baseUrl: 'http://localhost:8100/askMe/'
      // baseUrl: 'http://110.10.189.102:8031/askMe/',
      baseUrl: 'http://navy-ask.me/askMe/',
      askMeUrl: ''
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.getUserByAskMeCode();
  },
  ionViewDidLeave() {
    // 떠날 때 호출
    this.pageNo = 1;
    this.askMeUrl = '';
  },

  methods: {
    getUserByAskMeCode() {
      getData({
        url: '/askMe/getUserAskMe',
        param: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        },
        then: (data) => {
          this.askMeInfo = data.askMeInfo;
          this.askMeList = data.askMeList.result;
          this.nick = data.askMeInfo.nick;
          if (data.askMeInfo.askMeCode != null) {
            this.askMeUrl = this.baseUrl + data.askMeInfo.askMeCode;
          }
        }
      });
    },
    getUserByAskMeCodeSecond() {
      getData({
        url: '/askMe/getUserAskMe',
        param: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        },
        then: (data) => {
          this.askMeInfo = data.askMeInfo;
          for (let i = 0; data.askMeList.result.length > i; i++) {
            this.askMeList = [...this.askMeList, data.askMeList.result[i]];
          }
          this.nick = data.askMeInfo.nick;
          if (data.askMeInfo.askMeCode != null) {
            this.askMeUrl = this.baseUrl + data.askMeInfo.askMeCode;
          }
        }
      });
    },
    nextSearch() {
      this.pageNo = this.pageNo + 1;
      this.getUserByAskMeCodeSecond();
    },

    async setClipBoard() {
      await Clipboard.write({
        url: this.askMeUrl
      });
      await this.presentToast('복사되었습니다.');
    },

    setAskMeCode() {
      getData({
        url: '/askMe/setAskMeCode',
        param: {},
        then: (data) => {
          if (data.successYn === 'N') {
            this.warningAlert(data.message);
          } else {
            this.askMeInfo = data.askMeInfo;
            if (data.askMeInfo.askMeCode != null) {
              this.askMeUrl = this.baseUrl + data.askMeInfo.askMeCode;
            }
          }
        }
      });
    },
    /** 경고 alert창 **/
    async warningAlert(title, message) {
      const alert = await this.alertController.create({
        header: title,
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      return alert.present();
    },
    /** 토스트팝업 **/
    async presentToast(message) {
      const toast = await toastController.create({
        message: message,
        duration: 1000,
        position: 'middle' // top, middle, bottom
      });
      await toast.present();
    }
  }
};
</script>

<style lang="scss" scoped></style>
