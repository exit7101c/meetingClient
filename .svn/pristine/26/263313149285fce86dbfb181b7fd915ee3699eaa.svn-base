<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- Refresh -->
      <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)" pull-factor="0.5" pull-min="100">
        <ion-refresher-content refreshing-spinner="circles" :pulling-icon="chevronDownCircleOutline"></ion-refresher-content>
      </ion-refresher>
      <!-- Photo List -->
      <ion-grid>
        <ion-row>
          <ion-col size="4" :key="item" v-for="item in itemList" @click="openModal(item.userSeq)">
            <ion-thumbnail style="width: 30vw; height: 30vw">
            <ion-img v-if="item.filePath != null" :src="this.path + item.attachFileId"></ion-img>
            <ion-img v-if="item.filePath == null" :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiAMeBiVhWUuCx9knvYReR41JCal4Jvtmn1Q&usqp=CAU'"></ion-img>
            </ion-thumbnail>
            <h6>{{item.userName}}</h6>
            <ion-text color="primary">
              <small>약 {{item.dis}} km</small>
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <!-- Header -->
    <ion-header>
      <ion-toolbar>
        <ion-title>사진</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="mapOpen()">
            <ion-icon :icon="mapOutline" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<script>
import {
  IonContent, IonHeader, IonPage, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonImg, IonThumbnail
  , IonRefresher, IonRefresherContent, IonText, IonButtons, IonButton, IonIcon, modalController
} from '@ionic/vue';
import { chevronDownCircleOutline, mapOutline } from 'ionicons/icons';
import router from '@/router';
import { defineComponent } from 'vue';
import UserDetail from "@/views/modals/UserDetail";
import {getData, SS_USER_SEQ, IMAGE_BASE_URL} from '@/assets/js/common.js';


export default defineComponent({
  name: 'UserList',
  components: {
    IonContent, IonHeader, IonPage, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonImg, IonRefresher, IonThumbnail
    , IonRefresherContent, IonText, IonButtons, IonButton, IonIcon,
  },
  data(){
    return{
      itemList: [],
      loginList: [],
      chevronDownCircleOutline,
      mapOutline,
      router,
      path : IMAGE_BASE_URL + '/img/',
    }
  },
  mounted(){
    this.selectList();
  },
  methods:{

    /* 사용자 전체 리스트 받아옴 */
    selectList(){
      getData({
        url:'/userList/getUserList',
        param:{'loginSeq':SS_USER_SEQ},
        then: (data) => {

          this.itemList = [];
          this.loginList = [];

          this.$nextTick(()=>{
            for (let index = 0, len = data.length ; index < len ; index++) {
              if (data[index].userSeq === SS_USER_SEQ) { /* 로그인 사용자 정보 저장 */
                this.loginList.push(data[index]);
              } else { /* 로그인 사용자 외의 회원 정보 저장 */
                this.itemList.push(data[index]);
              }
            }
          });
        }
      });
    },

    //유저 모달창
    async openModal(userSeq) {
      const modal = await modalController
          .create({
            component: UserDetail,
            cssClass: 'my-custom-class',
            componentProps: {
              seq: userSeq,
            },
          })
      return modal.present();
    },

    /* Refresh */
    doRefresh(event){
      this.selectList();
      setTimeout(() => {
        event.target.complete();
      }, 1000);
    },

    mapOpen() {
      this.$router.push({
        name: "Map",
        params : {
          'userSeq' : SS_USER_SEQ
        }
      });
    }
  },
});
</script>

<style>
ion-col ion-img:after {
  content: "";
  display: block;
}
</style>
