<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title size="small" style="font-weight: bold">
          Community 쪽지 보내기
        </ion-title>
        <ion-buttons slot="start">
          <ion-button @click="presentAlertConfirm()">
            <ion-icon slot="icon-only" :icon="chevronBack" />
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button style="--color: black; font-weight: bolder;"
                      @click="checkBth()" :disabled="!checkButton()">
            보내기
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <!--  메인  -->
    <ion-content class="ion-padding">

      <!--   카테고리 선택   -->

      <!--      <ion-list lines="none" style="margin-top: 20px; margin-bottom: 20px">-->
      <!--        <ion-item counter="true" :counterFormatter="customFormatter">-->
      <!--          <ion-input type="text" :clear-input="true" maxlength="20"-->
      <!--                     placeholder="제목을 입력하세요." class="custom-input"-->
      <!--                     v-model="title"/>-->
      <!--        </ion-item>-->
      <!--      </ion-list>-->

      <ion-item counter="true" :counterFormatter="customFormatter" style="margin-top: 10px;">
        <ion-textarea v-model="content"
                      :rows="15" :clear-on-edit="false" class="custom-textarea" maxlength="500"
                      placeholder="내용을 입력해주세요.">

        </ion-textarea>
      </ion-item>

    </ion-content>


  </ion-page>
</template>

<script>
import {
  IonButtons, IonButton, IonIcon, IonToolbar, IonTitle, IonContent,
  IonPage, IonTextarea, IonItem, alertController, loadingController
} from "@ionic/vue";
import {
  chevronBack,
  addOutline,
  calendarClearOutline,
  locationOutline,
  starOutline,
  ellipsisVertical
} from "ionicons/icons";
import { tempMap } from "@/assets/js/common";

export default {
  components: {
    IonButtons, IonButton, IonIcon, IonToolbar, IonTitle, IonContent, IonPage, IonTextarea, IonItem
  },

  data() {
    return {
      chevronBack,
      addOutline,
      calendarClearOutline,
      locationOutline,
      starOutline,
      ellipsisVertical,

      title: "",
      content: "",
      nick: ""

    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출

  },

  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
  },
  methods: {

    getResult() {
      let resultObj = {};

      resultObj.articleKey = tempMap.article;

      return resultObj;
    },


    /** 수정 버튼을 눌러서 페이지 진입했을때 .**/
    getUpdate() {
      // getData({
      //   url: '/',
      //   param: {'articleKey': tempMap.article},
      //   then: data => {
      //
      //   },
      // });
    },

    /** 완료버튼 활성화 체크 **/
    checkButton() {
      if (this.content.trim() !== "") {
        return true;
      } else {
        return false;
      }
    },

    async presentAlertConfirm() {
      const alert = await alertController
        .create({
          //cssClass: 'my-custom-class',
          header: "",
          message: "이 화면에서 나가면 입력한 내용은 저장되지 않습니다.",
          buttons: [
            {
              text: "취소",
              role: "cancel",
              cssClass: "secondary",
              handler: () => {
              }
            },
            {
              text: "나가기",
              handler: () => {
                this.$router.go(-1);
              }
            }
          ]
        });
      return alert.present();
    },

    /** 보내기 버튼 **/
    checkBth() {

    },

    /** 로딩창 **/
    async showLoading(time) {
      const loading = await loadingController.create({
        message: "Loading...",
        duration: time
      });
      await loading.present();
    },
    /** 경고창 **/
    async warningAlert(message) {
      const alert = await alertController
        .create({
          header: "",
          subHeader: "",
          message: message,
          buttons: ["OK"]
        });
      return alert.present();
    },

    /** 글자수 체크 **/
    customFormatter(inputLength, maxLength) {
      if (inputLength > maxLength) {
        return "더이상 입력할수 없습니다.";
      } else if (inputLength < 1) {
        return `최소 ${1 - inputLength}자 / 최대 ${maxLength}자`;
      } else {
        return `최소 글자수 완료 / 최대 ${maxLength - inputLength}자`;
      }
    }

  }
};
</script>

<style scoped>


ion-toolbar {
  --background: #fff;
}

ion-col {
  right: 5px;
  height: 60px;
  padding: 0px;
  border: 1px solid #CCCCCC;
}

ion-grid {
  margin-top: 15px;
  padding: 0px;
}

/* 카테고리 선택창 , 제목 입력창 */
ion-item {
  --highlight-color-focused: #d3d3d3;
  --border-style: none;
}

ion-item.writer {
  --border-color: #fff;
}


/* 상단 프로필 보기 뱃지*/
h3 ion-badge {
  font-size: 10px;
  font-weight: lighter;
  --background: #efb4b4;
  --color: #ffffff;
  --padding-end: 2px;
  --padding-start: 2px;
}

/* 상단 프로필 우측 시간 */
ion-badge {
  font-size: 13px;
  font-weight: normal;
  --background: #ffffff;
  --color: #626262;
  --padding-end: 0px;
  --padding-start: 0px;
}

/* 하단 장소, 시간 */
ion-content ion-item.footerItem::part(native) {
  background: #efefef;
  color: #343434;
  border-style: none;
  --border-color: #efefef;
  border-radius: 5px;
  margin-top: 0.3em;

}

/* 본문 입력창*/
ion-textarea.custom-textarea {
  --background: #ffffff;
  --color: #343434;
  --padding-end: 10px;
  --padding-start: 10px;
  --placeholder-color: #343434;
  font-size: 12px;
  border: solid 1px #d7d7d7;
}

/* 사진 추가 박스 */
ion-card-subtitle {
  color: #CCCCCC;
  font-size: 13px;
  position: absolute;
  margin-top: 38px;
  margin-bottom: 8px;
  text-align: center;
}

ion-modal {
  --height: 66%;
  --width: 100%;
  --border-radius: 10px;
}

ion-modal ion-toolbar {
  --color: black;
}

.categoryBtn {
  font-size: 13px;
  --color: black;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 5%;
  width: 130px;
}

.custom-input {
  font-size: 16px;
  margin-top: 0px;
  border-bottom: 2px solid #cccccc;
  width: 100%;
}
</style>
