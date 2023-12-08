<template>
  <ion-modal
    :is-open="isOpen"
    ref="modal"
    @ionModalDidDismiss="ionModalDidDismiss"
    :class="{
      'no-title': !title
    }"
    mode="md"
  >
    <ion-toolbar v-if="title">
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
    <ion-content class="ion-padding">
      <slot></slot>
    </ion-content>
    <ion-footer>
      <div class="btn-group text-center">
        <custom-button @click="handleCancelBtn" fill="outline" color="secondary"
          >{{ cancelLabel }}
        </custom-button>
        <custom-button color="secondary" @click="handleOkBtn">{{
          okLabel
        }}</custom-button>
      </div>
    </ion-footer>
  </ion-modal>
</template>
<script>
export default {
  name: 'ChoiceFilterModal',
  props: {
    isOpen: {
      type: Boolean
    },
    title: {
      type: String
    },
    okLabel: {
      type: String,
      default: '확인'
    },
    cancelLabel: {
      type: String,
      default: '닫기'
    }
  },
  methods: {
    ionModalDidDismiss() {
      this.$emit('ionModalDidDismiss');
    },
    handleCancelBtn() {
      this.$emit('cancel');
    },
    handleOkBtn() {
      this.$emit('ok');
    }
  }
};
</script>
<style lang="scss" scoped>
$titleHeight: 60px;
$modalHeight: 400px;
ion-modal {
  --max-width: 345px;
  --height: $modalHeight;
  &::part(content) {
    border-radius: var(--ion-border-radius-lg);
  }
  ion-toolbar {
    /* --background: var(--ion-color-dark); */
  }
  ion-content {
    height: calc($modalHeight - $titleHeight);
    &::part(background) {
      /* background: var(--ion-color-dark); */
    }
  }

  ion-list {
    /* background: var(--ion-color-dark); */
  }

  &.no-title {
    ion-content {
      height: $modalHeight;
    }
  }
}
</style>
