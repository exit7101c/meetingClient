<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/tab2"></ion-back-button>
        </ion-buttons>
        <ion-title>지도</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <GMapMap
          :center="center"
          :zoom="15"
          map-type-id="roadmap"
          style="width: 100vw; height: 20rem"
      >
<!--        <GMapCluster>-->
          <GMapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              @click="center=m.position"
          />
<!--        </GMapCluster>-->
      </GMapMap>
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonContent, IonHeader, IonPage, IonToolbar, IonTitle, IonButtons, IonBackButton
  } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { getData, SS_USER_SEQ } from '@/assets/js/common.js';

  export default defineComponent({
    name: 'Map',
    components: {
      IonContent, IonHeader, IonPage, IonToolbar, IonTitle, IonButtons, IonBackButton
    },
    data(){
      return {
        center: {lat: 37.49638, lng: 126.92010},

    mounted(){
      this.makeMarker();
    },
    updated(){

    }
    },
    methods:{
      makeMarker() {
        this.markers = [];

        getData({
          url:'/userList/getUserList',
          param:{'loginSeq':SS_USER_SEQ},
          then: (data) => {

            for (let index = 0, len = data.length ; index < len ; index++) {
              if (data[index].userSeq == SS_USER_SEQ) { /* 로그인 사용자 정보 저장 */
                this.center = {lat:data[index].lat, lng:data[index].lng};
                const position = {
                  position : {
                    lat : data[index].lat,
                    lng : data[index].lng
                  }
                }
                this.markers.push(position);
              } else { /* 로그인 사용자 외의 회원 정보 저장 */
                const position = {
                  position : {
                    lat : data[index].lat,
                    lng : data[index].lng
                  }
                }
                this.markers.push(position);
              }

            }
          }
        });
      }
    },
  });
</script>
<style>
.vue-map-container {
  width: 100%;
  height: 100%;
}
</style>