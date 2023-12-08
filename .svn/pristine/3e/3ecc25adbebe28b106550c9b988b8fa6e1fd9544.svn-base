<template>
  <ion-accordion>
    <ion-item slot="header" @click="clickModal">
      <slot name="header"></slot>
    </ion-item>
    <!--    <div class="ion-padding" slot="content">-->
    <!--      <slot name="content"></slot>-->
    <!--    </div>-->
  </ion-accordion>
</template>
<script>
export default {
  name: ' CustomAccordion',
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    clickModal() {
      this.$emit('itemClick');
    }
  }
};
</script>
<style lang="scss" scoped>
ion-accordion {
  border-radius: var(--ion-border-radius);
  border: 1px solid var(--ion-border-color);

  + ion-accordion {
    margin-top: 16px;
  }

  ion-item[slot='header'] {
    --color: #1d1e39;
    //--color: transparent;
    //--color: var(--ion-color-light);
  }

  &.accordion-expanded {
    ion-item[slot='header'] {
      --color: #1d1e39;
      //--color: var(--ion-color-secondary);
    }
  }
}
</style>
