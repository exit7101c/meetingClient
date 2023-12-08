<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/tab4"></ion-back-button>
        </ion-buttons>
        <ion-title >프로필 수정</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>메인 사진</ion-card-subtitle>
          <ion-card-title>
            <ion-item>
              <!-- 메인 사진 -->
              <ion-img v-if="this.mainPath !='' " :src="this.path + this.mainPath" style="width:300px; height:200px"></ion-img>
              <ion-img v-if=" this.mainPath =='' " :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiAMeBiVhWUuCx9knvYReR41JCal4Jvtmn1Q&usqp=CAU'"></ion-img>
            </ion-item>

            <ion-item lines="none"  >
              <ion-item :key="item" v-for="item in userInfo"  lines="none" >
                <div @click="actionSheet(item.attachFileId)" >
                  <ion-thumbnail v-if="item.thumbnail != '' && item.thumbnail != null" >
                    <ion-img :src="this.path +item.attachFileId"></ion-img>
                    <!-- <ion-img :src="this.path +item.filePath + item.thumbnail" ></ion-img>-->
                  </ion-thumbnail>
                </div>
              </ion-item>

              <ion-item lines="none" v-if="this.userInfo.length < 5">
                <ion-fab-button size="small" @click="addPhoto" color="secondary">
                  <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
               </ion-item>
            </ion-item>

          </ion-card-title>
        </ion-card-header>

        <ion-card-content>
            <input type="file" @change="onFileChange" ref="photo" style="display:none">

          <ion-item>
            <ion-label position="stacked" >이름</ion-label>
            <ion-input v-model="userName"></ion-input>
          </ion-item>

          <ion-radio-group value="sex" v-model="sex">
          <ion-item>
            <ion-label>성별</ion-label>
            <ion-col>
                  <ion-item lines="none">
                    <ion-label>여성</ion-label>
                    <ion-radio value="W"></ion-radio>
                  </ion-item>
            </ion-col>
            <ion-col>
                  <ion-item lines="none">
                    <ion-label>남성</ion-label>
                    <ion-radio value="M" checked="true"></ion-radio>
                  </ion-item>
            </ion-col>

          </ion-item>
          </ion-radio-group>

          <ion-item>
            <ion-label>생년월일</ion-label>
            <ion-datetime slot="end" display-format="YYYY/MM/DD" min="1990-01-01" max="2020-12-31"
                          v-model=birth default="1996-02-02"></ion-datetime>
          </ion-item>

          <!-- Textarea with custom number of rows and cols -->
          <ion-item>
            <ion-label position="stacked">자기소개</ion-label>
            <ion-textarea rows="3" cols="20" placeholder="자기소개를 적어주세요!" v-model=introduction></ion-textarea>
          </ion-item>

        </ion-card-content>
      </ion-card>
      <ion-button @click="presentAlertConfirm" expand="block" color="primary">변경하기</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>

import {
 // alertController,
  actionSheetController, IonBackButton,IonButtons,IonContent,IonDatetime,IonHeader,IonInput, IonLabel,IonPage,
  IonTitle, IonToolbar, IonItem, IonImg, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader,
  IonTextarea, IonRadio, IonRadioGroup, IonCol, IonThumbnail, IonIcon, IonButton,
   IonFabButton,
} from '@ionic/vue';

import {
  alertController, /*loadingController*/
} from '@ionic/core';

import { defineComponent } from 'vue';
import {getData, setFile, SS_USER_SEQ, IMAGE_BASE_URL} from "@/assets/js/common";
import { close, trash, imagesOutline, heartCircleOutline, add } from 'ionicons/icons';


export default defineComponent({
  name: 'Account',
  components: {
    IonBackButton, IonInput, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonDatetime, IonLabel, IonItem, IonImg, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader,
    IonTextarea, IonRadio, IonRadioGroup, IonCol,IonThumbnail, IonIcon, IonButton,
    IonFabButton,
  },
/*  props: {
    timeout: { type: Number, default: 3000 },
  },*/
  data(){
    return{
      userSeq : '',
      userName : '',
      sex : 'M',
      email : '',
      birth : '',
      introduction : '',
      serverFileNm : '',
      thumbnail : '',
      mainYn : '',
      mainPath : '',
      path : IMAGE_BASE_URL + '/img/',
      filePath : '',
      Attachfiles: [],
      userInfo : [],
      filePaths : [],
      type : '', //파일 첨부 insert와 update 구분
      add,
    }
  },
  computed: {
    photoEx() { // 사진이 등록됐는지 확인, 등록된 사진이 없는 경우 undefined 반환
      const pt = this.userInfo.find(element => element.attachFileId != null)
      return pt;
    },



  },
  mounted(){
    this.selectOne();
  },
  updated(){
    /*this.selectOne();*/
  },
  methods:{

    /*async presentLoading() {
      const loading = await loadingController
          .create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: this.timeout,
          });

      await loading.present();

      setTimeout(function() {
        loading.dismiss()
      }, this.timeout);
    },*/

    // 현재 로그인한 회원정보 불러오기
    selectOne(){
      getData({
        url:'/setting/getUserOne',
        param:{'userSeq':SS_USER_SEQ},
        then: (data) => {
         // this.userSeq = data[0].userSeq;
          this.userName = data[0].userName;
          this.email = data[0].email;
          this.sex = data[0].sex;
          this.introduction = data[0].introduction;
          this.birth = new Date(data[0].birth).toISOString().substring(0,10);
          this.userInfo = data;

          //메인사진
          const main = this.userInfo.find(element => element.mainYn === 'Y')
          if (main){
            this.mainPath = main.attachFileId;
          }

          if(this.photoEx === undefined){
            // 등록된 사진이 없는 경우 첫번째 등록 사진을 메인으로 만든다
            this.mainYn = 'Y'
          }else {
            this.mainYn = 'N'
          }


        }
      });
    },

    //사진 저장
    insertFile(){
      setFile({
        url: '/setting/uploadFile',
        param: {'userSeq':SS_USER_SEQ , 'main' : this.mainYn},
        file: this.Attachfiles,
        then: (data) => {

          /*if(data.isExist){
            $com.alert({msg: self.$t("msg.C002"), target: this, auto: true}, () => {
              self.handlePayload('ok')
              self.$emit('close')
            });
          }else{
            $com.alert({msg: self.$t("msg.Z013"), target: this, auto: true}, () => {
            });
          }*/
          this.Attachfiles.length = 0; // 파일이 들어있는 배열 리셋
          this.type = ''; // 리셋
          this.presentAlert('사진이 추가되었습니다!');
        }
      });
    },
    onFileChange: function onFileChange(e) {
      // TODO : 첨부 파일 개수 제한
      const files = e.target.files || e.dataTransfer.files;
      if(!files.length){
        return;
      }
     /* var fileSize = Number(files[0]['size']);
      if((fileSize / 1024 / 1024) > $com.FILE_UPLOAD_MAX_SIZE){
        $com.alert({msg: this.$t("msg.R100"), target: this}, () => {
        });
        return;
      }*/
      const allowedTypes = ["image/jpg", "image/jpeg", "image/png", "image/gif"]; // 허용할 이미지 파일 확장자 목록
      const file = files[0];
      if (!allowedTypes.includes(file.type)) { // 선택한 파일이 허용된 이미지 파일 확장자 목록에 포함되지 않는 경우
        this.warningAlert('이미지 파일만 업로드 가능해요'); // 사용자에게 알림 메시지 출력
        return;
      }
      this.Attachfiles.push(files[0]);
      /*var fileObject = {
        name : files[0].name,
        fileId : ''
      }
      this.files.push(fileObject);*/

      //파일 첨부 insert와 update 구분
      this.$nextTick(()=>{
        if(this.type === 'insert') {
          this.insertFile();

        }else {
          this.changeFile(this.fileId);

        }
      });
    },
    //사진 교체
    changeFile(fileId){
      setFile({
        url: '/setting/changeFile',
        param: {'userSeq':SS_USER_SEQ, 'fileId': fileId },
        file: this.Attachfiles,
        then: (data) => {

          /*if(data.isExist){
            $com.alert({msg: self.$t("msg.C002"), target: this, auto: true}, () => {
              self.handlePayload('ok')
              self.$emit('close')
            });
          }else{
            $com.alert({msg: self.$t("msg.Z013"), target: this, auto: true}, () => {
            });
          }*/
          this.Attachfiles.length = 0; // 파일이 들어있는 배열 리셋
          this.presentAlert('사진이 변경되었습니다!');
        }
      });
    },

    // 회원정보 수정
    updateUser(){
      getData({
        url:'/setting/updateUser',
        param:{
          'userSeq':SS_USER_SEQ
          , 'userName': this.userName
          , 'sex' : this.sex
          , 'birth' : new Date(this.birth).toISOString().substring(0,10)
          , 'introduction' : this.introduction
        },
        then: () => {
          //수정 후, 확인 알림창
          this.presentAlert('저장되었습니다!');
        }
      });
    },

    // 회원정보 저장버튼 >> Okay 누를시 updateUser 회원정보수정 메소드 실행
    async presentAlertConfirm() {
      const alert = await alertController
          .create({
            //cssClass: 'my-custom-class',
            header: '저장하시겠습니까?',
            message: '',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: blah => {

                },
              },
              {
                text: 'OK',
                handler: () => {

                  this.updateUser();
                },
              },
            ],
          });
      return alert.present();
    },
    addPhoto(){
      // 등록된 사진이 5개 이하라면 사진 첨부 가능하도록
      if(this.userInfo.length < 5){
        this.type= 'insert';
        this.$refs.photo.click();
      }else{
        this.presentAlert('사진은 5장까지만 등록 가능합니다');
      }

    },

    // 메인사진설정
    updatePhoto(fileId){
      getData({
        url:'/setting/resetMainPhoto',
        param:{'userSeq':SS_USER_SEQ, },
        then: () => {

          getData({
            url:'/setting/updateMainPhoto',
            param:{'userSeq':SS_USER_SEQ,'fileId':fileId},
            then: () => {

            }
          });
        }
      });
    },

    // 알림창
    async presentAlert(msg) {
      const alert = await alertController
          .create({
            header: '',
            message: msg,
            buttons: [
              {
                text: 'OK',
                role: 'Okay',
                handler: () => {

                  this.selectOne();
                }
              },
            ],
          });
      return alert.present();
    },

    //프로필 사진 클릭시 앨범
    async actionSheet(fileId) {
      const actionSheet = await actionSheetController
          .create({
            header: 'Albums',
            cssClass : 'red',
            buttons: [
              {
                text: '사진교체',
                icon: imagesOutline,
                handler: () => {

                  this.fileId = fileId;
                  this.$refs.photo.click();

                },
              },
              {
                text: '메인사진 지정',
                icon: heartCircleOutline,
                handler: () => {
                    this.updatePhoto(fileId);
                    this.presentAlert('메인사진으로 지정되었습니다.');
                },
              },
              {
                text: '삭제',
                role: 'destructive',
                icon: trash,
                handler: () => {

                  this.deleteUserPhoto(fileId);
                  this.deleteProfilePhoto(fileId);
                  this.presentAlert('삭제되었습니다');
                },
              },
              {
                text: '취소',
                icon: close,
                role: 'cancel',
                handler: () => {

                },
              },
            ],
          });
      await actionSheet.present();
      return actionSheet.present();
    },

    // 사진 삭제
    deleteUserPhoto(fileId){
      getData({
        url:'/setting/deleteUserPhoto',
        param:{'userSeq':SS_USER_SEQ, 'fileId':fileId},
        then: () => {

        }
      });
    },
    deleteProfilePhoto(fileId){
      getData({
        url:'/setting/deleteProfilePhoto',
        param:{'attachFileId':fileId},
        then: () => {

        }
      });
    },
  },
});
</script>
<style scoped>

ion-item{
  --inner-padding-end : 0px;
  --inner-padding-top : 0px;
  --padding-bottom : 0px;
  --padding-end : 5px;
  --padding-start : 5px;
  --padding-top : 0px;

}

.red {
  --button-background: red;
}

</style>