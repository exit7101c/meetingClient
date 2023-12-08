<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Listen now</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!--<div class="example-content">Radio</div>-->
      <swiper>
        <swiper-slide><img src="" height="157" width="155" />
          <img alt="Silhouette of mountains"
               src="https://img.allurekorea.com/allure/2023/01/style_63be465f4e2e9-700x700.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img alt="Silhouette of mountains"
               src="data:image/jpeg;base64,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" />
        </swiper-slide>
        <swiper-slide>
          <img alt="Silhouette of mountains"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmT4s7lTTxf5Dj3hrL1rNd8Bb90b95fCcY5-hCYuMnHl01ANEBZDFk62diz1kGenVuxI8&usqp=CAU" />
        </swiper-slide>
        <swiper-slide>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        </swiper-slide>
        <swiper-slide>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        </swiper-slide>
        <swiper-slide>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        </swiper-slide>
      </swiper>


    </ion-content>
  </ion-page>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";

export default {
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
    Swiper,
    SwiperSlide
  }
};
</script>

<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
