<template>
  <div class="mylike-top-notice" :class="{ 'is-active': active }">
    <div class="inner">
      <ion-icon :src="icon"></ion-icon>
      <ion-label>
        <slot name="content"> </slot>
      </ion-label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyLikeTopNotice',
  props: {
    icon: {
      type: String
    },
    active: {
      type: Boolean
    }
  }
};
</script>
<style lang="scss" scoped>
.mylike-top-notice {
  padding: 4px 0;
  background: linear-gradient(90deg, #3a1b8a 0%, #454fac 100%);
  &.is-active {
    background: linear-gradient(90deg, #8858dc 0%, #4e4ee2 100%);
  }
  .inner {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 10px 18px 8px;
  }
  ion-icon {
    position: relative;
    transform: translateY(4px);
    width: 44px;
    height: 50px;
    margin-right: 30px;
  }
  ion-label {
    font-weight: bold;
    line-height: 1;
    --color: white;
    letter-spacing: -0.04em;
  }
}
</style>
