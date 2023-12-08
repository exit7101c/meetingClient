<template>
  <ion-item lines="none">
    <ion-text>
      <h2>{{ item.categoryNm }}</h2>
    </ion-text>
    <ion-icon
      slot="end"
      size="small"
      :icon="checkmark"
      color="primary"
      v-if="checkedItem === item.categoryCd"
    />
  </ion-item>
</template>
<script>
import { checkmark } from 'ionicons/icons';
export default {
  name: 'SelectMeetCategoryItem',
  props: {
    item: {
      type: Object
    },
    checkedItem: {
      type: String
    }
  },
  data() {
    return {
      checkmark
    };
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --border-radius: var(--ion-border-radius);
  --background-focused: var(--ion-color-secondary);
  --color: white;

  ion-text {
    h2 {
      font-weight: bold;
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }
}
</style>
