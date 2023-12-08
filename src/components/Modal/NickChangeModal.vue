<template>
  <ion-modal :is-open="isOpen" @ionModalDidDismiss="ionModalDidDismiss">
    <ion-content class="ion-padding">
      <ion-toolbar mode="md">
        <ion-title class="main-header">
          {{ title || '제목' }}
        </ion-title>
      </ion-toolbar>
      <ion-row>
        <ion-col size="12">
          <ion-item
            counter="true"
            :counterFormatter="customFormatter"
            class="input-field"
          >
            <ion-input
              type="text"
              :clear-input="true"
              :value="userNick"
              maxlength="8"
              placeholder="닉네임은 최대 8글자까지 가능해요."
              class="custom-input"
              @ionInput="validateNickname($event)"
            />
          </ion-item>
          <ion-note class="errorText" v-if="!isNicknameValid">
            닉네임이 올바르지 않아요
          </ion-note>
        </ion-col>
        <ion-col size="12">
          <div class="text-center">
            <custom-button
              color="secondary"
              fill="outline"
              @click="ionModalDidDismiss"
            >
              취소
            </custom-button>
            <custom-button
              color="secondary"
              fill="solid"
              @click="saveCommunityNickname"
            >
              변경
            </custom-button>
          </div>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-modal>
</template>
<script>
import { getData } from '@/assets/js/common';

export default {
  inject: ['alertController', 'loadingController'],
  name: 'NickChangeModal',
  props: {
    isOpen: {
      type: Boolean
    },
    customFormatter: {
      type: Function
    },
    title: {
      type: String
    },
    userNick: {
      type: String
    }
  },
  data() {
    return {
      changeNick: '',
      loading: null,
      isNicknameValid: Boolean,
      changeNickname: this.userNick
    };
  },
  methods: {
    saveCommunityNickname() {
      if (this.changeNick == null || this.changeNick == '') {
        this.changeNick = this.userNick;
      }
      getData({
        url: '/setChangeNicknameCheck',
        param: { nick: this.changeNick },
        then: (data) => {
          if (data.successYn === 'N') {
            this.warningAlert('중복된 닉네임 입니다.');
          } else {
            this.btnHandler();
          }
        }
      });
    },
    validateNickname($event) {
      // 정규식을 사용하여 특수문자 및 자음/모음만 있는지 확인합니다.
      const regex = /[{}[\]/?.,;:|)*~`!^\\-_+<>@#$%&()='"]/g;
      const regex2 = /\s/g;
      // const regex3 = /([^가-힣a-z\x20])/i;
      const regex3 = /[^가-힣a-zA-Z0-9_\s]/g;

      this.isNicknameValid =
        !regex.test($event.target.value) &&
        !regex2.test($event.target.value) &&
        !regex3.test($event.target.value);

      this.changeNick = $event.target.value;
    },

    async btnHandler() {
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: '',
        message:
          `'` +
          this.changeNick +
          `'(님) 으로 변경하시겠습니까? <br />*변경 후 30일동안 변경이 불가능합니다.`,
        buttons: [
          {
            text: '취소',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              this.isNicknameValid = true;
            }
          },
          {
            text: '완료',
            handler: () => {
              getData({
                url: '/changeUserNick',
                param: {
                  beforeNick: this.userNick,
                  afterNick: this.changeNick
                },
                then: (data) => {
                  if (data.successYn === 'N') {
                    this.warningAlert(data.message);
                  } else {
                    this.$emit('userChangeNick');
                    this.warningAlert('변경완료');
                  }
                }
              });
            }
          }
        ]
      });
      return alert.present();
    },

    /** 로딩창 **/
    async showLoading() {
      this.loading = await this.loadingController.create({
        message: 'Loading...',
        duration: 0
      });
      await this.loading.present();
    },

    /** 경고 alert창 **/
    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: '',
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      return alert.present();
    },
    ionModalDidDismiss() {
      this.$emit('ionModalDidDismiss');
    }
  }
};
</script>
<style lang="scss" scoped>
ion-modal {
  padding: 0 18px;
  --max-height: 230px;

  &::part(content) {
    border-radius: var(--ion-border-radius-lg);
  }

  ion-content {
    &::part(scroll) {
      overflow: hidden;
    }
  }

  ion-avatar {
    position: relative;
    width: 140px;
    height: 140px;
    object-fit: cover;
    border: 2px solid var(--ion-color-warning);
    margin: 0 auto;

    .btn-profile {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1rem;
      margin: 0;

      &::part(native) {
        width: auto;
        height: 24px;
        margin: 0 auto;
        padding: 0 10px;
      }
    }
  }

  .profile-info {
    text-align: center;
  }
}

.errorText {
  font-size: 12px;
  position: absolute;
  color: #ff002a;
  margin: -15px 0 0 5px;
}
</style>
