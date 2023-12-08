<template>
  <ion-modal
    ref="modal"
    :is-open="isOpen"
    @ionModalDidDismiss="ionModalDidDismiss"
  >
    <ion-toolbar v-if="title != null || title == ''">
      {{ title || '제목' }}
    </ion-toolbar>
    <ion-content>
      <ion-content>
        <div class="message">
          <p>
            {{ message || '기본 메세지' }}
          </p>
          <p v-if="subMessage != null || subMessage == ''">
            {{ subMessage }}
          </p>
        </div>
        <div class="modal-footer">
          <ion-row>
            <ion-col style="margin: 0 auto; align-items: center">
              <custom-button
                shape="round"
                fill="outline"
                color="light"
                @click="ionModalDidDismiss"
                >취소
              </custom-button>
              <custom-button
                shape="round"
                @click="handleClickBtn"
                :disabled="disabledCheck"
              >
                {{ btnName }}
              </custom-button>
            </ion-col>
          </ion-row>
        </div>
      </ion-content>
    </ion-content>
  </ion-modal>
</template>
<script>
export default {
  name: 'AlertMessageModal',
  props: {
    isOpen: {
      type: Boolean
    },
    disabledCheck: {
      type: Boolean
    },
    title: {
      type: String
    },
    message: {
      type: String
    },
    subMessage: {
      type: String
    },
    btnName: {
      type: String
    },
    height: {
      type: Number,
      default: 300
    }
  },
  watch: {
    height(height) {
      this.modalHeight(height);
    }
  },
  mounted() {
    this.modalHeight(this.height);
  },
  methods: {
    /** 모달 크기조절 **/
    modalHeight(height) {
      const modal = this.$refs.modal.$el;
      modal.style.setProperty('--max-height', height + 'px');
    },

    ionModalDidDismiss() {
      this.$emit('ionModalDidDismiss');
    },
    handleClickBtn() {
      this.$emit('handleClickBtn');
    }
  }
};
</script>
<style lang="scss" scoped>
ion-modal {
  --max-width: 345px;
  --max-height: var(--modal-height);
  padding: 0 18px;

  &::part(content) {
    border-radius: var(--ion-border-radius-lg);
  }

  ion-content {
    &::part(scroll) {
      overflow: hidden;
    }
  }

  ion-toolbar {
    //background: var(--ion-custom-modal-color);
    background: transparent;
    text-align: center;
    --padding-top: 0;
    --padding-bottom: 0;
    --min-height: 40px;

    ion-title {
      font-size: 16px;
      font-weight: bold;
    }
  }

  ion-content {
    position: relative;
    border-radius: var(--ion-border-radius);
    border-width: 1px solid var(--ion-color-primary);

    .message {
      margin: 0 6px 6px 6px;
      //border: 1px solid white;
      //border: 1px solid #706af7;
      //border-radius: var(--ion-border-radius-lg);
      //box-shadow: 0 0 3px rgba(112, 106, 247);
      padding: 10px;
      min-height: 100px;
      max-height: 200px;
      overflow-y: auto;

      p {
        color: white;
        font-size: 14px;
        line-height: 1.5;
        margin: 3px;
      }
    }
  }

  .modal-footer {
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    margin-top: -5px;
    padding: 10px 4px;
  }
}

ion-col {
  display: flex;
  justify-content: center;
}
</style>
