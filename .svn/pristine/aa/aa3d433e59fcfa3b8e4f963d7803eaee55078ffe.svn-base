<template>

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="modalController.dismiss">
            <ion-icon :icon="closeOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>{{ userName }}</ion-title>
      </ion-toolbar>
    </ion-header>

      <ion-card>

        <ion-card-header>
          <ion-item lines="none">
            <ion-thumbnail style="width: 80vw; height: 80vw;">
              <ion-img class="mainPropImg"
                 :src="this.mainPath != null && this.mainPath != '' ?
                 this.path + this.mainPath :
                 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiAMeBiVhWUuCx9knvYReR41JCal4Jvtmn1Q&usqp=CAU'"></ion-img>
            </ion-thumbnail>
          </ion-item>

          <ion-item lines="none" >
            <ion-thumbnail
                style="width: 16vw; height: 16vw;"
                :key="item" v-for="item in itemList">
                <ion-img class="thumbPropImg" style="cursor:pointer" @click="this.mainPath = item.attachFileId"
                 :src="item.attachFileId != null && item.attachFileId != '' ?
                 this.path + item.attachFileId :
                 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiAMeBiVhWUuCx9knvYReR41JCal4Jvtmn1Q&usqp=CAU'">
                </ion-img>
            </ion-thumbnail>
          </ion-item>

          <ion-card-subtitle v-if="sex == 'M'">남성</ion-card-subtitle>
          <ion-card-subtitle v-else>여성</ion-card-subtitle>
          <ion-card-title>{{ userName }}</ion-card-title>
        </ion-card-header>
        <ion-card-content v-bind:class="[isHide ? activeClass : '']">
          <p>나와의 거리 : 약 {{ distance }} km</p>
        </ion-card-content>

      </ion-card>
<!--      <ion-button
          v-bind:class="[isHide ? activeClass : '']"
          color="primary"
          expand="block"
          @click="checkMsgChannel">채팅하기
      </ion-button>-->
    <ion-footer v-bind:class="[isHide ? activeClass : '']">
      <ion-toolbar>
        <ion-button
            color="primary"
            expand="block"
            @click="checkMsgChannel">채팅하기
        </ion-button>
      </ion-toolbar>
    </ion-footer>
</template>

<script>
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonImg, IonButtons, IonButton, IonFooter, IonIcon,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonThumbnail, IonItem
} from '@ionic/vue';
import { closeOutline } from 'ionicons/icons';
import { modalController } from '@ionic/core'
import router from '@/router';
import { defineComponent } from 'vue';
import {getData, SS_USER_SEQ, IMAGE_BASE_URL} from '@/assets/js/common.js';

window.onpopstate = history.onpushstate = function(e) {
  modalController.dismiss();
}

  export default defineComponent({
  name: 'Detail',
  props: {
    seq: { type: Number, default: SS_USER_SEQ }
  },
  components: {
    IonHeader, IonToolbar, IonTitle, IonImg, IonButtons, IonButton, IonFooter, IonIcon,
    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonThumbnail, IonItem
  },
  data(){
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return{
      itemList: [],
      closeOutline,
      modalController,
      router,
      channelId: '',
      slideOpts,
      sex : '',
      userName: '',
      distance: '',
      mainPath: '',
      path : IMAGE_BASE_URL + '/img/',
      isHide : false,
      activeClass: 'hide',
    }
  },
  mounted(){
    //데이터 조회
    this.selectList(this.seq);
    /* 로그인 유저 본인인 경우 isHide를 true로 바꾸어 보이지 않게 할 요소들에 hide class 추가함 */
    if(this.seq == SS_USER_SEQ) {
      this.isHide = true;
    }
  },
  methods: {
    /* 선택한 회원의 정보를 받아옴 */
    selectList(seq) {
      getData({
        url: '/userList/getUserList',
        param: {'loginSeq':SS_USER_SEQ, 'userSeq': seq},
        then: (data) => {
          this.sex = data[0].sex;
          this.userName = data[0].userName;
          this.distance = data[0].dis;
          this.itemList = data;

          //메인사진
          const main = this.itemList.find(element => element.mainYn === 'Y')
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

    checkMsgChannel() {
      getData({
        url: '/userList/checkMsgChannel',
        param: {'loginSeq':SS_USER_SEQ, 'userSeq': this.seq},
        then: (data) => {
          this.channelId = data.channelId;
          this.$nextTick(()=>{
            if (this.channelId != null) {
              this.$router.push({name: "Msg",params:{'channelId':this.channelId,'contactId':this.seq, 'userName': this.userName}});
              this.modalClose();
            } else {
              this.getChannelId();
            }
          });
        }
      });
    },

    getChannelId() {
      getData({
        url: '/message/getChannelId',
        then: (data) => {
          this.channelId = data.newChannelId;
          this.$nextTick(()=> {
            this.$router.push({name: "Msg", params: {'channelId': this.channelId, 'contactId': this.seq, 'userName': this.userName}});
            this.modalClose();
          });
        }
      });
    },

    modalClose(success) {
      const response = {
        success
      };
      modalController.dismiss(response);
    },

  }
});
</script>

<style scoped>
.mainPropImg { margin: auto; }
.thumbPropImg { padding: 1px;}
.mainPropImg:after {
  content: "";
  display: block;
}

.hide { display: none; }

</style>
