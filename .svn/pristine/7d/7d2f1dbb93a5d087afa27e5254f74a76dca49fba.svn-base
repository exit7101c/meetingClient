<template>
  <ion-page>
    <ion-header>나는 윤도</ion-header>
    <ion-content>
      <ion-label>테스트1</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트2</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트3</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트4</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트5</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트6</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트1</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트2</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트3</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트4</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트5</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트6</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트1</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트2</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트3</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트4</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트5</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트6</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트1</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트2</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트3</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트4</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트5</ion-label>
      <ion-input></ion-input>
      <ion-label>테스트6</ion-label>
      <ion-input></ion-input>
    </ion-content>
    <ion-footer>
      나는 동주 a
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  IonInput,
  IonLabel,
  IonContent
} from "@ionic/vue";
import { alertController } from "@ionic/core";
import {
  mailOutline,
  lockClosedOutline,
  eyeOutline,
  eyeOffOutline
} from "ionicons/icons";

export default {
  name: "InputTest",
  components: {
    IonInput,
    IonLabel,
    IonContent
  },
  data() {
    return {
      mailOutline,
      lockClosedOutline,
      eyeOutline,
      eyeOffOutline,

      id: "",
      pw: "",
      isLogin: "",
      showPassword: false
    };
  },
  mounted() {

    /*if (SS_USER_SEQ != null) {
      location.replace("/home");
    }*/

  },
  methods: {

    /* 로그인 실패 안내 경고 alert창 */
    async warningAlert(message) {
      const alert = await alertController.create({
        header: "",
        subHeader: "Warning",
        message: message,
        buttons: ["OK"]
      });
      return alert.present();
    },

    register() {
      this.$router.push({ name: "Register" });
    }
  }
};
</script>

<style scoped>

ion-label {
  font-size: 70px;
}

ion-toolbar {
  --background: #fff;
}

.find-link {
}

.find-link:active {
  color: #000000;
}

.image-container {
  width: 300px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
}


.button-container {
  text-align: center;
  margin-top: 20px;
}

</style>
