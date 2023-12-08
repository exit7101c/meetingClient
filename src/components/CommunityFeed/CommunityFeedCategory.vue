<template>
  <ion-item lines="none" :detail="true">
    <ion-avatar slot="start">
      <ion-img
        :src="
          thumbnail ||
          'https://cmdg.speedycdn.net/202308/20230807145058_a09c4c1d-0775-4559-bb58-e1926296b702.jpeg'
        "
      />
    </ion-avatar>
    <ion-label>
      <ion-text color="light" class="text-lg"
        >요즘 관심있는 것을 알려주세요!</ion-text
      ><br />
      <ion-text color="secondary" class="text-sm"
        >취향을 저격할 피드를 추천해드립니다.</ion-text
      >
    </ion-label>
  </ion-item>
</template>
<script>
export default {
  name: 'CommunityFeedCategory',
  props: {
    thumbnail: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
ion-item {
  --background: #1d1f29;
  --detail-icon-color: white;
  --border-radius: var(--ion-border-radius);

  ion-avatar {
    margin-right: 10px;
  }

  ion-label {
    overflow: visible;
    contain: inherit;
    white-space: pre-wrap;
  }
}
</style>
