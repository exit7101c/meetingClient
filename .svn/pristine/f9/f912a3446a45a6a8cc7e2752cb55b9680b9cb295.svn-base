<template>
  <div class="main-section-title">
    <div>
      <ion-row
        class="ion-align-items-start ion-justify-content-between"
        :class="{ 'ion-align-items-center': center }"
      >
        <ion-row class="ion-align-items-center ion-justify-content-center">
          <div class="main-section-title-icon">
            <ion-icon :icon="icon" :alt="`${title} 아이콘`" />
          </div>
          <div>
            <h2 :style="{ color: color }">
              {{ title }}
            </h2>
            <p v-if="subTitle">
              {{ subTitle }}
            </p>
          </div>
        </ion-row>
        <!-- 타이틀 우측 영역 -->
        <slot></slot>
      </ion-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainSectionTitle',
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    icon: {
      type: String
    },
    color: {
      type: String
    },
    center: {
      type: Boolean
    }
  }
};
</script>
<style scoped lang="scss">
.main-section-title {
  padding: 0;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom:1px solid white;
  color: white;


  &-icon {
    margin-right: 8px;
    width: 28px;
    height: 38px;
    ion-icon {
      width: 28px;
      height: 38px;
    }
  }

  h2 {
    font-size: 16px;
    line-height: 1;
    margin: 0;
    letter-spacing: 4px;
    font-weight: bold;
    padding-top: 4px;
  }
  p {
    font-size: 12px;
    line-height: 1;
    margin-top: 8px;
    margin-bottom: 0;
    font-weight: normal;
    color: #ebebeb;
  }
}
</style>
