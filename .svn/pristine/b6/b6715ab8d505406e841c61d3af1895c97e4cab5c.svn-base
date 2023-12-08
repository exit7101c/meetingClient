<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/tab4"></ion-back-button>
        </ion-buttons>
        <ion-title>비밀번호 변경</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light">
      <!-- List Header Full Lines -->
      <ion-item lines="full" style="margin:15px" color="light" >
        <ion-label style="text-align:center; font-size:medium ">안전한 비밀번호 설정방법</ion-label>
      </ion-item>
      <ion-item lines="full" color="light">
        <ion-label style="{padding:15px; font-size: small; text-align:center;}">
          연속적인 숫자, 생일, 전화번호, 아이디와 <br>비슷한 설정을 제외하여 비밀번호를 변경해주세요. <br><br>
          영문, 숫자, 특수문자 조합하여 10~16자
        </ion-label>
      </ion-item>
      <ion-item lines="inset">
        <ion-note >새 비밀번호 </ion-note>
        <ion-label></ion-label>
        <!-- 테스트를 위해 minlength는 지정안해둠-->
        <ion-input type="password" v-model="newPw1" minlength="5" maxlength="16"></ion-input>
      </ion-item>
      <ion-item lines="full">
        <ion-note >새 비밀번호 확인 </ion-note>
        <ion-label></ion-label>
        <ion-input type="password" v-model="newPw2" maxlength="16"></ion-input>
      </ion-item>

        <ion-button @click="presentAlertConfirm" expand="block" color="medium">변경하기</ion-button>

    </ion-content>
  </ion-page>
</template>

<script>
import {
  alertController,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar, IonItem, IonNote
} from '@ionic/vue';
import { defineComponent } from 'vue';
import {getData, SS_USER_SEQ } from "@/assets/js/common";

export default defineComponent({
  name: "Password",
  components: {
    IonBackButton, IonInput, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonLabel, IonItem, IonNote
  },
  data(){
    return{
      userSeq : '',
      pw : '',
      newPw1 : '',
      newPw2 : '',

    }
  }
  , mounted(){
    this.selectOne();
  },
  updated(){

  },
  methods:{
    selectOne(){
      getData({
        url:'/setting/getUserOne',
        param:{'userSeq':SS_USER_SEQ},
        then: (data) => {
          this.userSeq = data.userSeq;
          this.pw = data.pw;
        }
      });
    },

    updatePw(){
      getData({
        url:'/setting/updatePw',
        param:{'userSeq':SS_USER_SEQ, 'pw': this.newPw1,},
        then: () => {
          this.presentAlert('변경되었습니다');
        }
      });
    },

    //비밀번호 변경 버튼 누를시, 값 확인하여 updatePw 실행 여부 정함
    async presentAlertConfirm() {
      if(this.newPw1 !== this.newPw2) {
        //alert('비밀번호를 확인해주세요')
        await this.presentAlert('비밀번호를 확인해주세요');
      }else if(this.newPw1 === this.pw){
        // alert('현재 비밀번호와 같습니다')
        await this.presentAlert('현재 비밀번호와 같습니다');
      }else{
      const alert = await alertController
          .create({
            //cssClass: 'my-custom-class',
            header: '비밀번호를 변경하시겠습니까?',
            message: '',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                },
              },
              {
                text: 'OK',
                handler: () => {
                  this.updatePw();
                },
              },
            ],
          });
      return alert.present();
      }
    },

    // 변경 확인 알림창
    async presentAlert(type) {
      const alert = await alertController
          .create({
            header: type,
            message: '',
            buttons: [
              {
                text: 'OK',
                role: 'Okay',
                cssClass: 'secondary',
                handler: () => {
                  if(type === '변경되었습니다'){
                    this.$router.push('/tabs/tab4')
                  }
                }
              },
            ],
          });
      return alert.present();
    },


  },
});
</script>

<style scoped>
ion-note{
  font-size : small;
}
</style>