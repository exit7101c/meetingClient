<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="join-toolbar">
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>이용약관</ion-title>
      </ion-toolbar>
      <ProgressBar :currIdx="isValidateForm ? 3 : 2"></ProgressBar>
    </ion-header>
    <ion-content>
      <div class="layout-container">
        <JoinTitle>
          <template v-slot:title>
            이용약관에 <br />
            동의해 주세요
          </template>
          <template v-slot:desc>
            [필수] 이용약관에 동의해야 사용할 수 있어요
          </template>
        </JoinTitle>
        <ion-list class="agree">
          <ion-item lines="none" class="all-agree">
            <!--            <ion-checkbox mode="ios"-->
            <!--              slot="start"-->
            <!--              @ionChange="handleAllAgree"-->
            <!--              v-model="allAgree"-->
            <!--            >-->
            <!--            </ion-checkbox>-->
            <ion-checkbox
              mode="ios"
              slot="start"
              @click="allCheckBox"
              v-model="allAgree"
            >
            </ion-checkbox>
            <ion-label>이용 약관에 동의합니다.</ion-label>
            <!--            <ion-icon-->
            <!--              :icon="!toggleAgree ? chevronDownOutline : chevronUpOutline"-->
            <!--              color="light"-->
            <!--            ></ion-icon>-->
          </ion-item>
          <!--          <div v-show="toggleAgree">-->
          <ion-item
            lines="none"
            detail="true"
            style="font-size: 12px"
            @click="checkBoxBtn"
          >
            <ion-checkbox
              mode="ios"
              slot="start"
              v-model="termService"
            ></ion-checkbox>
            <ion-label class="appfontR">[필수] 서비스 이용약관 동의 </ion-label>
            <ion-icon
              slot="end"
              :icon="chevronForward"
              class="iconBtn"
              @click.stop="terms('a')"
            />
          </ion-item>
          <ion-item
            lines="none"
            detail="true"
            style="font-size: 12px"
            @click="checkBoxBtn"
          >
            <ion-checkbox
              mode="ios"
              slot="start"
              v-model="termUserInfo"
            ></ion-checkbox>
            <ion-label class="appfontR">[필수] 개인정보 보호정책</ion-label>
            <ion-icon
              slot="end"
              :icon="chevronForward"
              class="iconBtn"
              @click.stop="terms('b')"
            />
          </ion-item>
          <ion-item
            lines="none"
            detail="true"
            style="font-size: 12px"
            @click="checkBoxBtn"
          >
            <ion-checkbox
              mode="ios"
              slot="start"
              v-model="termMarketing"
            ></ion-checkbox>
            <ion-label>[선택] 홍보 및 마케팅 목적</ion-label>
            <ion-icon
              slot="end"
              :icon="chevronForward"
              class="iconBtn"
              @click.stop="terms('c')"
            />
          </ion-item>
          <ion-item
            lines="none"
            detail="true"
            style="font-size: 12px"
            @click="checkBoxBtn"
          >
            <ion-checkbox
              mode="ios"
              slot="start"
              v-model="termPush"
            ></ion-checkbox>
            <ion-label class="appfontR">[선택] 광고성 정보 수신</ion-label>
            <ion-icon
              slot="end"
              :icon="chevronForward"
              class="iconBtn"
              @click.stop="terms('d')"
            />
          </ion-item>
          <!--          </div>-->
        </ion-list>
      </div>

      <ion-grid class="ion-padding">
        <ion-row>
          <ion-col
            size="12"
            style="position: absolute; bottom: 25px; left: 15px"
          >
          </ion-col>
        </ion-row>
      </ion-grid>
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
            :disabled="!checkDisabled"
            @click="validateAndNavigate"
          >
            다음으로
          </custom-button>
        </div>
      </div>
    </ion-footer>
    <TermsModal
      :is-open="termModalOpen"
      :termsTitle="termsTitle"
      :termsType="termsType"
      @ionModalDidDismiss="termModalOpen = false"
    />
  </ion-page>
</template>

<script>
import {
  chevronDownOutline,
  chevronUpOutline,
  chevronForward
} from 'ionicons/icons';
import JoinTitle from '@/components/JoinTitle.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import TermsModal from '@/components/Modal/TermsModal.vue';

export default {
  name: 'JoinConditions',
  inject: ['alertController'],
  components: {
    JoinTitle,
    ProgressBar,
    TermsModal
  },
  data() {
    return {
      chevronForward,
      chevronDownOutline,
      chevronUpOutline,
      allAgree: false,
      termService: false,
      termUserInfo: false,
      termMarketing: false,
      termPush: false,
      toggleAgree: false,

      termsTitle: '',
      termsType: '',
      termModalOpen: false
    };
  },
  computed: {
    // PUB
    isValidateForm() {
      return this.termService === true && this.termUserInfo === true;
    },
    checkDisabled() {
      return this.isNextButtonEnabled();
    }
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    // if (tempMap.state !== 'ing') {
      this.termService = false;
      this.termUserInfo = false;
      this.termMarketing = false;
      this.termPush = false;
    // }

  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {},
  methods: {
    checkBoxBtn() {
      if (
        this.termService === false ||
        this.termUserInfo === false ||
        this.termMarketing === false ||
        this.termPush === false
      ) {
        this.allAgree = false;
      } else if (
        this.termService === true &&
        this.termUserInfo === true &&
        this.termMarketing === true &&
        this.termPush === true
      ) {
        this.allAgree = true;
      }
    },
    terms(type) {
      if (type === 'a') {
        this.termsType = 'service';
        this.termsTitle = '서비스 이용약관';
      } else if (type === 'b') {
        this.termsType = 'info';
        this.termsTitle = '개인정보 보호정책';
      } else if (type === 'c') {
        this.termsType = 'marketing';
        this.termsTitle = '홍보 및 마케팅 목적';
      } else if (type === 'd') {
        this.termsType = 'push';
        this.termsTitle = '광고성 정보 수신';
      }
      this.termModalOpen = true;
    },
    goRouter() {
      // tempMap.item.termService = this.termService ? 'Y' : 'N';
      // tempMap.item.termUserInfo = this.termUserInfo ? 'Y' : 'N';
      // tempMap.item.termMarketing = this.termMarketing ? 'Y' : 'N';
      // tempMap.item.termPush = this.termPush ? 'Y' : 'N';

      this.$store.state.joinMap['termService'] = this.termService ? 'Y' : 'N';
      this.$store.state.joinMap['termUserInfo'] = this.termUserInfo ? 'Y' : 'N';
      this.$store.state.joinMap['termMarketing'] = this.termMarketing ? 'Y' : 'N';
      this.$store.state.joinMap['termPush'] = this.termPush ? 'Y' : 'N';

      this.$router.push('/joinNickname');
    },
    allCheckBox() {
      if (this.allAgree === false) {
        this.termService = true;
        this.termUserInfo = true;
        this.termMarketing = true;
        this.termPush = true;
      } else {
        this.termService = false;
        this.termUserInfo = false;
        this.termMarketing = false;
        this.termPush = false;
      }
    },
    /** 체크박스 전체선택 **/
    handleAllAgree() {
      // this.termService = this.allAgree;
      // this.termUserInfo = this.allAgree;
      // this.termMarketing = this.allAgree;
      // this.termPush = this.allAgree;
      // this.toggleAgree = !this.toggleAgree;
    },

    /** 필수체크박스 선택여부 체크 **/
    isNextButtonEnabled() {
      return this.termService && this.termUserInfo;
    },

    /** next btn **/
    validateAndNavigate() {
      if (this.isNextButtonEnabled()) {
        this.goRouter();
      } else {
        this.warningAlert('필수항목을 선택하지 않았습니다.');
      }
    },

    /** 경고 팝업창 **/
    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: '',
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      return alert.present();
    }
  }
};
</script>

<style scoped>
.iconBtn {
  color: white;
  font-size: 24px;
  position: absolute;
  right: 0px;
  z-index: 999;
}

ion-modal {
  --height: 450px;
  --width: 95%;
  --border-radius: 15px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>
