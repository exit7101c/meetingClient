<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
       <!-- <ion-buttons  slot="end">
          <ion-button fill="outline" shape="round" @click="modalController.dismiss" >Close</ion-button>
        </ion-buttons>-->
      </ion-toolbar>

    </ion-header>
    <ion-content scroll-y="false" fullscreen>
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <div class="slide">
            <img src="https://github.com/ionic-team/ionic-docs/blob/master/src/demos/api/slides/slide-1.png?raw=true"/>
            <h2>Welcome</h2>
            <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
          </div>
        </ion-slide>

        <ion-slide>
          <div class="slide">
          <img src="https://github.com/ionic-team/ionic-docs/blob/master/src/demos/api/slides/slide-2.png?raw=true"/>
          <h2>What is Ionic?</h2>
          <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>
          </div>
        </ion-slide>

        <ion-slide>
          <div class="slide">
          <img src="https://github.com/ionic-team/ionic-docs/blob/master/src/demos/api/slides/slide-3.png?raw=true"/>
          <h2>What is Ionic Appflow?</h2>
          <p><b>Ionic Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
          </div>
        </ion-slide>

        <ion-slide>
          <div class="slide">
          <img src="https://github.com/ionic-team/ionic-docs/blob/master/src/demos/api/slides/slide-4.png?raw=true"/>
          <h2>Ready to Play?</h2>
          <ion-button fill="clear">Continue <ion-icon slot="end" name="arrow-forward"></ion-icon></ion-button>
          </div>
        </ion-slide>
      </ion-slides>



    </ion-content>
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button color = "dark" @click="modalController.dismiss" >
        <ion-icon :icon="closeOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>

  </div>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonFab, IonFabButton, IonIcon, IonSlides, IonSlide, IonButton,
} from '@ionic/vue';
import { closeOutline } from 'ionicons/icons'
import { defineComponent } from 'vue';
import { modalController } from '@ionic/core'

export default defineComponent({
  name: 'Info',
  props: {
    title: { type: String, default: '안내' },
  },
  data() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    //슬라이드 옵션
    const slideOpts = {
      //처음에 보이는 슬라이드 번호(0부터)
      initialSlide: 0,
      speed: 400
    };
    return {
      content: 'Content modal....',
      closeOutline, modalController, slideOpts
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar ,
                 IonFab, IonFabButton, IonIcon, IonSlides, IonSlide,IonButton,
  },



});

</script>
<style scoped>
img {
  max-height: 50%;
  max-width: 80%;
  margin: 60px 0 40px;
}
p {
  padding: 0 40px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ion-color-step-600, #60646b);
}
ion-slides{
  --bullet-background : #aeb2f3;
  --bullet-background-active : #030526;
}

</style>