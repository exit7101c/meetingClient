<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="join-toolbar">
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>아이콘설정</ion-title>
      </ion-toolbar>
      <ProgressBar :currIdx="selectedAvatar.length > 0 ? 7 : 6"></ProgressBar>
    </ion-header>
    <ion-content>
      <div class="layout-container">
        <JoinTitle>
          <template #title>
            회원님을 대표하는<br />
            아이콘을 선택해주세요!
          </template>
          <template #desc>나에대해 보다 잘 알려줄 수 있어요!</template>
        </JoinTitle>
        <ion-list lines="none">
          <ion-radio-group v-model="selectedAvatar" class="img-radio-group">
            <ion-row>
              <ion-col size="4" v-for="data in iconList" :key="data.iconCd">
                <ion-item class="img-radio-button">
                  <ion-label>
                    <ion-img :src="'https://' + data.cdnThumbNm" />
                    <ion-text color="light">{{ data.iconNm }}</ion-text>
                  </ion-label>
                  <ion-radio slot="start" :value="data.iconCd"></ion-radio>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-radio-group>
        </ion-list>
      </div>
    </ion-content>
    <ion-footer class="join-footer">
      <div class="layout-container">
        <div class="btn-group">
          <custom-button
            fill="outline"
            color="primary"
            size="large"
            expand="block"
            shape="round"
            @click="validateAndNavigate"
          >
            다음으로
          </custom-button>
          <custom-button
            fill="clear"
            color="secondary"
            size="large"
            expand="block"
            shape="round"
            @click="this.$router.push('/joinLocation')"
          >
            건너뛰기
          </custom-button>
        </div>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script>
import { getData, COM_VALIDATION } from "@/assets/js/common";
import JoinTitle from "@/components/JoinTitle.vue";
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  name: "JoinNickname",
  inject: ["alertController"],
  components: {
    JoinTitle,
    ProgressBar
  },
  data() {
    return {
      COM_VALIDATION,
      iconList: "",
      selectedAvatar: "A",
      isNicknameValid: true
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.getIconList();
    // if( tempMap.state !== 'ing'){
    this.selectedAvatar = "A";
    // }
  },

  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
    // PUB
    // this.getIconList();
  },
  computed: {
    validate() {
      return this.COM_VALIDATION([{ value: this.joinNick, type: "nick" }]);
    }
  },
  methods: {
    goRouter() {
      // tempMap.item.iconCd = this.selectedAvatar; // 아이콘 코드

      this.$store.state.joinMap["iconCd"] = this.selectedAvatar;

      this.$router.push("/joinLocation");
    },

    /** 아이콘 리스트 **/
    getIconList() {
      getData({
        url: "/join/getIconList",
        param: {},
        target: this,
        then: (data) => {
          this.iconList = data;
        }
      });
    },
    /** next btn **/
    validateAndNavigate() {
      if (this.selectedAvatar) {
        this.goRouter();
      } else {
        this.warningAlert("아이콘을 선택하지 않았습니다.");
      }
    },

    /** 경고 팝업창 **/
    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: ["OK"]
      });
      return alert.present();
    }
  }
};
</script>

<style scoped></style>
