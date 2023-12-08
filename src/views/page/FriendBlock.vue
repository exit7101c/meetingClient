<template>
  <ion-page>
    <!-- <ion-header> -->
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="$router.go(-1)">
          <ion-icon slot="icon-only" :icon="chevronBack"/>
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button>
          <ion-icon slot="icon-only" :icon="refreshOutline"/>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
    <!-- </ion-header> -->
    <ion-content>

      <!-- title -->
      <ion-grid class="ion-padding">
        <ion-row style="font-size: 20px; text-align: left; color: black">
          <ion-col size="12" style="display: flex; align-items: center; font-weight: bolder;">
            <ion-icon :icon="closeCircleOutline" style="font-size: 25px; color: gray;"/>&nbsp;지인 연락처 차단</ion-col>
        </ion-row>
      </ion-grid>
      <!-- title -->

      <ion-list lines="none">
        <ion-item>
          <ion-col style="margin-left: -5px; margin-top: 10px;">
            <ion-text>
              <span style="color: black; font-weight: bolder;">지인 연락처 차단</span><br/>
              <span style="color: black; font-size: 13px;">주소록에 저장되어 있는 사용자를 초이스에서 노출 시키지 않습니다</span>
            </ion-text>
          </ion-col>
          <ion-toggle slot="end" color="dark" :checked="toggleChecked" @ionChange="toggleBtn($event)"></ion-toggle>
        </ion-item>
      </ion-list>

      <ion-grid class="ion-padding">
        <ion-row style="margin-top: 40px">
          <ion-col size="12" style="position:absolute; bottom: 25px">
            <div class="textbox">* 주소록에 새로 추가된 연락처는 차단에 즉시 반영되지 않으니 새로고침을 해주세요</div>
          </ion-col>
        </ion-row>
      </ion-grid>
<!--      <div style="border-bottom: 1px solid #cccccc; width: 90%; margin: 0 auto; margin-top: 10px; margin-bottom: 10px"/>-->

    </ion-content>
    <!-- 모달창 시작 -->
    <ion-modal :is-open="modalBlock" @ionModalDidDismiss="modalDismissed">
      <ion-content class="ion-padding">
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-text style="font-size: 20px; font-weight: bolder">
                하트를 소모하여 지인 연락처 차단 기능을 영구적으로 활성화 시킵니다 구매하시겠습니까?
              </ion-text><br>
              <ion-text style="font-size: 15px; color: gray; font-weight: bolder">
                ( on off 기능 )
              </ion-text>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid>
          <ion-row style="position: absolute ; bottom: 20px; right: 20px;">
            <ion-col>
              <ion-button @click="blockModalBtn('cancel')" fill="clear" class="modal-btn">취소</ion-button>
              <ion-button @click="blockModalBtn('save')" fill="clear" class="modal-btn">구매</ion-button>
            </ion-col>
          </ion-row>
          <ion-row style="position: absolute ; bottom: 15px; right: 20px;">
            <ion-col>
              <ion-text style="font-size: 15px; color: gray; font-weight: bolder">
                ( 💘 x 65개 소모 )
              </ion-text>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-modal>
    <!-- 모달창 끝  -->
  </ion-page>
</template>

<script>
import {
  IonButtons, IonToolbar, IonContent, IonPage, IonToggle
  , IonIcon, IonButton, IonCol, IonRow, IonGrid, IonItem, IonList, IonText, IonModal
} from '@ionic/vue';
import { chevronBack, closeCircleOutline, refreshOutline } from 'ionicons/icons';
import {alertController} from "@ionic/core";

export default {
  components: {
    IonButtons, IonToolbar, IonContent, IonPage, IonToggle, IonModal
    , IonIcon, IonButton, IonCol, IonRow, IonGrid, IonItem, IonList, IonText,
  },
  data() {
    return {
      closeCircleOutline,
      chevronBack,
      refreshOutline,
      modalBlock: false, // 모달창 열고 닫기 제어
      toggleChecked: false, // 토글 on off 제어

    };
  },
  ionViewWillEnter() {
    // 초기화
    // 진입할 때 호출
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  methods: {

    /** 토글 버튼 **/
    toggleBtn(e){
      if (e.detail.checked) {
        this.toggleChecked = true;
        this.modalBlock = true;
      } else {
        this.toggleChecked = false;
      }
    },
    /** 모달창 상태 **/
    modalDismissed(e) {
      if (e.detail.data === 'save') {
        this.toggleChecked = true;
      } else {
        this.toggleChecked = false;
        this.modalBlock = false;
      }
    },
    /** 모달창내 내용 들어갈예정 **/
    blockModalBtn(type){
      if (type === 'save'){
        this.modalBlock = false;
      } else {
        this.modalBlock = false;
        this.toggleChecked = false;
      }
    },

    /** 경고 팝업창 **/
    async warningAlert(message) {
      const alert = await alertController
          .create({
            header: '',
            subHeader: '',
            message: message,
            buttons: ['OK'],
          });
      return alert.present();
    },
  }

};
</script>

<style scoped>
ion-icon {
  color: black;
}
ion-toolbar {
  --background: #fff;
}
ion-toggle {
  height: 30px;
  width: 55px;

  --handle-width: 25px;
  --handle-height: 28px;
  --handle-max-height: auto;
  --handle-spacing: 4px;

  /* Required for iOS handle to overflow the height of the track */
  overflow: visible;
  contain: none;
}
.textbox {
  text-align: left;
  font-size: 15px;
  width: 90%;
  padding: 5px;
}
/** 모달 css **/
ion-modal {
  --height: 300px;
  --width: 350px;
  --border-radius: 7px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
.modal-btn {
  text-align: center;
  font-weight: bolder;
  font-size: 22px;
  color: black;
  margin: 5px;
}

/** 모달 css **/
</style>
