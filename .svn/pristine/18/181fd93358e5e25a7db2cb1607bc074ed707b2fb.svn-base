<template>
  <custom-button @click="handleClick" class="button-history-back">
    <ion-icon slot="icon-only" :icon="chevronBack" />
  </custom-button>
</template>
<script>
import { chevronBack } from 'ionicons/icons';

export default {
  name: 'BackButton',
  props: {
    custom: {
      type: Boolean
    }
  },
  data() {
    return {
      chevronBack
    };
  },
  methods: {
    handleClick() {
      if (this.custom) {
        this.$emit('event');
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
