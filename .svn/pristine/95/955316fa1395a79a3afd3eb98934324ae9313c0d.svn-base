<template>
  <ion-chip class="text-sm text-bold" @click="onClickDetailBadgeInfo">
    <!-- <ion-img :src="'https://' + item.icon" /> -->
    <!-- TODO : fontawesome 아이콘 샘플 -->
    <font-awesome-icon class="badgeIcon" :class="{ setAdmin: item?.regRoot == 'setAdmin' }" :icon="computedIcon" />
    <span :class="{ setAdmin: item?.regRoot == 'setAdmin' }">{{ item.badgeNm }}</span>
  </ion-chip>
  <ion-modal class="custom-modal" :is-open="isOpenModal" @ionModalDidDismiss="isOpenModal = false">
    <ion-content>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-text @click="isOpenModal = false">
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </ion-text>
        </ion-buttons>
      </ion-toolbar>
      <div class="layout-container">
        <ion-chip class="text-sm text-bold">
          <!-- <ion-img :src="'https://' + item.icon" /> -->
          <!-- TODO : fontawesome 아이콘 샘플 -->
          <font-awesome-icon class="badgeIcon" :class="{ setAdmin: item?.regRoot == 'setAdmin' }"
                             :icon="computedIcon" />
          <span :class="{ setAdmin: item?.regRoot == 'setAdmin' }">{{ item.badgeNm }}</span>
        </ion-chip>
        <h5>
          <ion-text color="light" class="text-lg">{{ item.badgeDescription }}</ion-text>
        </h5>
      </div>
    </ion-content>
  </ion-modal>
</template>
<script>
export default {
  name: "CertificationBadgeItem",
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    computedIcon() {
      if (this.item.icon) {
        if (this.item.icon == "youtube") {
          return ["fab", this.item.icon];
        } else {
          return ["fas", this.item.icon];
        }
      }
      return "";
    }
  },
  data() {
    return {
      isOpenModal: false
    };
  },
  methods: {
    onClickDetailBadgeInfo() {
      this.isOpenModal = true;
    }
  }
};
</script>
<style lang="scss" scoped>
ion-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 0.5rem;
  background-color: #212121;
  color: #00d967;
  border-radius: var(--ion-border-radius-sm);
  vertical-align: middle;
  height: 26px;

  ion-img {
    width: 1.25rem;
  }

  svg {
    font-size: 1rem;
  }
}

ion-modal {
  --max-width: 345px;
  --height: 240px;

  ion-content {
    text-align: center;
  }
}

.setAdmin {
  color: #d97500;
}
</style>
