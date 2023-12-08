<template>
  <ion-modal :is-open="isOpen" @ionModalDidDismiss="ionModalDidDismiss">
    <ion-toolbar>
      {{ title }}
    </ion-toolbar>
    <ion-content>
      <ion-content>
        <div class="message">
          <p>
            {{ message }}
          </p>
        </div>
        <div class="modal-footer">
          <custom-button
            color="primary"
            shape="round"
            expand="block"
            size="large"
            @click="ionModalDidDismiss"
            >확인</custom-button
          >
        </div>
      </ion-content>
    </ion-content>
  </ion-modal>
</template>
<script>
export default {
  name: 'OneMessageModal.vue',
  props: {
    isOpen: {
      type: Boolean
    },
    title: {
      type: String
    },
    message: {
      type: String
    }
  },
  methods: {
    ionModalDidDismiss() {
      this.$emit('ionModalDidDismiss');
    }
  }
};
</script>
<style lang="scss" scoped>
ion-modal {
  --max-width: 345px;
  --max-height: 220px;
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
    background: var(--ion-custom-modal-color);
    text-align: center;
    --padding-top: 0;
    --padding-bottom: 0;
    --min-height: 44px;
    ion-title {
      font-size: 14px;
      font-weight: bold;
    }
  }
  ion-content {
    border-radius: var(--ion-border-radius);
    border-width: 1px solid var(--ion-color-primary);
    .message {
      padding: 10px;
      min-height: 100px;
      max-height: 100px;
      overflow-y: auto;
      p {
        color: white;
        font-size: 14px;
        line-height: 1.5;
        text-align: center;
      }
    }
  }
  .modal-footer {
    padding: 10px 4px;
  }
}
</style>
