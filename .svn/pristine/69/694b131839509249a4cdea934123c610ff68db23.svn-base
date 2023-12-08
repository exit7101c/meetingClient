<template>
  <ion-card>
    <div class="content">
      <ion-item lines="none" @click="$router.push('/certification')">
        <ion-img slot="start" :src="sampleIcon" />
        <ion-label>
          <div>
            <h4>
              <ion-text color="light" class="text-bold text-lg"
              >나의 능력을 인증받아 보세요!
              </ion-text
              >
            </h4>
            <p>
              <ion-text class="text-sm"
              >나의 숨겨인 매력을 어필할 수 있어요!
              </ion-text
              >
            </p>
          </div>
        </ion-label>
      </ion-item>
      <div class="mt-2">
        <div v-if="myBadgeList.length > 0" class="badge-list">
          <CertificationBadgeItem
            v-for="(item, index) in myBadgeList"
            :key="index"
            :item="item"
          />
        </div>
        <div v-else>
          <ion-badge color="dark" class="text-bold d-block is-empty"
          >심사된 인증뱃지가 없습니다.
          </ion-badge
          >
        </div>
      </div>
    </div>
    <div class="btn-detail">
      <ion-icon
        :icon="addOutline"
        slot="end"
        color="light"
        size="small"
        @click="$router.push('/certification')"
      ></ion-icon>
    </div>
  </ion-card>
</template>
<script>
import CertificationBadgeItem from "@/components/Certification/CertificationBadgeItem.vue";
import IconPersonalAssetsBadge01 from "@/assets/img/certification/icon_badge_personal_assets01.png";
import { addOutline } from "ionicons/icons";

export default {
  name: "MyPageCertification",
  components: {
    CertificationBadgeItem
  },
  props: {
    myBadgeList: {
      type: Array
    }
  },
  data() {
    return {
      addOutline,
      sampleIcon: IconPersonalAssetsBadge01
    };
  }
};
</script>
<style lang="scss" scoped>
ion-card {
  position: relative;
  background: var(--ion-color-medium);
  border-radius: var(--ion-border-radius);
  margin: 0;

  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  .content {
    padding: 0.75rem 1rem;
  }

  .btn-detail {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0.5rem;
    background-color: #4850f8;
  }

  ion-item {
    --background: transparent;
    --padding-start: 0;
    --inner-padding-end: 0;
    z-index: 1;

    ion-img {
      position: relative;
      width: 60px;
      height: 60px;
      margin-right: 1rem;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 4px;
      border: 1px solid rgba(255, 255, 255, 0.1);

      &::part(image) {
        filter: brightness(1.2);
      }

      &::before {
        display: block;
        content: '';
        width: 100px;
        height: 100px;
        background-color: rgba(255, 255, 255, 0.1);
        position: absolute;
        left: -55px;
        top: -55px;
        transform: rotate(315deg);
        transform-origin: center center;
      }
    }

    ion-label {
      p {
        color: var(--ion-color-secondary);
      }
    }
  }

  .badge-list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    flex-wrap: wrap;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  ion-badge {
    &.is-empty {
      background-color: rgba(0, 0, 0, 0.25);
      padding: 1rem 0.5rem;
      color: white;
      font-weight: normal;
      border-radius: var(--ion-border-radius);
    }
  }
}
</style>
