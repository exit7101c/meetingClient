<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons  slot="end">
          <ion-button fill="outline" shape="round" @click="modalController.dismiss" >Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      {{ content }}
    </ion-content>
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button color = "dark" href="/tabs/tab3"><!--새로고침으로 꺼지게-->
        <ion-icon :icon="closeOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </div>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonFab, IonFabButton, IonIcon, IonButton, IonButtons,
} from '@ionic/vue';
import { closeOutline } from 'ionicons/icons'
import { defineComponent } from 'vue';
import { modalController } from '@ionic/core'

export default defineComponent({
  name: 'Modal',
  props: {
    title: { type: String, default: 'Super Modal' },
  },
  data() {
    return {
      content: 'Content modal....',
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar , IonButton, IonButtons,
                 IonFab, IonFabButton, IonIcon,
  },
  setup(){
    return{
      closeOutline, modalController
    }
  },


});

</script>